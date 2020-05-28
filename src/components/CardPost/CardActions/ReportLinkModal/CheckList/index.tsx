import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { Button } from "react-bootstrap";
import clsx from 'clsx';
import RootStore from "stores";

const { postsStore } = RootStore.Stores;

const GreenCheckbox = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    border: '1px solid #000000',
    borderRadius: 0,
    width: 26,
    height: 26,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 26,
      height: 26,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

const reportReasons = [
  'Link is wrong.',
  'Link is abusing for some cultures.',
  'Link contains inappropriate stuff.',
  'Link contains violent content.',
  'Link is expired',
];

interface Props {
  id: string;
}
const CheckListComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkboxes: reportReasons.reduce(
      (options: any, option: any) => ({
        ...options,
        [option]: false
      }),
      {}
    )});

  const handleCheckboxChange = (changeEvent : React.ChangeEvent<HTMLInputElement>) => {
    const { name } = changeEvent.target;

    setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  const handleFormSubmit = async (formSubmitEvent : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    formSubmitEvent.preventDefault();

    let reportReasons: string[] = [];

    Object.keys(state.checkboxes)
      .filter(checkbox => state.checkboxes[checkbox])
      .forEach(checkbox => {
        reportReasons.push(checkbox);
    });

    await postsStore.reportPost(
      props.id,
      reportReasons
    );
  };

  return (
    <React.Fragment>
      <FormGroup>
            {
              reportReasons.map((reason: string) => {
                return (
                  <FormControlLabel
                    key={Math.random().toString()}
                    control={
                      <GreenCheckbox
                        key={reason}
                        checked={state.checkboxes[reason]}
                        onChange={handleCheckboxChange}
                        name={reason}
                        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                        icon={<span className={classes.icon} />}  
                      />
                    }
                    label={reason}
                  />
                );
              })
            }
          </FormGroup>
          <Button
            onClick={handleFormSubmit}
          >
            Report
          </Button>
    </React.Fragment>
  );
};

export default CheckListComponent;
