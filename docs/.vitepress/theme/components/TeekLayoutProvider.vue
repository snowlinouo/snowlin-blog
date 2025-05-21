<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import zhTw from "../locale/zh-tw";

import { useData } from "vitepress";
import { watch, nextTick, useTemplateRef, ref, provide } from "vue";
import { teekDocConfig } from "../config/teekConfig";
import ConfigSwitch from "./ConfigSwitch.vue";

// import TitleChange from "./TitleChange.vue"; //导入网页标题变化
// import OhMyLive2D from "./OhMyLive2D.vue"; //导入看板娘组件
import ContributeChart from "./ContributeChart.vue"; //导入贡献图表 
import ScrollProgressBar from "./ScrollProgressBar.vue"; //导入顶部滚动条组件

const ns = "layout-provider";
const { frontmatter } = useData();

const teekConfig = ref(teekDocConfig);
provide(teekConfigContext, teekConfig);

const configSwitchRef = useTemplateRef("configSwitchRef");

watch(
  () => configSwitchRef.value?.teekConfig,
  async newVal => {
    if (newVal) teekConfig.value = newVal;
  }
);

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
        <ConfigSwitch ref="configSwitchRef" />
      </div>
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