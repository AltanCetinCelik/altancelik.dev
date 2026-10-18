"use client";

import React, { useState } from "react";
import type { BusinessLead, SectorType } from "../businesses";

const SECTOR_THEMES: Record<
  SectorType,
  {
    accentBg: string;
    accentText: string;
    accentBorder: string;
    gradientHero: string;
    badgeBg: string;
    ctaLabel: string;
    formTitle: string;
    stats: { val: string; label: string }[];
  }
> = {
  auto: {
    accentBg: "bg-amber-500 hover:bg-amber-400 text-zinc-950",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/30",
    gradientHero: "from-amber-500/20 via-zinc-900/60 to-zinc-950",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    ctaLabel: "WhatsApp'tan Fiyat & Randevu Al",
    formTitle: "Hızlı Fiyat & Uygulama Randevusu",
    stats: [
      { val: "%100", label: "Orijinal Ürün & Garanti" },
      { val: "4.9/5", label: "Müşteri Memnuniyeti" },
      { val: "Aynı Gün", label: "Ücretsiz Ekspertiz & Teslim" },
    ],
  },
  dental: {
    accentBg: "bg-cyan-500 hover:bg-cyan-400 text-zinc-950",
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/30",
    gradientHero: "from-cyan-500/20 via-slate-900/60 to-zinc-950",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    ctaLabel: "WhatsApp'tan Hızlı Randevu Al",
    formTitle: "Online Muayene & Randevu Oluştur",
    stats: [
      { val: "%100", label: "Steril Klinik Güvencesi" },
      { val: "Aynı Gün", label: "Hızlı Muayene Randevusu" },
      { val: "Uzman", label: "Deneyimli Hekim Kadrosu" },
    ],
  },
  diet: {
    accentBg: "bg-emerald-500 hover:bg-emerald-400 text-zinc-950",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    gradientHero: "from-emerald-500/20 via-zinc-900/60 to-zinc-950",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    ctaLabel: "Ücretsiz Ön Görüşme & Randevu Al",
    formTitle: "Kişiye Özel Beslenme Programı Başvurusu",
    stats: [
      { val: "Birebir", label: "Yüz Yüze & Online Takip" },
      { val: "InBody", label: "Detaylı Yağ-Kas Analizi" },
      { val: "7/24", label: "WhatsApp Motivasyon Desteği" },
    ],
  },
  therapy: {
    accentBg: "bg-indigo-500 hover:bg-indigo-400 text-white",
    accentText: "text-indigo-400",
    accentBorder: "border-indigo-500/30",
    gradientHero: "from-indigo-500/20 via-zinc-900/60 to-zinc-950",
    badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    ctaLabel: "Seans & Ön Görüşme Randevusu Al",
    formTitle: "Seans & Değerlendirme Randevusu",
    stats: [
      { val: "%100", label: "Etik İlkeler & Gizlilik" },
      { val: "Birebir", label: "Kişiye Özel Seans Planı" },
      { val: "Esnek", label: "Yüz Yüze & Online Seçenek" },
    ],
  },
  beauty: {
    accentBg: "bg-rose-500 hover:bg-rose-400 text-white",
    accentText: "text-rose-400",
    accentBorder: "border-rose-500/30",
    gradientHero: "from-rose-500/20 via-zinc-900/60 to-zinc-950",
    badgeBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    ctaLabel: "WhatsApp'tan Kampanya & Randevu Al",
    formTitle: "Ücretsiz Ön Analiz & Randevu",
    stats: [
      { val: "FDA", label: "Onaylı Son Nesil Cihazlar" },
      { val: "%100", label: "Hijyen & Uzman Kadro" },
      { val: "Ücretsiz", label: "Cilt & Saç Ön Analizi" },
    ],
  },
  realestate: {
    accentBg: "bg-amber-500 hover:bg-amber-400 text-zinc-950",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/30",
    gradientHero: "from-amber-500/20 via-zinc-900/60 to-zinc-950",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    ctaLabel: "Portföy & Ücretsiz Ekspertiz İste",
    formTitle: "Gayrimenkul Alım / Satım / Ekspertiz Formu",
    stats: [
      { val: "Ücretsiz", label: "Güncel Piyasa Ekspertizi" },
      { val: "Hızlı", label: "Profesyonel Pazarlama & Satış" },
      { val: "%100", label: "Şeffaf Tapu & Kredi Süreci" },
    ],
  },
};

