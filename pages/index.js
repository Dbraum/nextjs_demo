import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRoot,withStore } from "../src/hoc";
import GoodsSwipe from "../src/components/googs/GoodsSwipe";
import InsetDividers from "../src/components/googs/InsetDividers";
import CartAction from "../src/components/googs/CartAction";
import { Page, Body, Footer } from "../src/components/Layout";
import GoodsDetail from "../src/smartComponent/GoodsDetail";

@withStore
@withRoot
export default class Index extends React.Component {

  render() {
    return (
      <Page>
        <Body>
          <GoodsDetail/>
        </Body>
        <Footer>
          <CartAction />
        </Footer>
      </Page>
    );
  }
}
