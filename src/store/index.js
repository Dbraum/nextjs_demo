/*
 * @Author: wukunpeng 
 * @Date: 2018-05-24 22:03:10 
 * @Last Modified by: wukunpeng
 * @Last Modified time: 2018-05-24 22:45:38
 */
import { action, observable } from "mobx";
import UIStore from "./UIStore";
import GoodsStore from "./GoodsStore";
let store = null;

class RootStore {
  constructor(isServer) {
    this.isServer = isServer;
    this.view = new UIStore(this);
    this.goods = new GoodsStore(this);
  }
}

export function initStore(isServer) {
  if (isServer) {
    store = new RootStore(isServer);
    global.store = store;
    return store;
  } else {
    if (store === null) {
      store = new RootStore(isServer);
    }
    global.store = store;
    return store;
  }
}
