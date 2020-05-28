import { observable, action } from "mobx";
import firebase from "../config/firebase.config";
// import algoliasearch from 'algoliasearch';


export interface Post {
  type: string;
  author: string;
  date: number;
  expiryDate?: number;
  title: string;
  description: string;
  link: string;
  verified?: boolean;
  reported?: boolean;
  id?: string;
}

export interface PostsOptions {
  query?: string; 
  expired?: boolean;
}


// const client = algoliasearch(
//   (process.env.REACT_APP_ALGOLIA_APP_ID as string),
//   (process.env.REACT_APP_ALGOLIA_SEARCH_KEY as string)
// );
// const index = client.initIndex('posts');

class PostsStore {
  @observable posts: Post[] = [];
  @observable activePosts: Post[] = [];
  @observable expiredPosts: Post[] = [];
  @observable loadingData = false;

  @action
  public async getPosts(getPostsOptions?: PostsOptions): Promise<void> {
    try {
      this.loadingData = true;

      await this.getActivePosts(getPostsOptions);
      
      await this.getExpiredPosts(getPostsOptions);

      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  }

  private async getActivePosts(getPostsOptions?: PostsOptions): Promise<void> {
    const db = firebase.firestore();
    let dbQuery = db.collection("posts")
      .where("verified", "==", true)
      .where("expiryDate", ">" , new Date().getTime());

      if (getPostsOptions && getPostsOptions.query) {
        dbQuery = dbQuery.orderBy('title').startAt(getPostsOptions.query).endAt(getPostsOptions.query + '\uf8ff');
      }

      dbQuery.onSnapshot((snapShot) => {
        this.activePosts = snapShot.docs.map((doc: any) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        this.posts = [
          ...this.activePosts,
          ...this.expiredPosts
        ];
        this.loadingData = false;
      });
  }

  private async getExpiredPosts(getPostsOptions?: PostsOptions): Promise<void> {
    const db = firebase.firestore();
    let dbQuery = db.collection("posts")
      .where("verified", "==", true)
      .where("expiryDate", "<" , new Date().getTime());

      if (getPostsOptions && getPostsOptions.query) {
        dbQuery = dbQuery.orderBy('title').startAt(getPostsOptions.query).endAt(getPostsOptions.query + '\uf8ff');
      }

      dbQuery.onSnapshot((snapShot) => {
        this.expiredPosts = snapShot.docs.map((doc: any) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        this.posts = [
          ...this.activePosts,
          ...this.expiredPosts
        ];
        this.loadingData = false;
      });
  }
  
  @action
  public async addPost(newPost: Post): Promise<void> {
    try {
      const db = firebase.firestore();
      const response = await db.collection("posts").add(newPost);
      console.log(response.id);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  }

  @action
  public async reportPost(postId: string, reasons: string[]): Promise<void> {
    try {
      const db = firebase.firestore();
      await db.collection("posts").doc(postId).update({
        reported: true,
        reportReasons: reasons,
      })
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export default new PostsStore();
