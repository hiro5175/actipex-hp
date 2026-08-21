"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease } }
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease } }
};

const values = [
  {
    num: "01",
    label: "FIELD-FIRST",
    title: "「現場発」で革新する",
    body: "現場の痛みがわかるからこそ、地に足のついたDXとAIを実装し、古い慣習を塗り替える。"
  },
  {
    num: "02",
    label: "GOAL-DRIVEN",
    title: "「ゴール」から逆算する",
    body: "あるべき姿を見据え、今必要な一手に実直に伴走する。"
  },
  {
    num: "03",
    label: "LEGACY-BUILDER",
    title: "「未来へ」バトンを繋ぐ",
    body: "組織の内製化と仕組み化を進め、会社が自走し、永続する仕組みを創る。事業承継やM&Aという選択肢をいつでも選べる状態に導き、業界の資産と雇用を次世代へ確実に残す。"
  }
];

const companyRows = [
  { label: "社名",          value: "ACTIPEX",                           bold: true,  email: false },
  { label: "代表",          value: "鈴木 健晟",                         bold: true,  email: false },
  { label: "所在地",        value: "神奈川県川崎市川崎区殿町1-14-3-302", bold: false, email: false },
  { label: "電話番号",      value: "080-2237-9248",                     bold: false, email: false },
  { label: "メールアドレス", value: "k.suzuki.logi@gmail.com",           bold: false, email: true  },
];

const messageBody = [
  "日本の社会インフラを支える物流業界。なかでもエッセンシャルワーカーとして日々地域を奔走する「貨物軽自動車運送事業者」の存在は、今や一刻も欠かすことができません。",
  "しかし現在、業界は深刻な「ドライバー不足」という大きな課題に直面しています。では、その本質的な原因はどこにあるのでしょうか。私はこれまで、軽貨物の現場で管理者として多くの課題に向き合う中で、業界の根深い構造を目の当たりにしてきました。多くの経営者の皆様が「ドライバーを大切にしたい、良い環境を作りたい」という強い想いを持っています。しかし、古い管理体制や慣習が残る現場では、管理者の生産性が著しく低く、アナログな業務に追われるあまり、本来最も大切にすべき「ドライバー一人ひとりへの手厚いケア」や「戦略的な営業活動」に十分な時間を割くことができていません。想いはあっても仕組みが追いつかない――この構造こそが、ドライバーのエンゲージメント低下や、内勤スタッフの長時間労働、さらには人件費による利益の圧迫を招くという悪循環を生み出しているのです。",
  "自分が実運送業を続けるだけでは、この根深い業界の課題を根本から解決することはできない――。その強い危機感と、これまで現場で培ってきた知見を形にするために、私は「ACTIPEX」を創業いたしました。",
  "私たちは、一般的な机上の空論を語るコンサルティング会社ではありません。現場と管理者のリアルな関係性を泥臭く見てきたからこそ、管理者がどのような業務に工数を奪われ、どこで経営の歯車が狂ってしまうのかを心の底から理解しています。だからこそ、私たちは現場に寄り添い、本当に効果のある「クリティカルで現実的なDX化」を提案し、一歩ずつ確実に伴走することができます。",
  "管理者の生産性を劇的に向上させ、組織の内製化をしっかりと進めること。それによって会社が強くなれば、将来的に売上を拡大しやすくなるだけでなく、次世代への事業承継や、大切な会社と雇用を守るための「バイアウト（M&A）」という選択肢をいつでも選べるようになります。",
  "一社一社の軽貨物運送事業者がさらにアップデートされ、誇りと先進性を持って社会から選ばれる存在へ。そして、業界に関わるすべての人が豊かになり、未来にワクワクできる産業へ。私たちはクライアントの皆様の「次の一手」を、熱く、実直に支え続けます。",
];

