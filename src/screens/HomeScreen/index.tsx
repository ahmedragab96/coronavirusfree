import React, { useEffect } from "react";
import classes from "./styles.module.scss";
import { useObserver } from "mobx-react";
import NavBar from "components/NavBar";
import CardPost from "components/CardPost";
import Grid from "@material-ui/core/Grid";
import { Container } from "react-bootstrap";
import RootStore from "stores";
import { Post } from "../../stores/postsStore";

const { postsStore } = RootStore.Stores;
const HomeScreen: React.FC = () => {
  useEffect(() => {
    const onMount = async () => {
      await postsStore.getPosts();
    };
    onMount();
  }, []);

  return useObserver(() =>
    postsStore.loadingData ? null : (
      <div>
        <NavBar />
        <Container>
          <Grid container spacing={3}>
            {postsStore.posts.map((post: Post) => {
              const postDate = new Date(Number(post.date))
                .toISOString()
                .split("T")[0]
                .replace(/-/g, "/");
              return (
                <CardPost
                  type={post.type}
                  title={post.title}
                  description={post.description}
                  link={post.link}
                  author={post.author}
                  date={postDate}
                />
              );
            })}
          </Grid>
        </Container>
      </div>
    )
  );
};
export default HomeScreen;
