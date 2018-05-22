import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import { withRoot } from "../src/hoc";
import GoodsSwipe from "../src/components/googs/GoodsSwipe";
import InsetDividers from "../src/components/googs/InsetDividers";
import TabsButton from "../src/components/googs/TabsButton";

const styles = theme => ({
  root: {
    textAlign: "center"
  }
});
@withRoot
@withStyles(styles)
export default class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <GoodsSwipe />
        <InsetDividers />
      </div>
    );
  }
}
