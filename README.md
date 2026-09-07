# 春日与你 · 互动闪卡

两个人、三只猫，一整个春天。支持拖动旋转、翻面、调整光泽与景深，以及保存当前画面。

## 运行与更新

这是一个可直接发布到 GitHub Pages 的静态网站。图片、三维模型和运行程序均随站点提供，访客无需登录，也无需连接 ChatGPT 服务。

修改 `app.source.js` 后，运行：

```sh
npm ci
npm run build
npm start
```

将更新后的 `app.js` 一同提交。GitHub Pages 使用 `main` 分支的根目录作为发布来源。

## 致谢与素材

制作基于 [Holo Card Studio](https://github.com/EverettFish/holo-card-studio)，网页使用 [Three.js](https://threejs.org/)。相关软件许可见 `THIRD-PARTY-NOTICES.txt`。

卡片插画根据用户提供的参考图制作；软件许可不授予插画、照片等素材的再使用权。
