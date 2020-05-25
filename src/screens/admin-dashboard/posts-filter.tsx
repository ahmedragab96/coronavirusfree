import React from "react";
import { Form } from "react-final-form";
import { Box, Button, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { TextInput, NullableBooleanInput } from "react-admin";

const PostFilterForm = (props: any) => {
  const {
    displayedFilters,
    filterValues,
    setFilters,
    hideFilter,
  } = props;
  if (!displayedFilters.main) return null;

  const onSubmit = (values: any) => {
    if (Object.keys(values).length > 0) {
      setFilters(values);
    } else {
      hideFilter("main");
    }
  };

  const resetFilter = () => {
    setFilters({}, []);
  };

return (
    <div>
      <Form onSubmit={onSubmit} initialValues={filterValues}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box mt={8} />
            <Box display="flex" alignItems="flex-end" mb={1}>
              <Box component="span" mr={2}>
                {/* Full-text search filter. We don't use <SearchFilter> to force a large form input */}
                <TextInput
                  resettable
                  helperText={false}
                  source="title"
                  label="Search"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position='end'
                      >
                        <SearchIcon color="disabled" />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <Box component="span" mr={2}>
                {/* Commentable filter */}
                <NullableBooleanInput helperText={false} source="verified" />
              </Box>
              <Box component="span" mr={2} mb={1.5}>
                <Button variant="outlined" color="primary" type="submit">
                  Filter
                </Button>
              </Box>
              <Box component="span" mb={1.5}>
                <Button variant="outlined" onClick={resetFilter}>
                  Close
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Form>
    </div>
  );
};

export default PostFilterForm;