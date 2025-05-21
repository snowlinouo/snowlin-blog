<script setup lang="ts" name="ConfigSwitch">
import { TkSegmented, TkMessage, magicIcon, isClient, useMediaQuery } from "vitepress-theme-teek";
import BaseTemplate from "vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/BaseTemplate.vue";
import { nextTick, ref, watch } from "vue";
import { useClipboard } from "vitepress-theme-teek";
import {
  teekDocConfig,
  teekBlogConfig,
  teekBlogParkConfig,
  teekBlogFullConfig,
  teekBlogBodyConfig,
  teekBlogCardConfig,
} from "../config/teekConfig";

const ns = "config-switch";
const tipInfo = {
  title: "配置切換",
  desc: "配置切換是 Teek 文件項目通過插槽額外實現的功能，並非是 Teek 增強面板自帶的功能。",
  tips: [
    { title: "說明 1", content: "這裡預設了一些 Teek 的配置模板，點擊可快速切換查看效果" },
    {
      title: "說明 2",
      content: "您可以點擊 Copy 按鈕來複製配置項到您的項目 config.mts 文件裡，這給第一次使用 Teek 的用戶提供開箱幫助",
    },
    {
      title: "說明 3",
      content:
        "除了這裡提供的配置模板，Teek 文件自己單獨使用了一些公共配置項，具體請看 Teek 的 config.mts 文件，也就是說您要完全達到當前預覽的效果，需要 Copy 當前的配置模板 + Teek 文件單獨的配置",
    },
  ],
};
const segmentedOptions = [
  { value: "doc", label: "文檔預設", title: "預設風格" },
  { value: "blog", label: "Blog 預設", title: "首頁預設風格" },
  { value: "blog-part", label: "Blog 小圖", title: "首頁 Banner 小圖" },
  { value: "blog-full", label: "Blog 大圖", title: "首頁 Banner 大圖 + 評論" },
  { value: "blog-body", label: "Blog 全圖", title: "全站背景圖" },
  { value: "blog-card", label: "Blog 卡片", title: "首頁卡片文章列表 + 左側卡片欄列表" },
];

const emit = defineEmits<{
  switch: [config: typeof teekDocConfig, style: string];
}>();

// 默认文档风格
const themeStyle = defineModel({ default: "blog-full" });
const teekConfig = ref(teekBlogFullConfig);

const { copy, copied } = useClipboard();
const isMobile = useMediaQuery("(max-width: 768px)"); // 判断是否为移动端

const update = async (style: string) => {
  if (style === "doc") teekConfig.value = teekDocConfig;
  if (style === "blog") teekConfig.value = teekBlogConfig;
  if (style === "blog-part") teekConfig.value = teekBlogParkConfig;
  if (style === "blog-full") teekConfig.value = teekBlogFullConfig;
  if (style === "blog-body") teekConfig.value = teekBlogBodyConfig;
  if (style === "blog-card") teekConfig.value = teekBlogCardConfig;

  emit("switch", teekConfig.value, style);

  await nextTick();

  if (!isClient) return;
  const navDom = document.querySelector(".VPNavBar") as HTMLElement;

  // 兼容 Teek Banner 样式
  if (["blog-full", "blog-body", "blog-card"].includes(style)) navDom?.classList.add("full-img-nav-bar");
  else navDom?.classList.remove("full-img-nav-bar");
};

watch(themeStyle, update);

const handleCopy = async () => {
  await copy(JSON.stringify(teekConfig.value, null, 2));
  copied.value
    ? TkMessage.success({ message: "複製成功！", plain: true })
    : TkMessage.error({ message: "複製失敗！", plain: true });
};
</script>

<template>
  <BaseTemplate
    :class="ns"
    :icon="magicIcon"
    :title="tipInfo.title"
    :helper="!isMobile"
    :helper-desc="tipInfo.desc"
    :tips="tipInfo.tips"
  >
    <template #title>
      <div class="flx-justify-between flx-1">
        {{ tipInfo.title }}
        <button @click="handleCopy">Copy</button>
      </div>
    </template>
    <TkSegmented v-model="themeStyle" :options="segmentedOptions" />
  </BaseTemplate>
</template>

<style lang="scss">
$namespace: config-switch;

.#{$namespace} {
  @media (max-width: 768px) {
    margin-top: 10px;
  }
  h3 {
    display: inline-block;
    font-size: 12px;
    opacity: 0.8;
  }
  button {
    font-size: 14px;
    font-weight: 500;
    outline: none;
    transition: 0.1s;
    color: var(--vp-c-text-1);

    &:hover {
      color: #5171d7;
      border-color: #5171d7;
    }
  }

  &__helper-desc {
    line-height: 24px;
  }

  .tk-segmented-item {
    min-width: 70px;
  }
}
</style>
