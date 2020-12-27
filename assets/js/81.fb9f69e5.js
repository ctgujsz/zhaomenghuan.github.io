(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{342:function(n,t,e){"use strict";e.r(t);var a=e(1),i=Object(a.a)({},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"content"},[this._m(0),t("site-footer")],1)},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('var content = `<template>\n  <view>\n    <page-head title="conditional-compile"\n      desc="条件编译">\n    </page-head>\n    <view class="page-content">\n      <view class="amp-title">JS逻辑的条件编译</view>\n      <button type="primary" class="mb15" @tap="onlyWxMPExecuted">仅微信小程序执行</button>\n      <button type="primary" class="mb15" @tap="onlyBaiduMPExecuted">仅百度小程序执行</button>\n      <button type="primary" class="mb15" @tap="onlyAliPayMPExecuted">仅支付宝小程序执行</button>\n      <button type="primary" class="mb15" @tap="wxMPNotExecuted">微信小程序不执行</button>\n    </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  config: {\n    navigationBarTitleText: "条件编译"\n  },\n  methods: {\n    onlyWxMPExecuted() {\n      // #ifdef MP-WEIXIN\n      amp.showToast({\n        title: "微信小程序执行",\n        icon: "success",\n        duration: 2000\n      });\n      // #endif\n    },\n    onlyBaiduMPExecuted() {\n      // #ifdef MP-BAIDU\n      amp.showToast({\n        title: "百度小程序执行",\n        icon: "success",\n        duration: 2000\n      });\n      // #endif\n    },\n    onlyAliPayMPExecuted() {\n      // #ifdef MP-ALIPAY\n      amp.showToast({\n        title: "支付宝小程序执行",\n        icon: "success",\n        duration: 2000\n      });\n      // #endif\n    },\n    wxMPNotExecuted() {\n      // #ifndef MP-WEIXIN\n      amp.showToast({\n        title: "除微信以外都执行",\n        icon: "success",\n        duration: 2000\n      });\n      // #endif\n    }\n  }\n};\n<\/script>\n`;\n\nvar JSIfdefLogicReg = new RegExp(\n  `\\/\\/\\\\s+\\#ifdef((.|\\n)+?)\\/\\/\\\\s+\\#endif`,\n  "gi"\n);\nvar JSIfdefLogicMatch;\nvar avaliMatch = [];\nwhile ((JSIfdefLogicMatch = JSIfdefLogicReg.exec(content)) !== null) {\n  if(!JSIfdefLogicMatch[1].trim().startsWith(platform)) {\n    let index = JSIfdefLogicMatch.index;\n    avaliMatch.push({\n      start: index,\n      length: JSIfdefLogicMatch[0].length,\n      value\n    });\n  }\n}\nconsole.log(avaliMatch);\n')])])])}],!1,null,null,null);t.default=i.exports}}]);