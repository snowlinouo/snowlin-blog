<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { TkAvatar, teekConfigContext, useNamespace } from "vitepress-theme-teek";
import { provide, ref } from "vue";
import { teekDocConfig, teekBlogConfig } from "../config/teekConfig";
import zhTw from "../locale/zh-tw";

// import TitleChange from "./TitleChange.vue"; //导入网页标题变化
// import OhMyLive2D from "./OhMyLive2D.vue"; //导入看板娘组件
import ScrollProgressBar from "./ScrollProgressBar.vue"; //导入顶部滚动条组件

const ns = useNamespace("layout-provider");

// 默认文档风
const current = ref("B");

const teekConfig = ref(current.value === "D" ? teekDocConfig : teekBlogConfig);
provide(teekConfigContext, teekConfig);

const handleSwitch = () => {
  current.value = current.value === "D" ? "B" : "D";

  if (current.value === "D") teekConfig.value = teekDocConfig;
  else teekConfig.value = teekBlogConfig;
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
    
    <template #nav-bar-content-after>
      <div :class="ns.b('appearance')">
        <TkAvatar
          :size="24"
          :class="ns.be('appearance', 'switch')"
          :bg-color="ns.cssVar('theme-color')"
          @click="handleSwitch"
          title="切換文檔風(D)/部落格風(B)"
        >
          <span class="name">{{ current }}</span>
        </TkAvatar>
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

