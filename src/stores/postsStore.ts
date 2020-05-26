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
}

export interface PostsOptions {
  query: string; 
}


// const client = algoliasearch(
//   (process.env.REACT_APP_ALGOLIA_APP_ID as string),
//   (process.env.REACT_APP_ALGOLIA_SEARCH_KEY as string)
// );
// const index = client.initIndex('posts');

class PostsStore {
  @observable posts: Post[] = [];
  @observable loadingData = false;

  @action
  public async getPosts(getPostsOptions?: PostsOptions): Promise<void> {
    try {
      this.loadingData = true;
      const db = firebase.firestore();
      let dbQuery = db.collection("posts")
        .where("verified", "==", true);

        if (getPostsOptions && getPostsOptions.query) {
          dbQuery = dbQuery.orderBy('title').startAt(getPostsOptions.query).endAt(getPostsOptions.query + '\uf8ff');
        }

        dbQuery.onSnapshot((snapShot) => {
          this.posts = snapShot.docs.map((doc: any) => {
            return doc.data();
          });
          this.loadingData = false;
        });
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
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
}

export default new PostsStore();
