// site.config.ts
// ============================================================
// 【法人化時の切り替え手順】
//   1. entityType を "corporation" に変更
//   2. companyName / representativeTitle を更新
//   3. それだけ。他のファイルは一切触らなくてOK。
// ============================================================

// site.config.ts
// site.config.ts
// ============================================================
// 【法人化時の切り替え手順】
//   1. entityType を "corporation" に変更
//   2. companyName / representativeTitle を更新
//   3. それだけ。他のファイルは一切触らなくてOK。
// ============================================================

export type EntityType = "sole_proprietor" | "corporation";

const entityType = "sole_proprietor" as EntityType; // ← 法人化時に "corporation" へ

const config = {
  entityType,

  // 屋号 / 会社名
  companyName:
    entityType === "corporation" ? "株式会社ACTIPEX" : "ACTIPEX",

  // 略称（ロゴなどに使用）
  companyShortName: "ACTIPEX",

  // 法的表記（フッターなど）
  legalName:
    entityType === "corporation" ? "株式会社ACTIPEX" : "ACTIPEX（個人事業）",

  // 代表者の肩書き
  representativeTitle:
    entityType === "corporation" ? "代表取締役" : "代表",

  // 代表者名（ここに実名を入れてください）
  representativeName: "山田 太郎",

  // コピーライト表記
  copyrightName:
    entityType === "corporation" ? "株式会社ACTIPEX" : "ACTIPEX",

  // メタ情報
  siteUrl: "https://actipex.co.jp", // 本番URLに変更
  defaultDescription:
    "ACTIPEXは物流・運送業界に特化したコンサルティングサービスを提供しています。",

  // 連絡先
  contactEmail: "info@actipex.co.jp",
  contactPhone: "03-0000-0000",
} as const;

export default config;