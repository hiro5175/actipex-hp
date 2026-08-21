"use client";

import { useState, FormEvent } from "react";

const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!CONTACT_API_URL) {
      setStatus("error");
      setErrorMessage("送信先が設定されていません。管理者にお問い合わせください。");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.message ?? "送信に失敗しました。時間をおいて再度お試しください。");
        return;
      }

      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* メインコンテンツ */}
      <main className="flex-grow max-w-2xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 relative pb-4 text-center">
          お問い合わせ
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600 rounded"></span>
        </h1>
        <p className="text-slate-500 mb-12 text-center text-base">
          DXコンサル、AI導入支援、その他事業に関するご質問やご相談など、お気軽にお問い合わせください。
        </p>

        {/* お問い合わせフォーム */}
        {status === "success" ? (
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-100 text-center">
            <p className="text-slate-800 font-bold text-lg mb-2">お問い合わせありがとうございます。</p>
            <p className="text-slate-500 text-sm">内容を確認の上、担当者よりご連絡いたします。</p>
          </div>
        ) : (
          <form className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-100" onSubmit={handleSubmit}>
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">貴社名（法人の場合）</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お問い合わせ内容</label>
              <textarea
                rows={6}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-base"
                placeholder="ご自由にご記入ください"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-red-600/10 transition-all text-base tracking-wider"
            >
              {status === "loading" ? "送信中..." : "この内容で送信する"}
            </button>
          </form>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-auto">
        <p>&copy; 2026 ACTIPEX. All rights reserved.</p>
      </footer>
    </div>
  );
}
