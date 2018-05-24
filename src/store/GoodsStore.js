/*
 * @Author: wukunpeng 
 * @Date: 2018-05-24 22:02:50 
 * @Last Modified by: wukunpeng
 * @Last Modified time: 2018-05-24 22:30:37
 */
import { observable, computed, action } from "mobx";


export default class GoodsStore {
  @observable current = {
    title: "美国伽力果（约680g/3个）",
    price: 2680,
    express: "免运费",
    remain: 19,
    thumbs: [
      "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
      "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
    ]
  };

  constructor(rootStore) {
    this.root = rootStore;
  }
  
}
