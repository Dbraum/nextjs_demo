/*
 * @Author: wukunpeng 
 * @Date: 2018-05-24 22:02:50 
 * @Last Modified by:   wukunpeng 
 * @Last Modified time: 2018-05-24 22:02:50 
 */
import { observable, computed, action } from "mobx";

const languages = [
  {
    label: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  },
  {
    name: "繁體中文",
    value: "zh-TW"
  },
  {
    name: "français",
    value: "fr-FR"
  },
  {
    name: "日本の",
    value: "ja-JP"
  }
];

export default class UIStore {
  @observable currentLang = "zh-CN";
  @observable languages = languages;

  constructor(rootStore) {
    this.root = rootStore;
  }

  @action
  changeLang(language = "zh-CN") {
    this.currentLang = language;
  }
}
