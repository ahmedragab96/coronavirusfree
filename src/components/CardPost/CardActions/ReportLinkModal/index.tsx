import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Divider, Typography } from "@material-ui/core";
import CheckListComponent from "./CheckList";
import styled from "styled-components";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(8, 32, 8, 8),
    },
  })
);

const Title = styled(Typography)`
  font-family: "FUTURABold" !important;
  font-weight: bold !important;
`;
const Description = styled(Typography)`
  font-family: "FUTURALight" !important;
`;

interface Props {
  id: string;
}

const ReportLinkModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSelect = (selected: string) => {
    console.log("selected", selected);
  };
  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Report link
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Title id="transition-modal-title" variant="h2">
              REPORT A LINK
            </Title>
            <Description id="transition-modal-description">
              Select why you want report this link?
            </Description>
            <Divider className="my-3" />
            <CheckListComponent id={props.id}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReportLinkModal;