export default function ClientShowcase({ business }: { business: BusinessLead }) {
  const theme = SECTOR_THEMES[business.sector] || SECTOR_THEMES.dental;
  const [selectedService, setSelectedService] = useState(
    business.services[0]?.title || "Genel Bilgi & Randevu"
  );
  const [selectedTime, setSelectedTime] = useState("Bu Hafta İçi");
  const [visitorName, setVisitorName] = useState("");
  const [hideBanner, setHideBanner] = useState(false);

  const buildWhatsAppUrl = (customText?: string) => {
    const text =
      customText ||
      `Merhaba ${business.shortName}, web siteniz üzerinden ulaşıyorum.\n\n` +
        `• İlgilendiğim Hizmet: ${selectedService}\n` +
        `• Tercih Edilen Zaman: ${selectedTime}\n` +
        (visitorName.trim() ? `• İsim: ${visitorName.trim()}\n\n` : "\n") +
        `Müsaitlik ve detaylar hakkında bilgi alabilir miyim?`;
    return `https://wa.me/${business.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  const mapQuery = encodeURIComponent(`${business.name} ${business.address}`);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-400 selection:text-zinc-950">
      {/* İşletme Sahibi İçin Özel Önizleme Bandı */}
      {!hideBanner && (
        <div className="bg-gradient-to-r from-emerald-950 via-zinc-900 to-emerald-950 border-b border-emerald-500/30 px-4 py-2.5 text-xs sm:text-sm">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-emerald-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                <strong>{business.shortName}</strong> için özel hazırlanan canlı web
                sitesi önizlemesi. Tüm randevu butonları doğrudan{" "}
                <strong className="underline">{business.phoneDisplay}</strong> hattınıza
                bağlıdır.
              </span>
            </div>
            <button
              onClick={() => setHideBanner(true)}
              className="text-zinc-400 hover:text-white text-xs px-2 py-0.5 rounded border border-zinc-700"
            >
              Önizleme Bandını Gizle ✕
            </button>
          </div>
        </div>
      )}

      {/* Üst Navigasyon */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-zinc-950/85 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${theme.accentBg}`}
            >
              {business.shortName.charAt(0)}
            </div>
            <div className="truncate">
              <div className="font-bold text-sm sm:text-base text-white truncate">
                {business.shortName}
              </div>
              <div className="text-[11px] text-zinc-400 truncate">
                {business.district} • ⭐ {business.rating} ({business.reviewCount}+ Değerlendirme)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:+${business.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-200 transition"
            >
              📞 {business.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition ${theme.accentBg}`}
            >
              <span>💬 Randevu Al</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Bölümü */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${theme.gradientHero} pt-12 pb-16 sm:py-20 border-b border-white/10`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${theme.badgeBg}`}
              >
                📍 {business.district}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-amber-300">
                ★★★★★ {business.rating} Google Memnuniyeti
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {business.heroTagline}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              {business.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {business.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-xs text-zinc-200 font-medium"
                >
                  ✓ {b}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-xl transition ${theme.accentBg}`}
              >
                <span>💬 {theme.ctaLabel}</span>
              </a>
              <a
                href={`tel:+${business.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/15 bg-zinc-900/80 hover:bg-zinc-800 text-sm sm:text-base font-semibold text-white transition"
              >
                <span>📞 Hemen Ara: {business.phoneDisplay}</span>
              </a>
            </div>

            {/* İstatistik Barı */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {theme.stats.map((st, idx) => (
                <div key={idx} className="bg-zinc-900/60 border border-white/5 rounded-xl p-3">
                  <div className={`text-lg sm:text-xl font-extrabold ${theme.accentText}`}>
                    {st.val}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: İnteraktif WhatsApp Randevu / Fiyat Kutusu */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/95 border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
                    Online Hızlı İşlem
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {theme.formTitle}
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  ● Aktif
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    1. Hizmet / İşlem Seçin
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-white/40"
                  >
                    {business.services.map((s, idx) => (
                      <option key={idx} value={s.title}>
                        {s.title} ({s.highlight})
                      </option>
                    ))}
                    <option value="Genel Bilgi & Fiyat Talebi">
                      Diğer / Genel Bilgi & Fiyat Talebi
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    2. Uygun Olduğunuz Zaman
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Bugün / Acil", "Yarın", "Bu Hafta İçi"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition ${
                          selectedTime === t
                            ? `${theme.badgeBg} border-current`
                            : "bg-zinc-950 border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    3. Adınız Soyadınız (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Ahmet Yılmaz"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm shadow-lg transition ${theme.accentBg}`}
                >
                  <span>💬 WhatsApp ile Anında Gönder</span>
                </a>

                <p className="text-[11px] text-center text-zinc-400">
                  Komisyon veya ön ödeme yoktur. Doğrudan{" "}
                  <strong className="text-zinc-200">{business.shortName}</strong>{" "}
                  WhatsApp hattına yönlendirilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Bölümü */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
              Profesyonel Çözümlerimiz
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {business.shortName} Hizmetlerimiz
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Detaylı bilgi veya fiyat almak istediğiniz hizmetin altındaki butona tıklayarak doğrudan uzman ekibimize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {business.services.map((srv, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${theme.badgeBg}`}
                  >
                    {srv.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {srv.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={buildWhatsAppUrl(
                    `Merhaba ${business.shortName}, "${srv.title}" hizmetiniz hakkında fiyat ve randevu bilgisi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 ${theme.accentText} hover:underline`}
                >
                  <span>WhatsApp&apos;tan Bilgi & Fiyat Al</span>
                  <span>→</span>
                </a>
                <span className="text-xs text-zinc-500">Hızlı Yanıt</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Konum & İletişim Bölümü */}
      <section className="py-16 bg-zinc-900/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
              Adres & İletişim
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Bize Ulaşın & Yol Tarifi Alın
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Randevu oluşturmak, fiyat bilgisi almak veya konumumuza doğrudan yol tarifi açmak için aşağıdaki iletişim kanallarımızı kullanabilirsiniz.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10">
                <div className="text-xs text-zinc-400">📍 Açık Adres</div>
                <div className="text-sm font-semibold text-white mt-1">
                  {business.address}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">📞 Telefon & WhatsApp Hattı</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {business.phoneDisplay}
                  </div>
                </div>
                <a
                  href={`tel:+${business.phoneClean}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold ${theme.accentBg}`}
                >
                  Hemen Ara
                </a>
              </div>

              {business.instagram && (
                <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">📸 Instagram</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {business.instagram}
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400">Güncel Paylaşımlar</span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 h-[340px] sm:h-[400px] shadow-xl">
              <iframe
                title={`${business.shortName} Harita Konumu`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alt Bilgi (Footer) */}
      <footer className="py-8 border-t border-white/10 text-center text-xs text-zinc-500 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300">{business.name}</strong>. Tüm hakları saklıdır.
          </div>
          <div>
            {business.district} • İletişim: {business.phoneDisplay}
          </div>
        </div>
      </footer>

      {/* Sabit Sağ Alt WhatsApp Butonu */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-5 py-3.5 rounded-full shadow-2xl transition transform hover:scale-105"
      >
        <span className="text-lg">💬</span>
        <span className="text-xs sm:text-sm">WhatsApp İletişim</span>
      </a>
    </div>
  );
}
