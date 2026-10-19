"use client";

import React, { useState } from "react";
import type { BusinessLead } from "../businesses";

interface PaletteProps {
  bg: string;
  surface: string;
  surfaceAlt: string;
  ink: string;
  inkSecondary: string;
  inkMuted: string;
  line: string;
  lineStrong: string;
  accent: string;
  accentContrast: string;
  accentSoft: string;
  fontDisplay: string;
}

export default function SectorInteractiveLab({
  business,
  palette: p,
  buildWaLink,
}: {
  business: BusinessLead;
  palette: PaletteProps;
  buildWaLink: (customMsg?: string) => string;
}) {
  /* ---------------- 1. AUTO: 3D PPF KATMAN & PAKET SİMÜLATÖRÜ ---------------- */
  const [autoLayer, setAutoLayer] = useState(0);
  const [autoVehicle, setAutoVehicle] = useState("Sedan / Coupe");

  /* ---------------- 2. DENTAL: ZİRKONYUM TON & TEDAVİ SİMÜLATÖRÜ ------------- */
  const [dentalShade, setDentalShade] = useState(1);
  const [dentalTreatment, setDentalTreatment] = useState(0);

  /* ---------------- 3. DIET: METABOLİK EĞRİ & VKİ SİMÜLATÖRÜ ----------------- */
  const [heightCm, setHeightCm] = useState(168);
  const [weightKg, setWeightKg] = useState(76);
  const [targetKg, setTargetKg] = useState(62);

  /* ---------------- 4. REAL ESTATE: DENİZLİ BÖLGE DEĞERLEME ------------------ */
  const [reDistrict, setReDistrict] = useState(0);
  const [reSqm, setReSqm] = useState(140);
  const [reRooms, setReRooms] = useState("3+1 Daire");

  /* ---------------- 5. BEAUTY: CİLT & PROTOKOL EŞLEŞTİRİCİ ------------------- */
  const [beautyGoal, setBeautyGoal] = useState(0);

  /* ---------------- 6. THERAPY: SEANS & ODAK PLANLAYICI ---------------------- */
  const [therapyFocus, setTherapyFocus] = useState(0);

  if (business.sector === "auto") {
    const layers = [
      {
        code: "KATMAN 01 · 18 µm",
        name: "Isıyla Kendini Onaran (Self-Healing) Elastomerik Üst Kaplama",
        desc: "Kılcal yıkama çiziklerini ve fırça izlerini güneş ısısı veya sıcak su ile dakikalar içinde kendi kendine yok eder; leke ve kuş pisliği asidine karşı hidrofobik bariyer oluşturur.",
        spec: "Su İtici Temas Açısı: 112°",
        thickness: "18 Mikron",
      },
      {
        code: "KATMAN 02 · 150 µm",
        name: "Alifatik Optik Şeffaf %100 TPU Poliüretan Zırh Gövde",
        desc: "Yüksek hızda gelen taş çarpmalarını, kapı açma darbelerini ve sürtmeleri sönümleyerek darbe enerjisini orijinal fabrika boyasına iletmeden emer. Sararma yapmaz.",
        spec: "Kopma Uzaması: %410",
        thickness: "150 Mikron",
      },
      {
        code: "KATMAN 03 · 22 µm",
        name: "Boya Dostu Akrilik Basınç Duyarlı Yapışkan Katman",
        desc: "Doğru ekipmanla söküldüğünde aracın orijinal verniğine zarar vermez, iz bırakmaz ve eksper kontrollerinde boya koruma olarak net biçimde görülür.",
        spec: "İz Bırakmayan Söküm",
        thickness: "22 Mikron",
      },
      {
        code: "KATMAN 04 · FABRİKA",
        name: "Hologramsız Polisajlanmış Orijinal Fabrika Verniği",
        desc: "Uygulama öncesinde çok aşamalı optik polisaj ile tüm yüzey kusurlarından arındırılmış ve 190 mikronluk zırh altında ilk günkü parlaklığıyla mühürlenmiş yüzey.",
        spec: "Ayna Derinliği: %99.4",
        thickness: "Orijinal Gövde",
      },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Sol: 3B İzometrik Katman Kesiti */}
            <div className="lg:col-span-6">
              <div
                style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                className="rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-xs uppercase tracking-widest"
                  >
                    İNTERAKTİF 3B KESİT · 190µm TPU ZIRH
                  </span>
                  <span
                    style={{ color: p.inkMuted, fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-xs"
                  >
                    Katmana Tıklayın
                  </span>
                </div>

                {/* 3D Isometric Stack */}
                <div className="space-y-3 py-4">
                  {layers.map((ly, idx) => {
                    const active = autoLayer === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAutoLayer(idx)}
                        style={{
                          border: `1px solid ${active ? p.accent : p.lineStrong}`,
                          backgroundColor: active ? p.accentSoft : p.surface,
                          transform: active ? "translateX(10px)" : "translateX(0px)",
                        }}
                        className="w-full text-left rounded-xl p-4 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4"
                      >
                        <div>
                          <div
                            style={{
                              color: active ? p.accent : p.inkMuted,
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                            className="text-[11px] uppercase tracking-wider"
                          >
                            {ly.code}
                          </div>
                          <div className="text-sm sm:text-base font-semibold mt-0.5">
                            {ly.name}
                          </div>
                        </div>
                        <span
                          style={{
                            border: `1px solid ${p.lineStrong}`,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                          className="px-2.5 py-1 rounded text-[11px] shrink-0"
                        >
                          {ly.thickness}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sağ: Seçili Katman Teknik Detayı & Araç Tipi Teklif Seçici */}
            <div className="lg:col-span-6 space-y-6">
              <span
                style={{ color: p.inkMuted, fontFamily: "'JetBrains Mono', monospace" }}
                className="text-xs uppercase tracking-widest block"
              >
                MÜHENDİSLİK DETAYI · {layers[autoLayer].code}
              </span>
              <h2
                style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
                className="text-2xl sm:text-4xl font-semibold m-0"
              >
                {layers[autoLayer].name}
              </h2>
              <p
                style={{ color: p.inkSecondary }}
                className="text-sm sm:text-base leading-relaxed m-0"
              >
                {layers[autoLayer].desc}
              </p>

              <div
                style={{ border: `1px solid ${p.line}`, backgroundColor: p.surface }}
                className="rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.inkMuted }}>
                    Aracınızın Kasa Tipini Seçin
                  </span>
                  <span
                    style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-xs font-semibold"
                  >
                    {layers[autoLayer].spec}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["Sedan / Coupe", "SUV / Crossover", "Spor / Premium"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAutoVehicle(v)}
                      style={{
                        border: `1px solid ${autoVehicle === v ? p.accent : p.lineStrong}`,
                        backgroundColor: autoVehicle === v ? p.accentSoft : p.bg,
                      }}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold cursor-pointer transition"
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <a
                  href={buildWaLink(
                    `Merhaba ${business.shortName}, ${autoVehicle} aracım için TPU PPF Şeffaf Kaplama ve 9H Seramik Kaplama paket fiyatları hakkında bilgi alabilir miyim?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: p.accent, color: p.accentContrast }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
                >
                  <span>{autoVehicle} İçin Fiyat & Randevu Sorgula</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "dental") {
    const shades = [
      { code: "BL1", name: "Hollywood Ekstra Beyaz", hex: "#FBFDFF", note: "Yüksek parlaklık ve estetik kontrast" },
      { code: "BL2", name: "Klinik Doğal Beyaz", hex: "#F7F9FC", note: "En çok tercih edilen dengeli ve aydınlık gülüş tonu" },
      { code: "A1", name: "Organik İnci Tonu", hex: "#F4F3EC", note: "Doğal diş minesinin ışık geçirgenliğiyle birebir uyum" },
      { code: "A2", name: "Sıcak Doğal Mine", hex: "#EFECE1", note: "Yumuşak ve doğal görünüm isteyen danışanlar için" },
    ];
    const protocols = [
      {
        title: "Zirkonyum & E-Max Gülüş Tasarımı",
        duration: "4 – 5 Gün (2–3 Randevu)",
        warranty: "Dijital CAD/CAM Protokolü",
        summary: "3 boyutlu ağız içi tarayıcı ile ölçü alınır; geçici dişleriniz aynı gün takılarak sosyal hayatınız kesintiye uğramadan tamamlanır.",
      },
      {
        title: "Sertifikalı Dental İmplant Uygulaması",
        duration: "Tek Seans (20–30 Dk / İmplant)",
        warranty: "Sertifikalı Titanyum Sistem",
        summary: "Modern lokal anestezi altında konforlu biçimde uygulanır; biyouyumlu titanyum altyapı ile doğal diş kökünüzün fonksiyonunu üstlenir.",
      },
      {
        title: "Ofis Tipi Lazer Diş Beyazlatma",
        duration: "Tek Seans (45 Dakika)",
        warranty: "Mine Koruyucu Jel Protokolü",
        summary: "Diş minesini koruyan klinik jel protokolü ile klinik ortamda daha aydınlık ve parlak diş tonu sağlanır.",
      },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span
                style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
                className="text-xs uppercase tracking-widest block"
              >
                DİJİTAL GÜLÜŞ & TEDAVİ PLANLAYICI
              </span>
              <h2
                style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
                className="text-3xl sm:text-4xl font-semibold m-0"
              >
                Tedavi Sürecinizi ve Renk Skalanızı Önceden İnceleyin
              </h2>
              <p
                style={{ color: p.inkSecondary }}
                className="text-sm sm:text-base leading-relaxed m-0"
              >
                Kliniğimizde tüm estetik ve protetik işlemler uluslararası VITA renk skalası ve 3 boyutlu dijital prova ile yüzünüze özel planlanır.
              </p>

              {/* Renk Skalası Seçici */}
              <div
                style={{ border: `1px solid ${p.line}`, backgroundColor: p.surface }}
                className="rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.inkMuted }}>
                    Zirkonyum / Beyazlatma Ton Skalası
                  </span>
                  <span style={{ color: p.accent }} className="text-xs font-bold">
                    {shades[dentalShade].code} — {shades[dentalShade].name}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {shades.map((sh, i) => (
                    <button
                      key={sh.code}
                      type="button"
                      onClick={() => setDentalShade(i)}
                      style={{
                        border: `2px solid ${dentalShade === i ? p.accent : p.lineStrong}`,
                        backgroundColor: sh.hex,
                      }}
                      className="rounded-xl p-3 text-center cursor-pointer transition"
                    >
                      <div className="text-xs font-bold text-slate-900">{sh.code}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5 truncate">{sh.name.split(" ")[0]}</div>
                    </button>
                  ))}
                </div>
                <p style={{ color: p.inkSecondary }} className="text-xs m-0">
                  {shades[dentalShade].note}
                </p>
              </div>
            </div>

            {/* Sağ: Tedavi Süre & Protokol Kartı */}
            <div className="lg:col-span-6">
              <div
                style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
                className="rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-wrap gap-2">
                  {protocols.map((pr, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDentalTreatment(idx)}
                      style={{
                        border: `1px solid ${dentalTreatment === idx ? p.accent : p.line}`,
                        backgroundColor: dentalTreatment === idx ? p.accentSoft : p.bg,
                        color: p.ink,
                      }}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition"
                    >
                      {pr.title.split("&")[0]}
                    </button>
                  ))}
                </div>

                <div className="pt-2 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold m-0">
                    {protocols[dentalTreatment].title}
                  </h3>
                  <p style={{ color: p.inkSecondary }} className="text-sm leading-relaxed m-0">
                    {protocols[dentalTreatment].summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-3.5 rounded-xl">
                    <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Ortalama Süre</div>
                    <div className="text-sm font-bold mt-1">{protocols[dentalTreatment].duration}</div>
                  </div>
                  <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-3.5 rounded-xl">
                    <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Uygulama Standardı</div>
                    <div className="text-sm font-bold mt-1">{protocols[dentalTreatment].warranty}</div>
                  </div>
                </div>

                <a
                  href={buildWaLink(
                    `Merhaba ${business.shortName}, "${protocols[dentalTreatment].title}" (Ton tercihi: ${shades[dentalShade].code}) hakkında muayene ve fiyat bilgisi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: p.accent, color: p.accentContrast }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
                >
                  <span>Bu Tedavi İçin Muayene Randevusu Al</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "diet") {
    const bmi = (weightKg / Math.pow(heightCm / 100, 2)).toFixed(1);
    const diff = Math.max(0, weightKg - targetKg);
    const estimatedWeeks = Math.max(2, Math.round(diff / 0.85));

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span
              style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs uppercase tracking-widest block"
            >
              KLİNİK VÜCUT KOMPOZİSYONU & SÜREÇ SİMÜLATÖRÜ
            </span>
            <h2
              style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
              className="text-3xl sm:text-4xl font-semibold m-0"
            >
              Sağlıklı Hedef Sürenizi ve VKİ Değerinizi Hesaplayın
            </h2>
            <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
              Kas kaybı yaşamadan, haftalık ortalama 0.7 – 1.0 kg sağlıklı yağ kaybı protokolüyle hedef kilonuza ne kadar sürede ulaşabileceğinizi inceleyin.
            </p>

            <div
              style={{ border: `1px solid ${p.line}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 space-y-5"
            >
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: p.inkMuted }}>
                    Boy (cm)
                  </label>
                  <input
                    type="number"
                    min={140}
                    max={210}
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value) || 168)}
                    style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-base font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: p.inkMuted }}>
                    Mevcut Kilo (kg)
                  </label>
                  <input
                    type="number"
                    min={40}
                    max={180}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value) || 75)}
                    style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-base font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: p.inkMuted }}>
                    Hedef Kilo (kg)
                  </label>
                  <input
                    type="number"
                    min={40}
                    max={150}
                    value={targetKg}
                    onChange={(e) => setTargetKg(Number(e.target.value) || 62)}
                    style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-base font-bold"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="grid grid-cols-3 gap-4">
                <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-4 rounded-xl">
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">VKİ Oranı</div>
                  <div className="text-2xl font-bold mt-1">{bmi}</div>
                </div>
                <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-4 rounded-xl">
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Hedef Fark</div>
                  <div className="text-2xl font-bold mt-1">-{diff} kg</div>
                </div>
                <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-4 rounded-xl">
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Sağlıklı Süre</div>
                  <div style={{ color: p.accent }} className="text-2xl font-bold mt-1">~{estimatedWeeks} Hafta</div>
                </div>
              </div>

              <a
                href={buildWaLink(
                  `Merhaba ${business.shortName}, web sitenizdeki analiz modülünden ulaşıyorum.\n• Boy: ${heightCm} cm | Mevcut: ${weightKg} kg | Hedef: ${targetKg} kg (VKİ: ${bmi})\nYüz yüze / online beslenme programlarınız hakkında bilgi alabilir miyim?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: p.accent, color: p.accentContrast }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
              >
                <span>Kişisel Beslenme Planım İçin Randevu Al</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "realestate") {
    const districts = [
      { name: "Çamlık / Kınıklı", trend: "Yüksek Talep · Prestij Konut", yieldYears: "16 – 18 Yıl" },
      { name: "Servergazi / Gerzele", trend: "Villa & Geniş Aile Konutu", yieldYears: "17 – 19 Yıl" },
      { name: "Yenişehir / Teraspark", trend: "Hızlı Satış & Kurumsal Kira", yieldYears: "15 – 17 Yıl" },
      { name: "Bağbaşı / Merkezefendi", trend: "Yüksek Kira Çarpanı & Yatırım", yieldYears: "14 – 16 Yıl" },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span
              style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs uppercase tracking-widest block"
            >
              GAYRİMENKUL EMSAL DEĞERLEME & PORTFÖY MODÜLÜ
            </span>
            <h2
              style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
              className="text-3xl sm:text-4xl font-semibold m-0"
            >
              Denizli Bölge Analizi ve Mülk Değerleme Talebi
            </h2>
            <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
              Satmak, kiralamak veya yatırım yapmak istediğiniz bölgeyi ve mülk özelliklerini seçin; güncel tapu satış emsallerine dayalı değerleme çalışmamızı paylaşalım.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              {districts.map((d, idx) => (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setReDistrict(idx)}
                  style={{
                    border: `1px solid ${reDistrict === idx ? p.accent : p.lineStrong}`,
                    backgroundColor: reDistrict === idx ? p.accentSoft : p.surface,
                  }}
                  className="p-3.5 rounded-xl text-left cursor-pointer transition"
                >
                  <div className="text-xs font-bold">{d.name}</div>
                  <div style={{ color: p.inkMuted }} className="text-[11px] mt-0.5">{d.trend}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: p.inkMuted }}>
                    Gayrimenkul Tipi
                  </label>
                  <select
                    value={reRooms}
                    onChange={(e) => setReRooms(e.target.value)}
                    style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                  >
                    <option value="2+1 Daire">2+1 Daire</option>
                    <option value="3+1 Daire">3+1 Daire</option>
                    <option value="4+1 / Villa">4+1 / Müstakil Villa</option>
                    <option value="İmarlı Arsa">İmarlı Arsa / Arazi</option>
                    <option value="Ticari Dükkan">Ticari Dükkan / Mağaza</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: p.inkMuted }}>
                    Yaklaşık Alan (m²)
                  </label>
                  <input
                    type="number"
                    min={40}
                    max={2000}
                    value={reSqm}
                    onChange={(e) => setReSqm(Number(e.target.value) || 140)}
                    style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.bg }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-sm font-bold"
                  />
                </div>
              </div>

              <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Seçili Bölge & Amortisman</div>
                  <div className="text-sm font-bold mt-0.5">{districts[reDistrict].name} · {districts[reDistrict].yieldYears}</div>
                </div>
                <span style={{ color: p.accent }} className="text-xs font-bold">Emsal Analizi</span>
              </div>

              <a
                href={buildWaLink(
                  `Merhaba ${business.shortName}, ${districts[reDistrict].name} bölgesindeki ${reSqm} m² ${reRooms} için piyasa değerlemesi / portföy bilgisi almak istiyorum.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: p.accent, color: p.accentContrast }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
              >
                <span>Değerleme & Portföy Bilgisi İsteyin</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "beauty") {
    const programs = [
      {
        title: "4 Mevsim Buz Başlıklı Lazer Epilasyon",
        sessions: "6 – 8 Seans Paket",
        interval: "Ayda 1 Kontrol",
        detail: "Soğutmalı safir başlık teknolojisi ile konforlu, dört mevsim güvenli ve farklı kıl tiplerinde etkili protokol.",
      },
      {
        title: "Hydrafacial & Medikal Anti-Aging Cilt Bakımı",
        sessions: "Tek Seans veya 4'lü Kür",
        interval: "45 Dakika Uygulama",
        detail: "Vakumlu gözenek arındırma, hyaluronik asit infüzyonu ve LED terapi ile ilk seanstan itibaren canlı ve parlak cilt dokusu.",
      },
      {
        title: "Bölgesel İncelme & Sıkılaşma (G5 / EMS)",
        sessions: "8 – 12 Seans Kür",
        interval: "Haftada 2 Seans",
        detail: "Bölgesel yağ dokusunu hedefleyen, lenf drenaj ve kas stimülasyonu destekli sıkılaşma paketi.",
      },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span
              style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs uppercase tracking-widest block"
            >
              CİLT ANALİZİ & KÜR PLANLAYICI
            </span>
            <h2
              style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
              className="text-3xl sm:text-4xl font-semibold m-0"
            >
              İhtiyacınıza Uygun Bakım Kürünü Seçin
            </h2>
            <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
              Merkezimizde tüm uygulamalar öncesinde dijital cilt ve kıl kökü analizi yapılarak size en uygun seans sayısı belirlenir.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-3 gap-2.5">
                {programs.map((pr, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBeautyGoal(idx)}
                    style={{
                      border: `1px solid ${beautyGoal === idx ? p.accent : p.line}`,
                      backgroundColor: beautyGoal === idx ? p.accentSoft : p.bg,
                    }}
                    className="p-3 rounded-xl text-left text-xs font-semibold cursor-pointer transition"
                  >
                    {pr.title}
                  </button>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-semibold m-0">{programs[beautyGoal].title}</h3>
                <p style={{ color: p.inkSecondary }} className="text-sm leading-relaxed m-0">
                  {programs[beautyGoal].detail}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-3.5 rounded-xl">
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Önerilen Plan</div>
                  <div className="text-sm font-bold mt-0.5">{programs[beautyGoal].sessions}</div>
                </div>
                <div style={{ backgroundColor: p.bg, border: `1px solid ${p.line}` }} className="p-3.5 rounded-xl">
                  <div style={{ color: p.inkMuted }} className="text-[11px] uppercase">Seans Süresi</div>
                  <div className="text-sm font-bold mt-0.5">{programs[beautyGoal].interval}</div>
                </div>
              </div>

              <a
                href={buildWaLink(
                  `Merhaba ${business.shortName}, "${programs[beautyGoal].title}" paket fiyatları ve ön analiz randevusu için bilgi alabilir miyim?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: p.accent, color: p.accentContrast }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
              >
                <span>Ön Analiz & Paket Fiyatı Al</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "physio") {
    const physioPrograms = [
      {
        title: "Klinik Reformer Pilates & Postür Analizi",
        format: "50 Dakika · Birebir (1:1) veya Düet (2:1)",
        note: "Fizyoterapist eşliğinde omurga hizalanması, skolyoz takibi, core güçlendirme ve esneklik odaklı aletli pilates programı.",
      },
      {
        title: "Manuel Terapi & Ağrı Yönetimi",
        format: "Birebir Fizyoterapist Değerlendirmesi",
        note: "Bel-boyun fıtığı, kas spazmları, eklem kısıtlılıkları ve duruş bozukluklarında elle uygulanan klinik mobilizasyon protokolü.",
      },
      {
        title: "Ortopedik & Sporcu Rehabilitasyonu",
        format: "Kişiye Özel Egzersiz Reçetesi",
        note: "Ameliyat sonrası veya spor yaralanmaları ardından kas kuvvetini ve hareket açıklığını güvenli şekilde geri kazandıran süreç.",
      },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span
              style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs uppercase tracking-widest block"
            >
              POSTÜR ANALİZİ & SEANS PLANLAYICI
            </span>
            <h2
              style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
              className="text-3xl sm:text-4xl font-semibold m-0"
            >
              İhtiyacınıza Uygun Fizyoterapi &amp; Pilates Programı
            </h2>
            <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
              İlk değerlendirme seansında duruş ve hareket analizi yapılarak haftalık seans sıklığınız fizyoterapistimizle birlikte planlanır.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-3 gap-2.5">
                {physioPrograms.map((pr, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTherapyFocus(idx)}
                    style={{
                      border: `1px solid ${therapyFocus === idx ? p.accent : p.line}`,
                      backgroundColor: therapyFocus === idx ? p.accentSoft : p.bg,
                    }}
                    className="p-3 rounded-xl text-left text-xs font-semibold cursor-pointer transition"
                  >
                    {pr.title}
                  </button>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <div style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs">
                  {physioPrograms[therapyFocus].format}
                </div>
                <h3 className="text-xl font-semibold m-0">{physioPrograms[therapyFocus].title}</h3>
                <p style={{ color: p.inkSecondary }} className="text-sm leading-relaxed m-0">
                  {physioPrograms[therapyFocus].note}
                </p>
              </div>

              <a
                href={buildWaLink(
                  `Merhaba ${business.shortName}, "${physioPrograms[therapyFocus].title}" için deneme seansı / değerlendirme randevusu ve paket bilgisi alabilir miyim?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: p.accent, color: p.accentContrast }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
              >
                <span>Değerlendirme &amp; Deneme Seansı Randevusu Al</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (business.sector === "vet") {
    const vetPrograms = [
      {
        title: "Kedi & Köpek Aşı Takvimi ve Parazit Takibi",
        format: "Dijital Aşı Karnesi · Periyodik Hatırlatma",
        note: "Yavru ve yetişkin dostlarımız için iç-dış parazit uygulamaları, karma, kuduz ve lösemi aşılarının zamanında takibi.",
      },
      {
        title: "Klinik Check-Up, Hemogram & Röntgen (CR)",
        format: "Hızlı Laboratuvar Sonucu · Detaylı Muayene",
        note: "Kan tahlili, biyokimya, dijital röntgen ve ultrasonografi ile erken teşhis ve kapsamlı sağlık kontrolü.",
      },
      {
        title: "Steril Cerrahi, Kısırlaştırma & Pet Bakım",
        format: "Gaz Anestezili Cerrahi · Hijyenik Pet Kuaför",
        note: "Güvenli gaz anestezisi ve hasta başı monitörizasyon eşliğinde kısırlaştırma operasyonları ve makas/tıraş bakımı.",
      },
    ];

    return (
      <section
        style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
        className="py-20 sm:py-28"
      >
        <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span
              style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs uppercase tracking-widest block"
            >
              PATİLİ DOSTLAR İÇİN KLİNİK PLANLAYICI
            </span>
            <h2
              style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
              className="text-3xl sm:text-4xl font-semibold m-0"
            >
              Minik Dostunuz İçin Muayene &amp; Bakım Seçimi
            </h2>
            <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
              Kliniğimizde tüm muayene, aşılama ve cerrahi işlemler steril koşullarda ve stres azaltıcı yaklaşımla gerçekleştirilir.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-3 gap-2.5">
                {vetPrograms.map((pr, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTherapyFocus(idx)}
                    style={{
                      border: `1px solid ${therapyFocus === idx ? p.accent : p.line}`,
                      backgroundColor: therapyFocus === idx ? p.accentSoft : p.bg,
                    }}
                    className="p-3 rounded-xl text-left text-xs font-semibold cursor-pointer transition"
                  >
                    {pr.title}
                  </button>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <div style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs">
                  {vetPrograms[therapyFocus].format}
                </div>
                <h3 className="text-xl font-semibold m-0">{vetPrograms[therapyFocus].title}</h3>
                <p style={{ color: p.inkSecondary }} className="text-sm leading-relaxed m-0">
                  {vetPrograms[therapyFocus].note}
                </p>
              </div>

              <a
                href={buildWaLink(
                  `Merhaba ${business.shortName}, "${vetPrograms[therapyFocus].title}" için randevu ve bilgi alabilir miyim?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: p.accent, color: p.accentContrast }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
              >
                <span>Klinik Muayene &amp; Bilgi Randevusu Al</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* THERAPY */
  const tracks = [
    {
      title: "Bireysel Değerlendirme & Seans Planı",
      format: "50 Dakika · Birebir Uzman Seansı",
      note: "İlk görüşmede kapsamlı değerlendirme yapılarak haftalık veya iki haftada bir size özel seans takvimi oluşturulur.",
    },
    {
      title: "Ergen, Çocuk & Aile Odaklı Program",
      format: "Yapılandırılmış Süreç · Ebeveyn Bilgilendirmeli",
      note: "Yaş grubuna ve ihtiyaca özel bilimsel envanterler ve birebir gelişim takibi ile yürütülür.",
    },
    {
      title: "Online Görüntülü Danışmanlık / Takip",
      format: "Esnek Saatler · Etik Gizlilik",
      note: "Şehir içi yoğunlukta veya şehir dışından kendi konfor alanınızda katılabileceğiniz birebir seanslar.",
    },
  ];

  return (
    <section
      style={{ borderBottom: `1px solid ${p.line}`, backgroundColor: p.surfaceAlt }}
      className="py-20 sm:py-28"
    >
      <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span
            style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs uppercase tracking-widest block"
          >
            BİREYSEL SEANS & SÜREÇ REHBERİ
          </span>
          <h2
            style={{ fontFamily: p.fontDisplay, letterSpacing: "-0.03em" }}
            className="text-3xl sm:text-4xl font-semibold m-0"
          >
            Size En Uygun Görüşme Formatını Seçin
          </h2>
          <p style={{ color: p.inkSecondary }} className="text-sm sm:text-base leading-relaxed m-0">
            Tüm görüşmelerimiz mesleki etik ilkeler, tam gizlilik ve randevu saatine birebir sadakat prensibiyle gerçekleştirilir.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div
            style={{ border: `1px solid ${p.lineStrong}`, backgroundColor: p.surface }}
            className="rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-3 gap-2.5">
              {tracks.map((tr, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTherapyFocus(idx)}
                  style={{
                    border: `1px solid ${therapyFocus === idx ? p.accent : p.line}`,
                    backgroundColor: therapyFocus === idx ? p.accentSoft : p.bg,
                  }}
                  className="p-3 rounded-xl text-left text-xs font-semibold cursor-pointer transition"
                >
                  {tr.title}
                </button>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <div style={{ color: p.accent, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs">
                {tracks[therapyFocus].format}
              </div>
              <h3 className="text-xl font-semibold m-0">{tracks[therapyFocus].title}</h3>
              <p style={{ color: p.inkSecondary }} className="text-sm leading-relaxed m-0">
                {tracks[therapyFocus].note}
              </p>
            </div>

            <a
              href={buildWaLink(
                `Merhaba ${business.shortName}, "${tracks[therapyFocus].title}" hakkında müsaitlik ve randevu bilgisi alabilir miyim?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: p.accent, color: p.accentContrast }}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-sm font-semibold transition hover:opacity-90"
            >
              <span>Ön Görüşme & Seans Randevusu Al</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
