import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  })
);
interface Props {
  expiryDate: number;
}

const SepearatorPopOver: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const Sepearator = styled.div`
    width: 60%;
    height: 6px;
    background-color: #d4c863;
  `;

  const getExpiryPeriod = () => {
    const oneDay = 1000 * 60 * 60 * 24;
    const now = new Date().getTime();

    let period = Math.round(now - props.expiryDate) / oneDay;

    return period.toFixed(0);
  }
  return (
    <div>
      <div
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Sepearator color="#D4C863" />
      </div>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>This will expire in { getExpiryPeriod() } days</Typography>
      </Popover>
    </div>
  );
};
export default SepearatorPopOver;
