"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
};

const services = [
  {
    num: "01",
    label: "DX CONSULTING",
    title: "DXコンサル",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    lead: "アナログな管理体制から脱却し、業務効率を劇的に向上させるためのデジタル変革を伴走サポート。現場のドライバーに負担をかけることなく、バックオフィスの生産性だけを劇的に向上させ、持続可能な経営基盤を構築します。",
    examples: [
      "配車計画・点呼記録のデジタル化（紙・Excel管理からの脱却）",
      "請求書発行・売上集計フローのシステム化",
      "勤怠・労務管理のクラウド化による工数削減",
      "業務フローの可視化とマニュアル整備による標準化",
      "kintone・freeeなど、業務に合わせたSaaSの選定・導入・運用設計"
    ]
  },
  {
    num: "02",
    label: "AI IMPLEMENTATION",
    title: "AI導入支援",
    icon: "M9.813 15.904L9 21l8.982-5.03c1.493-.836 2.017-2.73 1.156-4.175L17.25 8.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    lead: "最先端のAI技術を軽貨物運送の現場へ。配車計画の最適化、データ分析による経営予測など、机上の空論ではない「現場で即座に使える即効薬」としてのAI活用を提案・導入支援します。",
    examples: [
      "AIを活用した配車・ルートの自動最適化",
      "売上・コスト・稼働率を可視化する経営予測ダッシュボードの構築",
      "請求書・契約書のAI-OCRによる自動データ化",
      "チャットボット・自動応答導入による問い合わせ対応の効率化",
      "生成AIを使った報告書・議事録・マニュアル作成の自動化"
    ]
  },
  {
    num: "03",
    label: "MANAGEMENT CONSULTING",
    title: "経営コンサル",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
    lead: "「守りの経営」で手一杯になっている状態から、「攻めの経営」へ。事業計画の策定から、企業価値を最大化するためのM&A・事業承継戦略まで、経営者の意思決定を支える実践的なコンサルティングを提供します。",
    examples: [
      "中期事業計画・資金計画の策定支援",
      "企業価値算定とM&A・バイアウトに向けた磨き上げ支援",
      "組織体制構築・人事評価制度の設計（内製化の推進）",
      "補助金・助成金の活用提案・申請サポート",
      "事業承継・後継者育成プランの策定"
    ]
  }
];

