import Teek, { teekConfigSymbol } from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import "vitepress-theme-teek/index.css";
// import NoticeContent from "./components/NoticeContent.vue";
import BannerImgArrow from "./components/BannerImgArrow.vue";

import { defineComponent, h, nextTick, provide, watch } from "vue";
import { useData, useRoute } from "vitepress";
// import  { artalkSymbol, giscusSymbol, walineSymbol } from "vitepress-theme-teek";

import "vitepress-theme-teek/vp-plus/code-block-mobile.scss"; // 移动端代码块样式加 padding
import "vitepress-theme-teek/vp-plus/sidebar.scss"; // 侧边栏字体样式
import "vitepress-theme-teek/vp-plus/nav.scss"; // 导航栏样式
import "vitepress-theme-teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/vp-plus/aside.scss"; // 文章目录样式
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss"; // 文档以及标题样式
import "vitepress-theme-teek/vp-plus/mark.scss"; // 文章 mark 标签样式
import "vitepress-theme-teek/vp-plus/container.scss"; // Markdown 容器样式
import "vitepress-theme-teek/vp-plus/container-left.scss"; // Markdown 容器左框样式
// import "vitepress-theme-teek/vp-plus/container-flow.scss"; // Markdown 容器流体样式
import "vitepress-theme-teek/vp-plus/blockquote.scss"; // 引用样式
// import "vitepress-theme-teek/vp-plus/blockquote-one.scss"; // 引用样式-增强
import "vitepress-theme-teek/vp-plus/index-rainbow.scss"; // Vitepress 首页彩虹渐变样式
import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss"; // Banner 描述渐变样式
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss"; // Banner 全屏图片放大样式


import "./styles/code-bg.scss";
import "./styles/index.scss";


import { useFooterRuntime } from "./helper/useFooterRuntime"; // 首页底部添加运行时间
// import confetti from "./components/Confetti.vue"; //导入五彩纸屑组件
import "vitepress-markdown-timeline/dist/theme/index.css"; // 引入时间线样式
import "virtual:group-icons.css"; //代码组图标样式
import NotFound from "./components/NotFound.vue"; // 导入404组件


// 评论组件
// import { init } from "@waline/client";
// import "@waline/client/style";
// import Giscus from "@giscus/vue";
// import "artalk/Artalk.css";
// import Artalk from "artalk";


export default {
  extends: Teek,
  
  async enhanceApp({ app, router }) {  //添加router
    // 注册组件
    // app.component("confetti", confetti); //五彩纸屑  
  },

  Layout: defineComponent({
    name: "LayoutProvider",
    setup() {
      const { start, stop } = useFooterRuntime();
      const props: Record<string, any> = {};
      const { frontmatter, isDark, page } = useData();

      // 注入评论区实例
      // provide(walineSymbol, (options, el) => init({ serverURL: options.serverURL!, dark: options.dark, el }));
      // provide(giscusSymbol, () => Giscus);
      // provide(artalkSymbol, (options, el) =>
      //   Artalk.init({
      //     el,
      //     darkMode: isDark.value,
      //     pageKey: route.path,
      //     pageTitle: page.value.title,
      //     server: options.server,
      //     site: options.site,
      //   })
      // );

      // 添加自定义 class 逻辑
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }
      const route = useRoute();

      watch(
        frontmatter,
        () => {
          nextTick(() => {
            if (frontmatter.value.layout === "home") start();
            else stop();
          });
        },
        { immediate: true }
      );


      return () =>
        h(TeekLayoutProvider, props, {
          // "teek-notice-content": () => h(NoticeContent),
          "teek-home-banner-feature-after": () => h(BannerImgArrow),
          // 自定义404页面内容
          "not-found": () => h(NotFound),
        });
    },
  }),


};
