import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import LocationOn from "@material-ui/icons/LocationOn";
import LocalConvenienceStore from "@material-ui/icons/LocalConvenienceStore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const styles = theme => ({
  root: {
    width: "100%",
    position: "relative",
    top: -5
  },
  divider: {
    marginLeft: theme.spacing.unit * 2
  },
  secondPaper: {
    marginTop: theme.spacing.unit * 4
  },
  button: {
    backgroundColor: "#f44",
    padding: 0
  }
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper>
        <List>
          <ListItem>
            <ListItemText
              primary="美国伽力果（约680g/3个）"
              secondary="¥26.80"
            />
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem>
            <div>
              <span>运费：免运费</span>
              <span>剩余：19</span>
              <style jsx>{`
                span {
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.54);
                }
                span:first-of-type {
                  margin-right: 50px;
                }
              `}</style>
            </div>
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.secondPaper}>
        <List style={{ padding: 0 }}>
          <ListItem button>
            <ListItemIcon>
              <LocalConvenienceStore />
            </ListItemIcon>
            <ListItemText
              inset
              primary={
                <div>
                  云徙的店 <Tag>官方</Tag>
                </div>
              }
              style={{ padding: 0 }}
            />
            <span>进入店铺</span>
            <ListItemIcon>
              <ChevronRight style={{ marginRight: 0 }} />
            </ListItemIcon>
            <style jsx>{`
              span {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.54);
              }
            `}</style>
          </ListItem>
          <Divider inset component="li" className={classes.divider} />
          <ListItem button>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText inset primary="线下门店" style={{ padding: 0 }} />
            <ListItemIcon>
              <ChevronRight style={{ marginRight: 0 }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.secondPaper}>
        <List style={{ padding: 0 }}>
          <ListItem button>
            <ListItemText inset primary="查看商品详情" style={{ padding: 0 }} />
            <ListItemIcon>
              <ChevronRight style={{ marginRight: 0 }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetDividers);

function Tag({ children }) {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          display: inline-block;
          padding: 0 5px;
          line-height: 18px;
          border-radius: 3px;
          font-size: 10px;
          background: #c9c9c9;
          color: #fff;
          background: #f44;
        }
      `}</style>
    </span>
  );
}
