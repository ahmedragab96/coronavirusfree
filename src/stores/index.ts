import PostsStore from "./postsStore";

export class RootStore {

  Stores = {
    postsStore: PostsStore,
  }
  
}
export default new RootStore();