import { initStore } from "../store";
import { Provider } from "mobx-react";

export const withStore = Page => {
  class Extended extends React.Component {
    constructor(props) {
      super(props);
      this.store = initStore(props.isServer);
    }

    render() {
      return (
        <Provider {...this.store}>
          <Page {...this.props} />
        </Provider>
      );
    }
  };

  Extended.getInitialProps = async (ctx) =>{
    const composedInitialProps = Page.getInitialProps
      ? await Page.getInitialProps(ctx)
      : {};
    const isServer = !!ctx.req;
    const store = initStore(isServer);
    return {
      ...composedInitialProps,
      isServer
    };
  }

  return Extended;
};
