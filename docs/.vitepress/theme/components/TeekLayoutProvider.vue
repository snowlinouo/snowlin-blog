<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { TkAvatar, teekConfigSymbol, useNamespace } from "vitepress-theme-teek";
import { provide, ref } from "vue";
import { teekDocConfig, teekBlogConfig } from "../config/teekConfig";
//import MusicPlayer from "./MusicPlayer.vue"; // 引入音乐播放器组件

const ns = useNamespace("layout-provider");

// 默认文档风
const current = ref("B");

const teekConfig = ref(current.value === "D" ? teekDocConfig : teekBlogConfig);
provide(teekConfigSymbol, teekConfig);

const handleSwitch = () => {
  current.value = current.value === "D" ? "B" : "D";

  if (current.value === "D") teekConfig.value = teekDocConfig;
  else teekConfig.value = teekBlogConfig;
};
</script>

<template>
  <Teek.Layout>
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

      <MusicPlayer />
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

