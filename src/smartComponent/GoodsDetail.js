import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import GoodsSwipe from "../components/googs/GoodsSwipe";
import InsetDividers from "../components/googs/InsetDividers";
@inject(store => {
  return {
    goods: store.goods,
    view: store.view
  };
})
@observer
export default class GoodsDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const goods = this.props.goods.current;
    return (
      <React.Fragment>
        <GoodsSwipe imgs={goods.thumbs.slice()} />
        <InsetDividers goods={goods} />
      </React.Fragment>
    );
  }
}
