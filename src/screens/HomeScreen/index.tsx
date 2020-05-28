// Packages
import React, { useEffect, useState, useMemo } from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import SwipeableViews from "react-swipeable-views";
import {
  TextField,
  Theme,
  Typography,
  Box,
  Tabs,
  Tab,
  useMediaQuery,
} from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import styled from "styled-components";
// Components
import NavBar from "components/NavBar";
import CardPost from "components/CardPost";
import SkeletonUIHome from "./SkeletonUI";
// Store
import RootStore from "stores";
import { Post } from "../../stores/postsStore";

const { postsStore } = RootStore.Stores;

// Tabs
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      width: "100%",
    },
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

const TabsHeader = styled(Container)`
  display: flex;
`;

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: "#000",
      zIndex: 0,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      borderRadius: 100,
      outline: "none",
      width: 100,
      "&:focus": {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple={true} {...props} />);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
// Tabs Ended

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
  const [searchText, setSearchText] = useState("");

  const handleSearch = useMemo(
    () => async () => {
      if (searchText.length < 3) {
        await postsStore.getPosts();
        return;
      }
      await postsStore.getPosts({ query: searchText });
    },
    [searchText]
  );

  useEffect(() => {
    const onMount = async () => {
      await postsStore.getPosts();
    };
    onMount();
  }, []);

  const [value, setValue] = useState(0);
  const screenSize = useMediaQuery("(max-width:700px)");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

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
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </Container>
        <TabsHeader>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="All" {...a11yProps(0)} />
            <StyledTab label="Free" {...a11yProps(1)} />
          </StyledTabs>
        </TabsHeader>
        <Container>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                {postsStore.posts.map((post: Post) => {
                  const postDate = new Date(post.date)
                    .toISOString()
                    .split("T")[0]
                    .replace(/-/g, "/");
                  return (
                    <CardPost
                      key={String(Math.random())}
                      type={post.type}
                      title={post.title}
                      description={post.description}
                      link={post.link}
                      author={post.author}
                      date={postDate}
                      expiryDate={post.expiryDate}
                      id={String(post.id)}
                    />
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                  {/* Expired */}
              </Grid>{" "}
            </TabPanel>
          </SwipeableViews>
        </Container>
      </div>
    )
  );
};
export default HomeScreen;
