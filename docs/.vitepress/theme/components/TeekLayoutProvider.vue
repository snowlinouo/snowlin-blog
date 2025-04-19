<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { TkAvatar, teekConfigSymbol, useNamespace } from "vitepress-theme-teek";
import { provide, ref } from "vue";
import { teekDocConfig, teekBlogConfig } from "../config/teekConfig";
import { zhCn, zhTw, en } from "vitepress-theme-teek"

const ns = useNamespace("layout-provider");

// 切換預設風格 文檔風(D)/部落格風(B)
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
</style>
