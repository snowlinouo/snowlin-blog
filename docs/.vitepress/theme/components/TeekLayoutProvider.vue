<script setup lang="ts" name="TeekLayoutProvider">
import type { TeekConfig } from "vitepress-theme-teek";
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import zhTw from "../locale/zh-tw";

import { useData } from "vitepress";
import { watch, nextTick, ref, provide } from "vue";
import { teekBlogFullConfig } from "../config/teekConfig";

import { useRuntime } from "../hooks/useRuntime";
//import { useRibbon } from "../hooks/useRibbon";  //导入彩带背景

import ScrollProgressBar from "./ScrollProgressBar.vue" //导入顶部滚动条组件
import ContributeChart from "./ContributeChart.vue";  //导入贡献图组件
import ConfigSwitch from "./ConfigSwitch.vue";  //导入配置切换组件

const ns = "layout-provider";
const { frontmatter } = useData();

const teekConfig = ref(teekBlogFullConfig);  // 博客类风格的配置,默认卡片风格
provide(teekConfigContext, teekConfig);

// 彩带背景
//const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false, clickReRender: true });

// 页脚运行时间
const { start: startRuntime, stop: stopRuntime } = useRuntime("2025-03-14 00:00:00", {
    prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>本站已在地球上苟活了`,
});

const watchRuntimeAndRibbon = async (layout: string, style: string) => {
  const isHome = layout === "home";
  const isDoc = [undefined, "blog-full"].includes(layout);
  const isBlog = style.startsWith("blog");

  // 博客类风格的首页显示运行时间
  await nextTick();
  if (isHome && isBlog) startRuntime();
  else stopRuntime();

  // 博客类风格的首页显示彩带 & 设置了 pageStyle 的文章页显示彩带
  //if ((isHome && isBlog && style !== "blog-body") || (isDoc && !!teekConfig.value.pageStyle)) startRibbon();
  //else stopRibbon();
};

// 默认文档风
const currentStyle = ref("blog-full");

watch(frontmatter, async newVal => watchRuntimeAndRibbon(newVal.layout, currentStyle.value), { immediate: true });

const handleConfigSwitch = (config: TeekConfig, style: string) => {
  teekConfig.value = config;

  watchRuntimeAndRibbon(frontmatter.value.layout, style);
};
</script>

<template>
  <!--网页标题变化组件  -->
  <!-- <TitleChange /> -->

  <!-- 看板娘组件 -->
  <!-- <OhMyLive2D /> -->

  <!-- 顶部滚动条组件 -->
  <ScrollProgressBar />

  <Teek.Layout :locale="zhTw">
    <template #layout-top>
    </template>

    <template #teek-archives-top-before>
      <!-- 贡献图表 -->
      <ContributeChart />
    </template>
    
    <template #teek-theme-enhance-bottom>
      <div :class="[ns, 'flx-align-center']">
        <ConfigSwitch v-model="currentStyle" @switch="handleConfigSwitch" />
      </div>
    </template>

    <template #nav-screen-content-after>
      <ConfigSwitch v-model="currentStyle" @switch="handleConfigSwitch" />
    </template>

    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </Teek.Layout>
</template>

<style lang="scss" scoped>
$namespace: tk-layout-provider;

.#{$namespace}-appearance {
  display: flex;

  &::before {
    margin-left: 16px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: "";
  }

  &__switch {
    margin-left: 16px;
    cursor: pointer;

    .name {
      user-select: none;
    }
  }
}

// 修复 twikoo 样式影响头像
.tk-avatar {
    width: 24px;
    height: 24px;
}
</style>

<style lang="scss">
// 修复 twikoo 样式影响头像
.tk-my__avatar .tk-avatar {
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss">
.tk-my.is-circle-bg {
    margin-bottom: 20px;

    .tk-my__avatar.circle-rotate {
        margin-top: 200px;
    }
}
</style>