export default function About() {
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
        <section className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 text-red-600 text-xs font-black tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              ABOUT ACTIPEX
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
              私たちについて
            </h1>
            <div className="h-[3px] w-20 bg-red-600 rounded mb-6" />
            <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-2xl">
              Mission · Vision · Values ——<br className="hidden md:block" />
              ACTIPEXが描く、物流の未来と行動の指針。
            </p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════
            ① 代表挨拶
        ══════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <div className="text-sm font-mono font-black text-red-600 tracking-widest mb-2">MESSAGE</div>
            <div className="text-xs text-slate-400 font-semibold mb-10">代表挨拶</div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-[0_0_60px_30px_#f8fafc] p-8 md:p-10 lg:p-12">

              {/* タイトル行：丸型写真＋見出し */}
              <div className="flex items-center gap-5 md:gap-7 mb-7">
                {/* 丸型写真 */}
                <div className="relative flex-shrink-0 w-[88px] h-[88px] md:w-[108px] md:h-[108px] rounded-full overflow-hidden ring-2 ring-red-600/25 shadow-lg">
                  <Image
                    src="/ceo-profile.jpg"
                    alt="ACTIPEX代表 鈴木 健晟"
                    fill
                    className="object-cover object-[50%_8%]"
                    priority
                  />
                </div>
                {/* タイトルテキスト */}
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-950 leading-snug">
                    「運ぶ」を、<br className="sm:hidden" />つづく未来へ。
                  </h2>
                  <p className="text-xs md:text-sm font-bold text-slate-500 mt-2 leading-relaxed">
                    私たちは、軽貨物経営の永続を支えるパートナーです。
                  </p>
                </div>
              </div>

              <div className="h-[2px] w-10 bg-red-600 rounded mb-7" />

              {/* 本文 */}
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-[1.85] font-medium">
                {messageBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* 署名 */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-right">
                <p className="text-[10px] font-mono text-slate-400 tracking-wider mb-1">ACTIPEX代表</p>
                <p className="text-2xl md:text-3xl font-black text-slate-950 tracking-wide">鈴木　健晟</p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════
            ② MVV
        ══════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-28 space-y-6">

          {/* MISSION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={slideLeft}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_30px_#f8fafc]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-sm font-mono font-black text-red-600 tracking-widest mb-2">01 / MISSION</div>
              <div className="text-xs text-slate-400 font-semibold mb-6">使命</div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight mb-4 tracking-tight">
                「運ぶ」を、<br />つづく未来へ。
              </p>
              <div className="h-[3px] w-14 bg-red-600 rounded mb-4" />
              <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed">
                〜軽貨物事業者のポテンシャルを解放し、<br className="hidden md:block" />持続可能な物流基盤を創る〜
              </p>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={slideRight}
            className="bg-slate-950 rounded-2xl border border-slate-800 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-600/[0.04] rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="text-sm font-mono font-black text-red-400 tracking-widest mb-2">02 / VISION</div>
              <div className="text-xs text-slate-500 font-semibold mb-6">未来</div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-relaxed tracking-tight">
                すべての運送会社が、<br className="hidden md:block" />
                誇りと先進性を持って<br />
                <span className="text-red-500">選ばれる社会へ。</span>
              </p>
            </div>
          </motion.div>

          {/* VALUES */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 md:p-12 shadow-[0_0_50px_30px_#f8fafc]"
          >
            <div className="text-sm font-mono font-black text-red-600 tracking-widest mb-2">03 / VALUE</div>
            <div className="text-xs text-slate-400 font-semibold mb-10">行動指針</div>
            <div>
              {values.map(({ num, label, title, body }, i) => (
                <motion.div
                  key={num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: i * 0.12, ease } } }}
                  className="group"
                >
                  {i > 0 && <div className="h-px bg-slate-100 my-8" />}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 text-right pt-1">
                      <div className="text-3xl font-black leading-none text-slate-100 group-hover:text-red-100 transition-colors duration-300">{num}</div>
                      <div className="text-[8px] font-mono font-black text-red-600/30 tracking-widest mt-1">{label}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-black text-slate-950 group-hover:text-red-600 transition-colors duration-300 mb-2">{title}</h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">{body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════
            ③ 会社概要（ダーク帯）
        ══════════════════════════════════ */}
        <section className="bg-slate-950 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-[20%] w-[600px] h-[400px] bg-red-600/[0.03] rounded-full blur-[120px]" />
          <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <div className="text-sm font-mono font-black text-red-400 tracking-widest mb-2">COMPANY INFO</div>
              <div className="text-xs text-slate-500 font-semibold mb-8">会社概要</div>
              <dl className="border-t border-slate-800">
                {companyRows.map(({ label, value, bold, email }) => (
                  <div key={label} className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-slate-800 py-5 gap-1 md:gap-0">
                    <dt className="text-slate-500 font-semibold text-sm">{label}</dt>
                    <dd className={`text-sm ${bold ? "text-white font-bold" : "text-slate-300 font-medium"}`}>
                      {email
                        ? <a href={`mailto:${value}`} className="hover:text-red-400 transition-colors underline underline-offset-4">{value}</a>
                        : value
                      }
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── フッター（ホームと統一） ── */}
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
