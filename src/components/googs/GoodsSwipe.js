import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import InsetDividers from "./InsetDividers";


const styles = theme => ({
  root: {
    position: "relative"
  },
  mobileStepper: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "inherit",
    bottom: 10
  },
  img: {
    height: "auto",
    minHeight: 255,
    maxHeight: 600,
    overflow: "hidden",
    width: "100%"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme, imgs = [] } = this.props;
    const { activeStep } = this.state;

    const maxSteps = imgs.length;

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {imgs.map(img => (
            <img key={img} className={classes.img} src={img} alt={img} />
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  imgs: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};
SwipeableTextMobileStepper.defaultProps = {
  imgs: []
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
