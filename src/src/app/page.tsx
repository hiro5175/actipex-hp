"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col overflow-x-hidden relative">
      
      {/* 🌊 背景グラフィック層 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a02_1px,transparent_1px),linear-gradient(to_bottom,#0f172a02_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="absolute top-[18%] left-0 w-full h-[550px] opacity-[0.6] md:opacity-[0.8]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              stroke="#f87171"
              strokeWidth="1.5"
              opacity="0.75"
              animate={{
                d: [
                  "M -60 300 C 350 320, 600 200, 950 180 C 1200 160, 1320 110, 1500 80",
                  "M -60 280 C 400 260, 650 230, 900 160 C 1150 110, 1300 130, 1500 90",
                  "M -60 310 C 320 280, 580 180, 980 200 C 1220 210, 1350 90, 1500 75",
                  "M -60 300 C 350 320, 600 200, 950 180 C 1200 160, 1320 110, 1500 80"
                ]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 6"
              className="text-slate-400"
              animate={{
                d: [
                  "M -60 330 C 300 250, 650 240, 850 140 C 1100 150, 1280 90, 1500 110",
                  "M -60 340 C 350 290, 570 190, 900 170 C 1050 120, 1320 110, 1500 100",
                  "M -60 310 C 250 230, 700 270, 830 130 C 1150 170, 1260 80, 1500 120",
                  "M -60 330 C 300 250, 650 240, 850 140 C 1100 150, 1280 90, 1500 110"
                ]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M -60 350 C 450 300, 750 220, 1050 170 C 1250 130, 1380 110, 1500 95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" className="text-slate-300" />
          </svg>
          <motion.div animate={{ x: [-50, 1550], y: [300, 240, 180, 170, 120, 80] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.7)]" />
          <motion.div animate={{ x: [-50, 1550], y: [330, 270, 200, 150, 110, 110] }} transition={{ duration: 16, delay: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-2 h-2 bg-slate-400 rounded-full" />
        </div>

        <div className="absolute top-[800px] bottom-0 left-[35%] w-[400px] opacity-35">
          <svg className="w-full h-full text-slate-300" preserveAspectRatio="none" viewBox="0 0 100 1000">
            <path d="M 30 0 Q 60 150, 10 300 T 90 600 T 10 900 T 50 1000" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 60 0 Q 10 150, 80 300 T 0 600 T 80 900 T 30 1000" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
            <path d="M 45 0 Q 25 200, 55 400 T 25 700 T 45 1000" fill="none" stroke="#f87171" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute top-[10%] left-[5%] w-[800px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[150px]" />
        <div className="absolute top-[18%] right-[5%] w-[750px] h-[600px] bg-red-500/[0.025] rounded-full blur-[130px]" />
      </div>

      {/* 🚀 メインコンテンツ */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        
        {/* 🌌 ACTIPEX MISSION セクション */}
        <section className="pt-16 pb-48 relative w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
            
            {/* 左側：メッセージコンテンツ */}
            <div className="flex-grow max-w-[760px] space-y-9 text-left">
              <div className="inline-flex items-center gap-2 text-red-600 text-xs font-black tracking-widest uppercase">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                ACTIPEX MISSION
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.2] max-w-none">
                DXやAIを起点に、<br className="hidden md:block" />
                <span className="bg-gradient-to-r from-slate-950 via-red-600 to-slate-950 bg-clip-text text-transparent">
                  より持続的な軽貨物会社へ。
                </span>
              </h1>
              
              <div className="h-[3px] w-24 bg-red-600 rounded"></div>
              
              <p className="text-2xl md:text-4xl font-black text-slate-950 tracking-tight leading-snug">
                変えるのは、ドライバーではなく<br />
                <span className="text-red-600">「管理の仕組み」</span>です。
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-bold w-full max-w-none md:whitespace-nowrap break-keep tracking-normal">
                バックオフィスの生産性を高めてエラーを無くし、売上拡大とバイアウト（企業売却）を選べる、次の世代へ残る強い軽貨物運送へ。
              </p>
            </div>

            {/* 🧭 右側：3Dデジタル・コンパスグラフィック */}
            <div className="w-full md:w-[380px] h-[350px] md:h-[380px] flex items-center justify-center relative hidden md:flex flex-shrink-0">
              <div className="w-full h-full relative flex items-center justify-center">
                <svg className="absolute w-full h-full text-slate-400 opacity-80" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 3" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="6 2" />
                  <circle cx="50" cy="6" r="1.5" fill="#ef4444" />
                  <circle cx="50" cy="94" r="1" fill="currentColor" />
                  <circle cx="6" cy="50" r="1" fill="currentColor" />
                  <circle cx="94" cy="50" r="1" fill="currentColor" />
                </svg>
                
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] relative flex items-center justify-center">
                  <div className="absolute w-[94%] h-[1px] bg-slate-300" />
                  <div className="absolute h-[94%] w-[1px] bg-slate-300" />
                  <div className="absolute w-[85%] h-[85%] border border-slate-200 rounded-full" />
                </motion.div>

                <motion.div animate={{ rotate: [-15, 20, -5, 15, -15], scale: [1, 1.02, 0.99, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[65%] h-[65%] flex items-center justify-center" style={{ transform: "rotateX(25deg) rotateY(15deg)", transformStyle: "preserve-3d" }}>
                <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.15)]" viewBox="0 0 100 100" fill="none">
                    <polygon points="50,5 56,50 50,44" fill="#ef4444" opacity="0.9" />
                    <polygon points="50,5 44,50 50,44" fill="#dc2626" />
                    <polygon points="50,95 56,50 50,56" fill="#475569" />
                    <polygon points="50,95 44,50 50,56" fill="#334155" />
                    <polygon points="90,50 50,46 54,50" fill="#94a3b8" />
                    <polygon points="90,50 50,54 54,50" fill="#cbd5e1" />
                    <polygon points="10,50 50,46 46,50" fill="#cbd5e1" />
                    <polygon points="10,50 50,54 46,50" fill="#94a3b8" />
                    <circle cx="50" cy="50" r="5" fill="#1e293b" />
                    <circle cx="50" cy="50" r="2" fill="#94a3b8" />
                  </svg>
                </motion.div>
                <div className="absolute w-[98%] h-[98%] border border-slate-200/50 rounded-full" />
              </div>
            </div>

          </div>
        </section>

        {/* なぜACTIPEXが選ばれるか セクション */}
        <section className="py-12 max-w-5xl mx-auto overflow-hidden">
          <div className="relative mb-20 pl-6 border-l-4 border-red-600">
            <h2 className="text-3xl md:text-4xl font-black text-left text-slate-950">なぜACTIPEXが選ばれるか</h2>
            <div className="text-xs font-mono text-slate-400 tracking-widest font-bold mt-2 opacity-80">【 当社の強み / 独自価値 】</div>
          </div>
          
          <div className="space-y-20">
            {/* POINT 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} variants={slideInLeft} className="flex flex-col md:flex-row items-center justify-between gap-12 group relative z-20 bg-[#f8fafc] p-6 rounded-2xl shadow-[0_0_50px_40px_#f8fafc]">
              <div className="flex-1 space-y-4 text-left">
                <div className="text-sm font-mono font-black text-red-600 tracking-widest">01 / SYSTEM RESILIENCE</div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 group-hover:text-red-600 transition-colors duration-300">現場の反発を生まない、実体験ベースのDX</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold max-w-xl">多くのIT導入が失敗するのは現場を知らないからです。私たちは現場の悩みや管理者のリアルな工数を理解した上で仕組みを設計するため、ドライバーに負担をかけず、バックオフィスの生産性だけを劇的に向上させます。</p>
              </div>
              <div className="w-full md:w-64 h-40 relative flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-all duration-300 ease-out group-hover:scale-105">
                <svg className="w-full h-full" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="25" cy="30" r="3" fill="currentColor" className="opacity-60" />
                  <circle cx="45" cy="25" r="3" fill="currentColor" className="opacity-60" />
                  <circle cx="20" cy="50" r="4" fill="currentColor" />
                  <circle cx="40" cy="55" r="3" fill="currentColor" className="opacity-60" />
                  <circle cx="25" cy="75" r="3" fill="currentColor" className="opacity-60" />
                  <line x1="25" y1="30" x2="45" y2="25" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <line x1="25" y1="30" x2="20" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <line x1="20" y1="50" x2="40" y2="55" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <line x1="20" y1="50" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <line x1="45" y1="25" x2="40" y2="55" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <path d="M55 50 L85 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinity] text-slate-300 group-hover:text-red-300" />
                  <rect x="100" y="15" width="42" height="70" rx="6" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-red-600 transition-colors" />
                  <line x1="115" y1="20" x2="127" y2="20" stroke="currentColor" strokeWidth="1" className="opacity-60" />
                  <rect x="106" y="30" width="22" height="10" rx="3" fill="currentColor" className="text-slate-200 group-hover:text-red-100 transition-colors" stroke="none" />
                  <rect x="114" y="46" width="22" height="10" rx="3" fill="currentColor" className="text-slate-300 group-hover:text-red-500 transition-colors" stroke="none" />
                  <circle cx="121" cy="78" r="2" fill="currentColor" />
                </svg>
              </div>
            </motion.div>

            {/* POINT 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} variants={slideInRight} className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 group relative z-20 bg-[#f8fafc] p-6 rounded-2xl shadow-[0_0_50px_40px_#f8fafc]">
              <div className="flex-1 space-y-4 text-left md:pl-8">
                <div className="text-sm font-mono font-black text-red-600 tracking-widest">02 / BLACKBOX ELIMINATION</div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 group-hover:text-red-600 transition-colors duration-300">業務のブラックボックスを解消する即効薬</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold max-w-xl">複雑な配車計画やミスが許されない請求管理をデジタル化し、ボタン一つで完結する仕組みを提供。管理者の負担を極限まで減らすことで、経営者が「守り」ではなく「攻めの経営」に時間を割ける環境を瞬時に作ります。</p>
              </div>
              <div className="w-full md:w-64 h-40 relative flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-all duration-300 ease-out group-hover:scale-105">
                <svg className="w-full h-full" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="15" y="25" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-slate-300" />
                  <path d="M25 45 Q35 35, 45 45 T35 55" stroke="currentColor" strokeWidth="1" className="text-slate-300 opacity-60" />
                  <path d="M68 45 L82 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M77 40 L82 45 L77 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="95" y="20" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-red-600 transition-colors" />
                  <path d="M100 60 L112 48 L125 52 L140 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-red-500 transition-colors" />
                  <circle cx="140" cy="32" r="3" fill="currentColor" className="text-slate-400 group-hover:text-red-600" />
                  <line x1="100" y1="64" x2="140" y2="64" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
                  <line x1="105" y1="28" x2="120" y2="28" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                </svg>
              </div>
            </motion.div>

            {/* POINT 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} variants={slideInLeft} className="flex flex-col md:flex-row items-center justify-between gap-12 group relative z-20 bg-[#f8fafc] p-6 rounded-2xl shadow-[0_0_50px_40px_#f8fafc]">
              <div className="flex-1 space-y-4 text-left">
                <div className="text-sm font-mono font-black text-red-600 tracking-widest">03 / EXIT-DRIVEN STRATEGY</div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 group-hover:text-red-600 transition-colors duration-300">企業価値を最大化する「イグジット・ドリブン」</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold max-w-xl">企業の最終的なイグジット（M&A・バイアウト等）や、さらなる事業拡大から逆算し、中長期的なフォローを行います。経営者が現場にかじりつかなくても回り続ける持続可能な仕組みへと昇華させることで、会社を売却して利益を確定させるか、売上を爆発させてさらに事業を伸ばすか、自由に未来を選択できる圧倒的な優位性と企業価値を確立します。</p>
              </div>
              <div className="w-full md:w-64 h-40 relative flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-all duration-300 ease-out group-hover:scale-105">
                <svg className="w-full h-full" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="20" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                  <rect x="25" y="72" width="20" height="8" rx="1" fill="currentColor" className="opacity-20" stroke="none" />
                  <rect x="55" y="68" width="20" height="12" rx="1" fill="currentColor" className="opacity-30" stroke="none" />
                  <rect x="85" y="60" width="20" height="20" rx="1" fill="currentColor" className="opacity-40" stroke="none" />
                  <path d="M25 75 C 60 70, 95 45, 130 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-slate-300 group-hover:text-red-400 transition-colors" />
                  <path d="M118 22 L130 20 L126 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-red-400 transition-colors" />
                  <polygon points="130,10 138,20 130,30 122,20" fill="currentColor" className="text-slate-400 group-hover:text-red-600 transition-all duration-300" />
                  <line x1="130" y1="2" x2="130" y2="6" stroke="currentColor" strokeWidth="1" className="opacity-60" />
                  <line x1="142" y1="20" x2="146" y2="20" stroke="currentColor" strokeWidth="1" className="opacity-60" />
                  <line x1="118" y1="20" x2="114" y2="20" stroke="currentColor" strokeWidth="1" className="opacity-60" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 🪙 3カラム・リッチフッター */}
      <footer className="w-full bg-slate-900 text-slate-400 pt-10 pb-8 mt-20 px-6 md:px-12 border-t border-slate-800 relative z-10">
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
            <div className="text-xs font-bold text-white uppercase tracking-wider md:block">Location</div>
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