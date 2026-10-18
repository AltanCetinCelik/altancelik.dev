"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DENIZLI_BUSINESSES, type BusinessLead, type SectorType } from "./businesses";

export default function VitrinControlPanel() {
  const [sentSlugs, setSentSlugs] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = window.localStorage.getItem("vitrin_sent_slugs_v1");
      return saved ? (JSON.parse(saved) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });
  const [priceText, setPriceText] = useState("3.500 TL");
  const [filterSector, setFilterSector] = useState<string>("all");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Anlık Yeni İşletme Üretici State
  const [customName, setCustomName] = useState("");
  const [customPhone, setCustomPhone] = useState("");
  const [customSector, setCustomSector] = useState<SectorType>("dental");
  const [customAddress, setCustomAddress] = useState("Merkezefendi / Denizli");

  const toggleSent = (slug: string) => {
    const next = { ...sentSlugs, [slug]: !sentSlugs[slug] };
    setSentSlugs(next);
    try {
      localStorage.setItem("vitrin_sent_slugs_v1", JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const buildPitchText = (b: BusinessLead, liveUrl: string) => {
    return (
      `Selamlar, Google'da ${b.shortName} olarak arattığımda aktif bir web sitenizin olmadığını fark ettim.\n\n` +
      `Ben Pamukkale Üniversitesi'nde mühendislik öğrencisiyim; işletmenizin kendi adı, ${b.phoneDisplay} WhatsApp randevu hattı ve harita konumuyla çalışan mobil uyumlu sitenizi örnek olarak hazırladım.\n\n` +
      `Şu linke tıklayıp telefonunuzdan canlı olarak inceleyebilirsiniz:\n` +
      `${liveUrl}\n\n` +
      `Hoşunuza giderse kendi .com / .com.tr alan adınıza bağlayıp her şeyiyle anahtar teslim ${priceText}'ye bugün aktif edebilirim. Beğenmezseniz de hiç sorun değil, fikir olması için paylaştım. İyi çalışmalar dilerim!`
    );
  };

  const getLiveUrl = (slug: string) => `https://altancelik.dev/vitrin/${slug}`;

  const handleCopy = async (b: BusinessLead) => {
    const text = buildPitchText(b, getLiveUrl(b.slug));
    await navigator.clipboard.writeText(text);
    setCopiedSlug(b.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const filteredList =
    filterSector === "all"
      ? DENIZLI_BUSINESSES
      : DENIZLI_BUSINESSES.filter((b) => b.sector === filterSector);

  const sentCount = Object.values(sentSlugs).filter(Boolean).length;

  // Custom generator URL
  const customDigits = customPhone.replace(/\D/g, "");
  const customWaPhone = customDigits.startsWith("90")
    ? customDigits
    : customDigits.startsWith("0")
    ? `9${customDigits}`
    : `90${customDigits}`;
  const customLiveUrl = `https://altancelik.dev/vitrin/ozel?ad=${encodeURIComponent(
    customName || "Örnek İşletme"
  )}&tel=${encodeURIComponent(customPhone || "0532 000 00 00")}&sektor=${customSector}&adres=${encodeURIComponent(
    customAddress
  )}`;

  const customPitch =
    `Selamlar, Google'da ${customName || "işletmeniz"} olarak baktığımda aktif bir web sitenizin olmadığını fark ettim.\n\n` +
    `Ben Pamukkale Üniversitesi'nde mühendislik öğrencisiyim; işletmenizin kendi adı, WhatsApp randevu hattı ve harita konumuyla çalışan mobil uyumlu sitenizi örnek olarak hazırladım.\n\n` +
    `Şu linke tıklayıp telefonunuzdan canlı olarak inceleyebilirsiniz:\n` +
    `${customLiveUrl}\n\n` +
    `Hoşunuza giderse kendi .com alan adınıza bağlayıp her şeyiyle anahtar teslim ${priceText}'ye bugün teslim edebilirim. İyi çalışmalar dilerim!`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Başlık & Durum Özeti */}
        <div className="rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Canlı Demo & Tek Tık WhatsApp Operasyon Paneli
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Denizli Hazır Web Sitesi Satış Merkezi (20 İşletme)
            </h1>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              Listedeki her işletmenin <strong>kendi adıyla, kendi 05xx numarasıyla ve kendi Google Harita konumuyla</strong> çalışan canlı sitesi hazır. Sadece <strong>&ldquo;WhatsApp&apos;tan Gönder&rdquo;</strong> butonuna bas, hazır mesaj ve canlı link otomatik açılır.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 bg-zinc-950 border border-white/10 rounded-2xl p-4">
            <div>
              <div className="text-xs text-zinc-400">Gönderilen Demo</div>
              <div className="text-2xl font-extrabold text-emerald-400">
                {sentCount} / {DENIZLI_BUSINESSES.length}
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <label className="block text-xs text-zinc-400 mb-1">
                Mesajdaki Teklif Fiyatı
              </label>
              <select
                value={priceText}
                onChange={(e) => setPriceText(e.target.value)}
                className="bg-zinc-900 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
              >
                <option value="3.000 TL">3.000 TL (Hızlı Sürüm)</option>
                <option value="3.500 TL">3.500 TL (Önerilen)</option>
                <option value="4.000 TL">4.000 TL (Standart)</option>
                <option value="5.000 TL">5.000 TL (Kurumsal)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Saniyede Yeni İşletme Sihirbazı */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/50 via-zinc-900 to-zinc-900 border border-emerald-500/30 p-6">
          <h2 className="text-base sm:text-lg font-bold text-white mb-1">
            ⚡ 3 Saniyede İstediğin İşletmeye Özel Canlı Site Üret (Sınırsız)
          </h2>
          <p className="text-xs text-zinc-400 mb-4">
            Google Haritalar veya Instagram&apos;da gördüğün herhangi bir dükkanın adını ve telefonunu yaz, anında ona özel çalışan site linki ve WhatsApp mesajı oluşsun:
          </p>
          <div className="grid sm:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="İşletme Adı (Örn: Pamukkale Oto Ekspertiz)"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white"
            />
            <input
              type="text"
              placeholder="05xx Telefon (Örn: 0532 123 45 67)"
              value={customPhone}
              onChange={(e) => setCustomPhone(e.target.value)}
              className="rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white"
            />
            <select
              value={customSector}
              onChange={(e) => setCustomSector(e.target.value as SectorType)}
              className="rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white"
            >
              <option value="auto">Oto Detailing / PPF / Ekspertiz</option>
              <option value="dental">Diş Kliniği / Veteriner / Sağlık</option>
              <option value="diet">Diyetisyen & Beslenme</option>
              <option value="therapy">Psikolog / Fizyoterapi / Pilates</option>
              <option value="beauty">Güzellik Merkezi & Estetik</option>
              <option value="realestate">Emlak & Gayrimenkul</option>
            </select>
            <input
              type="text"
              placeholder="İlçe / Şehir (Örn: Pamukkale / Denizli)"
              value={customAddress}
              onChange={(e) => setCustomAddress(e.target.value)}
              className="rounded-xl bg-zinc-950 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white"
            />
          </div>
          {customName.trim() && (
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-zinc-300 truncate max-w-xl">
                Hazır Link: <strong className="text-emerald-300">{customLiveUrl}</strong>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={customLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white"
                >
                  🔍 Canlı Siteyi Aç
                </a>
                <a
                  href={`https://wa.me/${customWaPhone}?text=${encodeURIComponent(customPitch)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold"
                >
                  💬 Tek Tıkla WhatsApp&apos;tan Gönder
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sektör Filtresi */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: `Tümü (${DENIZLI_BUSINESSES.length})` },
            { id: "auto", label: "🚗 Oto PPF & Detailing" },
            { id: "dental", label: "🦷 Diş & Veteriner" },
            { id: "diet", label: "🥗 Diyetisyen" },
            { id: "therapy", label: "🧠 Psikolog & Fizyoterapi" },
            { id: "beauty", label: "✨ Güzellik & Estetik" },
            { id: "realestate", label: "🏠 Gayrimenkul & Emlak" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterSector(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                filterSector === tab.id
                  ? "bg-emerald-500 text-zinc-950 border-emerald-400"
                  : "bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* İşletme Kartları Listesi */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredList.map((b, index) => {
            const isSent = !!sentSlugs[b.slug];
            const liveUrl = getLiveUrl(b.slug);
            const waUrl = `https://wa.me/${b.phoneClean}?text=${encodeURIComponent(
              buildPitchText(b, liveUrl)
            )}`;

            return (
              <div
                key={b.slug}
                className={`rounded-2xl border p-5 transition flex flex-col justify-between gap-4 ${
                  isSent
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "bg-zinc-900/90 border-white/10 hover:border-white/25"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        #{index + 1} • {b.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                        {b.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleSent(b.slug)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border shrink-0 transition ${
                        isSent
                          ? "bg-emerald-500 text-zinc-950 border-emerald-400"
                          : "bg-zinc-950 text-zinc-400 border-white/15 hover:text-white"
                      }`}
                    >
                      {isSent ? "✓ Gönderildi" : "Gönderildi İşaretle"}
                    </button>
                  </div>

                  <div className="mt-3 space-y-1 text-xs text-zinc-300">
                    <div>
                      📞 WhatsApp: <strong className="text-white">{b.phoneDisplay}</strong>
                      {b.instagram && (
                        <span className="ml-2 text-zinc-400">({b.instagram})</span>
                      )}
                    </div>
                    <div className="text-zinc-400 truncate">📍 {b.address}</div>
                    <div className="text-emerald-300 font-mono text-[11px] truncate pt-1">
                      🔗 {liveUrl}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10">
                  <Link
                    href={`/vitrin/${b.slug}`}
                    target="_blank"
                    className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition"
                  >
                    👁️ Canlı Siteyi Gör
                  </Link>

                  <button
                    onClick={() => handleCopy(b)}
                    className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/15 hover:border-white/30 text-xs font-semibold text-zinc-200 transition"
                  >
                    {copiedSlug === b.slug ? "✓ Kopyalandı!" : "📋 Mesajı Kopyala"}
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (!isSent) toggleSent(b.slug);
                    }}
                    className="ml-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold shadow-lg transition"
                  >
                    💬 WhatsApp&apos;tan Gönder →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
