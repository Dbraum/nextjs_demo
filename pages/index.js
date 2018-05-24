import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRoot } from "../src/hoc";
import GoodsSwipe from "../src/components/googs/GoodsSwipe";
import InsetDividers from "../src/components/googs/InsetDividers";
import CartAction from "../src/components/googs/CartAction";
import { Page, Body, Footer } from "../src/components/Layout";

const styles = theme => ({
  root: {
    textAlign: "center"
  }
});
@withRoot
@withStyles(styles)
export default class Index extends React.Component {
  state = {
    goods: {
      title: "美国伽力果（约680g/3个）",
      price: 2680,
      express: "免运费",
      remain: 19,
      thumbs: [
        "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
        "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
      ]
    }
  };

  render() {
    const { classes } = this.props;
    const { goods = {} } = this.state;
    const { thumbs = [] } = goods;

    return (
      <Page>
        <Body>
          <GoodsSwipe imgs={thumbs} />
          <InsetDividers goods={goods} />
        </Body>
        <Footer>
          <CartAction />
        </Footer>
      </Page>
    );
  }
}