const flowSteps = [
  {
    num: "01",
    title: "お問い合わせ・ヒアリング",
    body: "現状の課題や目指す姿について、オンライン・対面にてじっくりお伺いします。"
  },
  {
    num: "02",
    title: "現状分析・ご提案",
    body: "現場の業務フローや管理体制を分析し、最適な改善プランをご提案します。"
  },
  {
    num: "03",
    title: "導入・伴走支援",
    body: "プランに基づき、現場に寄り添いながら一歩ずつ実装・運用をサポートします。"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col overflow-x-hidden relative">

      {/* ── 背景グラフィック層 ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a02_1px,transparent_1px),linear-gradient(to_bottom,#0f172a02_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute top-[12%] left-0 w-full h-[550px] opacity-[0.6] md:opacity-[0.8]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none">
            <motion.path
              stroke="#f87171" strokeWidth="1.5" opacity="0.75"
              animate={{ d: [
                "M -60 280 C 300 260, 620 340, 950 260 C 1180 200, 1320 280, 1500 240",
                "M -60 260 C 380 280, 600 320, 900 240 C 1140 170, 1340 260, 1500 220",
                "M -60 290 C 340 310, 580 260, 980 280 C 1200 290, 1350 220, 1500 250",
                "M -60 280 C 300 260, 620 340, 950 260 C 1180 200, 1320 280, 1500 240"
              ]}}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" className="text-slate-400"
              animate={{ d: [
                "M -60 310 C 300 280, 650 350, 850 270 C 1100 200, 1280 290, 1500 260",
                "M -60 320 C 350 300, 570 330, 900 260 C 1050 200, 1320 280, 1500 250",
                "M -60 300 C 250 270, 700 360, 830 260 C 1150 180, 1260 300, 1500 270",
                "M -60 310 C 300 280, 650 350, 850 270 C 1100 200, 1280 290, 1500 260"
              ]}}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M -60 340 C 450 310, 750 380, 1050 300 C 1250 240, 1380 310, 1500 285" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" className="text-slate-300" />
          </svg>
          <motion.div
            animate={{ x: [-50, 1550], y: [280, 240, 300, 240, 280, 240] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.7)]"
          />
          <motion.div
            animate={{ x: [-50, 1550], y: [310, 280, 330, 270, 310, 270] }}
            transition={{ duration: 17, delay: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-2 h-2 bg-slate-400 rounded-full"
          />
        </div>

        <div className="absolute top-[900px] bottom-0 left-[30%] w-[400px] opacity-25">
          <svg className="w-full h-full text-slate-300" preserveAspectRatio="none" viewBox="0 0 100 1000">
            <path d="M 30 0 Q 60 150, 10 300 T 90 600 T 10 900 T 50 1000" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 60 0 Q 10 150, 80 300 T 0 600 T 80 900 T 30 1000" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
            <path d="M 45 0 Q 25 200, 55 400 T 25 700 T 45 1000" fill="none" stroke="#f87171" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute top-[5%] left-[5%] w-[800px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[150px]" />
        <div className="absolute top-[15%] right-[5%] w-[750px] h-[600px] bg-red-500/[0.025] rounded-full blur-[130px]" />
      </div>

      <main className="flex-grow relative z-10">

        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-black tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
              サービス
            </h1>
            <div className="h-[3px] w-20 bg-red-600 rounded mb-6" />
            <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-2xl">
              バックオフィスの生産性向上から、企業価値の最大化まで。<br className="hidden md:block" />
              ACTIPEXが提供する、次世代の軽貨物運送事業向け3つのソリューションです。
            </p>
          </motion.div>
        </section>

        {/* ── サービス一覧（3つの柱） ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 space-y-10">
          {services.map((service) => (
            <motion.div
              key={service.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-[0_0_50px_30px_#f8fafc] p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* 左：概要 */}
                <div className="flex-1 lg:max-w-md space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-mono font-black text-red-600 tracking-widest">{service.num} / {service.label}</div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-950">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold">
                    {service.lead}
                  </p>
                </div>

                {/* 右：具体例 */}
                <div className="flex-1 bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">具体的な支援内容（例）</div>
                  <ul className="space-y-3.5">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
                        <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── ご相談の流れ ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="text-sm font-mono font-black text-red-600 tracking-widest mb-2">FLOW</div>
            <div className="text-xs text-slate-400 font-semibold mb-10">ご相談の流れ</div>
            <div className="grid md:grid-cols-3 gap-6">
              {flowSteps.map((step) => (
                <div key={step.num} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 md:p-8 shadow-[0_0_50px_30px_#f8fafc]">
                  <div className="text-3xl font-black text-slate-100 mb-3">{step.num}</div>
                  <h3 className="text-lg font-black text-slate-950 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-semibold">{step.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-slate-950 rounded-2xl border border-slate-800 p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/[0.05] rounded-full blur-[120px]" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">まずは現状について、お話を伺います。</h2>
              <p className="text-slate-400 text-sm md:text-base font-semibold mb-8 max-w-xl mx-auto leading-relaxed">
                どのサービスが適切か分からない、という段階でも構いません。貴社の状況に合わせて、最適な一歩をご提案します。
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-4 rounded-full transition-colors">
                お問い合わせはこちら &rarr;
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ── フッター（他ページと統一） ── */}
      <footer className="w-full bg-slate-900 text-slate-400 pt-10 pb-8 px-6 md:px-12 border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-sm text-left">
            <div className="text-lg font-black text-white tracking-wider flex items-center gap-2">
              <span className="text-red-500">▲</span> ACTIPEX
            </div>
            <p className="text-xs font-semibold text-slate-400 leading-relaxed">
              変えるのは、ドライバーではなく「管理の仕組み」です。DXとAIの力で、次世代へ残る持続可能な軽貨物運送のインフラを構築します。
            </p>
          </div>
          <div className="space-y-3 text-left">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Navigation</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-medium">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <a href="/about" className="hover:text-white transition-colors">私たちについて</a>
              <a href="/services" className="hover:text-white transition-colors">サービス</a>
              <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
            </div>
          </div>
          <div className="space-y-3 text-left md:text-right">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Location</div>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              Kawasaki Base<br />
              Tonomachi, Kawasaki-ku,<br />
              Kawasaki City, Kanagawa, Japan
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-500">
          <p>&copy; 2026 ACTIPEX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-400 transition-colors">プライバシーポリシー</a>
            <a href="/terms" className="hover:text-slate-400 transition-colors">利用規約</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
