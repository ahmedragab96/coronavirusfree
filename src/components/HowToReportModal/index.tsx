import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Typography, Divider } from "@material-ui/core";
import styled from "styled-components";
import Assets from "assets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(8, 8, 8, 8),
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
const CustomImg = styled.img`
  width: 50vw;

`;
const HowToReportModal: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Report link?
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
              It's Simple
            </Title>
            <Description id="transition-modal-description">
              Any link, just click on
              <span className="mx-2">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.125 3.69437C7.125 3.92643 7.21719 4.14899 7.38128 4.31309C7.54538 4.47718 7.76794 4.56937 8 4.56937C8.23206 4.56937 8.45462 4.47718 8.61872 4.31309C8.78281 4.14899 8.875 3.92643 8.875 3.69437C8.875 3.4623 8.78281 3.23974 8.61872 3.07565C8.45462 2.91155 8.23206 2.81937 8 2.81937C7.76794 2.81937 7.54538 2.91155 7.38128 3.07565C7.21719 3.23974 7.125 3.4623 7.125 3.69437ZM7.125 8.06937C7.125 8.30143 7.21719 8.52399 7.38128 8.68808C7.54538 8.85218 7.76794 8.94437 8 8.94437C8.23206 8.94437 8.45462 8.85218 8.61872 8.68808C8.78281 8.52399 8.875 8.30143 8.875 8.06937C8.875 7.8373 8.78281 7.61474 8.61872 7.45065C8.45462 7.28655 8.23206 7.19437 8 7.19437C7.76794 7.19437 7.54538 7.28655 7.38128 7.45065C7.21719 7.61474 7.125 7.8373 7.125 8.06937ZM7.125 12.4444C7.125 12.6764 7.21719 12.899 7.38128 13.0631C7.54538 13.2272 7.76794 13.3194 8 13.3194C8.23206 13.3194 8.45462 13.2272 8.61872 13.0631C8.78281 12.899 8.875 12.6764 8.875 12.4444C8.875 12.2123 8.78281 11.9897 8.61872 11.8256C8.45462 11.6616 8.23206 11.5694 8 11.5694C7.76794 11.5694 7.54538 11.6616 7.38128 11.8256C7.21719 11.9897 7.125 12.2123 7.125 12.4444Z"
                    fill="#211F1F"
                  />
                </svg>
              </span>
              then click on "Report link"
            </Description>
            <Divider className="my-3" />
            <CustomImg
              src={Assets.Images.howToReportaLink}
              alt="how to report a link to us?"
              draggable="false"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default HowToReportModal;
