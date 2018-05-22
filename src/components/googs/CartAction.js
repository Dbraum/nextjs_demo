import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Phone from "@material-ui/icons/Phone";
import PersonPinIcon from "@material-ui/icons/PersonPin";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    minWidth: 30,
    width: "100%",
  },
  tabShop: {
    height: "100%",
    width: "100%",
    color: "white",
    backgroundColor: "#f85"
  },
  tabBuy: {
    height: "100%",
    width: "100%",
    color: "white",
    backgroundColor: "#f44"
  },
  labelContainer: {
    padding: "6px 0px 0px 0px"
  },
  
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Tab
              icon={<Phone />}
              label="客服"
              classes={{
                labelContainer: classes.labelContainer,
                root: classes.root
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Tab
              icon={<ShoppingCart />}
              label={<span>购物车</span>}
              classes={{
                labelContainer: classes.labelContainer,
                root: classes.root
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Tab label="加入购物车" className={classes.tabShop} />
          </Grid>
          <Grid item xs={4}>
            <Tab label="立即购买" className={classes.tabBuy} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
