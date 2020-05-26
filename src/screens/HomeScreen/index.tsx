// Packages
import React, { useEffect, useState } from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
// Components
import NavBar from "components/NavBar";
import CardPost from "components/CardPost";
import SkeletonUIHome from "./SkeletonUI";
// Store
import RootStore from "stores";
import { Post } from "../../stores/postsStore";
import { Typography, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const { postsStore } = RootStore.Stores;

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
        borderRadius: 0,
        backgroundColor: "rgba(0,0,0,0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0)",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
    },
  },
})(TextField);

const HomeScreen: React.FC = () => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = async (query: string) => {
    if (query.length < 3) {
      await postsStore.getPosts();
      return;
    }
    await postsStore.getPosts({query});
  };

  useEffect(() => {
    const onMount = async () => {
      await postsStore.getPosts();
    };
    onMount();
  }, []);
  return useObserver(() =>
    postsStore.loadingData ? (
      <SkeletonUIHome />
    ) : (
      <div>
        <NavBar />
        <Container>
          <Typography
            style={{ color: "rgba(196, 196, 196, 1)" }}
            className="my-2"
          >
            All resources made free due to penadmic
          </Typography>
          <CssTextField
            id="outlined-basic"
            placeholder="Search ..."
            variant="outlined"
            fullWidth={true}
            className="mb-3"
            value={searchText}
            onChange={(event: any) => setSearchText(event.target.value)}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') {
                handleSearch(searchText);
              }
            }}
          />
        </Container>
        <Container>
          <Grid container spacing={3}>
            {postsStore.posts.map((post: Post) => {
              const postDate = new Date(post.date)
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
                  expiryDate={post.expiryDate}
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
