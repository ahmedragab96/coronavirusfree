import { observable, action } from "mobx";
import firebase from "../config/firebase.config";

export interface Post {
  type: string;
  author: string;
  date: number;
  expiryDate?: number;
  title: string;
  description: string;
  link: string;
  verified?: boolean;
}
class PostsStore {
  @observable posts: Post[] = [];
  @observable loadingData = false;

  @action
  public async getPosts(): Promise<void> {
    try {
      this.loadingData = true;
      const db = firebase.firestore();
      db.collection("posts")
        .where("verified", "==", true)
        .onSnapshot((snapShot) => {
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
