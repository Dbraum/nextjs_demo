import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import InsetDividers from "./InsetDividers";


const tutorialSteps = [
  {
    label: "How to be happy :)",
    imgPath: "https://material-ui.com/static/images/steppers/1-happy.jpg"
  },
  {
    label: "1. Work with something that you like, like…",
    imgPath: "https://material-ui.com/static/images/steppers/2-work.jpg"
  },
  {
    label: "2. Keep your friends close to you and hangout with them",
    imgPath: "https://material-ui.com/static/images/steppers/3-friends.jpg"
  },
  {
    label: "3. Travel everytime that you have a chance",
    imgPath: "https://material-ui.com/static/images/steppers/4-travel.jpg"
  },
  {
    label: "4. And contribute to Material-UI :D",
    imgPath: "https://material-ui.com/static/images/steppers/5-mui.png"
  }
];

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
    height: 255,
    overflow: "hidden",
    width: "100%"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <img
              key={step.label}
              className={classes.img}
              src={step.imgPath}
              alt={step.label}
            />
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
