/*
 * @Author: wukunpeng 
 * @Date: 2018-05-24 22:08:42 
 * @Last Modified by:   wukunpeng 
 * @Last Modified time: 2018-05-24 22:08:42 
 */
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

/**
 * @description Styled Layout component
 * 
 * @example
 * <Page>
 *  <Header>header</Header>
 *  <Body>header</Body>
 *  <Footer>header</Footer>
 * </Page>
 */


export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Paper>{children}</Paper>;
  }
}

export function Page(props) {
  return (
    <div className="page">
      {props.children}
      <style jsx>{`
        .page {
          display: flex;
          height: 100%;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export function Header(props) {
  return (
    <div className="page_header">
      {props.children}
      <style jsx>{`
        .page_header {
          background-color: #fff;
          text-align: center;
          position: relative;
          background-color: black;
          padding: 0px;
        }
      `}</style>
    </div>
  );
}

export function Body(props) {
  return (
    <div className="page_body">
      {props.children}
      <style jsx>{`
        .page_body {
          flex: 1;
          overflow: auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export function Footer({ height, children }) {
  return (
    <div className="footer">
      {children}
      <style jsx>{`
        .footer {
          background-color: #fff;
          text-align: center;
          position: relative;
        }
      `}</style>
    </div>
  );
}
