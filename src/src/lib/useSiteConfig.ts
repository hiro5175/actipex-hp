// src/lib/useSiteConfig.ts
import config from "@/../site.config";

export const siteConfig = {
  ...config,
  logoUrl: "/logo.png", // ロゴ画像の場所を追加
};