# Ant Design 图标 Font bundle of sketch-iconfont

## 如何安装使用

> For 设计师

1. 安装 Sketch 插件 [sketch-iconfont](https://github.com/keremciu/sketch-iconfont)。
2. 下载并解压本仓库：[点击下载](https://github.com/ant-design/font-bundles/archive/master.zip)。
3. 从解压的 `font-bundles-master` 目录里找到并安装 `ttf-files/anticon.ttf` 字体文件。
4. 打开 Sketch，点开 `sketch-iconfont` 插件菜单里的 `Install a Font-Bundle`。选择刚刚解压的 `font-bundles-master` 目录并确定。
   ![](https://gw.alipayobjects.com/zos/rmsportal/DpbyRtuMgYsnpROxorYf.png)

**好了，您已完成安装**！现在可以点开 `sketch-iconfont` 菜单里的 `Grid Insert => anticon`，然后自由的选择图标了。

![](https://gw.alipayobjects.com/zos/rmsportal/BEntOkYoFlADMhknMTgx.gif)

## 如何更新 Ant Design 的图标

> For 程序员

```bash
$ curl https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/core/iconfont.less | node update-anticon.js
```
