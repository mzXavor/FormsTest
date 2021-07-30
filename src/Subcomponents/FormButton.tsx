import React from 'react';
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        fontWeight: 600,
        backgroundColor: "#ff2a12",
        color: theme.palette.getContrastText("#ff2a12"),
        
        '&:hover': {
            backgroundColor: "#bd3627",
            color: theme.palette.getContrastText("#bd3627"),
        },
    },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function FormButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Enter Now
      </ColorButton>
    </div>
  );
}