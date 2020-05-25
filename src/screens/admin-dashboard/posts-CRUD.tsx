import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  TextField,
  DeleteButton,
  RichTextField,
  UrlField,
  BulkDeleteButton,
  BooleanField
} from "react-admin";
import VerifyPostsButton from "./verifyPosts";

import { Button } from "@material-ui/core";
import ContentFilter from "@material-ui/icons/FilterList";
import PostFilterForm from "./posts-filter";

const PostFilterButton = ({ showFilter }: {showFilter : any}) => (
  <Button
    size="small"
    color="primary"
    onClick={() => showFilter("main")}
    startIcon={<ContentFilter />}
  >
    Filter
  </Button>
);

const PostFilter = (props: any) => {
  return props.context === "button" ? (
    <PostFilterButton {...props} />
  ) : (
    <PostFilterForm {...props} />
  );
};

const PostBulkActionButtons = (props: any) => (
  <React.Fragment>
      <VerifyPostsButton label="Verify Posts" {...props} />
      {/* default bulk delete action */}
      <BulkDeleteButton {...props} />
  </React.Fragment>
);

export const PostList = (props: any) => (
  <List {...props} filters={<PostFilter />} bulkActionButtons={<PostBulkActionButtons />}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="description" />
      <UrlField source="link" />
      <BooleanField source="verified" />
      <BooleanField source="reported" />
      {/* <TextField source="verified" /> */}
      <DeleteButton label="" />
    </Datagrid>
  </List>
);
