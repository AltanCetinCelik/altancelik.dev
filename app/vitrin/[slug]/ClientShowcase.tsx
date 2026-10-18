"use client";

import React, { useState } from "react";
import type { BusinessLead, SectorType } from "../businesses";

/* -------------------------------------------------------------------------- */
/*  INLINE ARCHITECTURAL SVG ICONS (ui-ux-pro-max: ZERO EMOJIS ALLOWED)       */
/* -------------------------------------------------------------------------- */
const Icons = {
  Phone: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  WhatsApp: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  MapPin: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Star: ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowUpRight: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  Shield: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Clock: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Sliders: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="2" y1="14" x2="6" y2="14" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="18" y1="16" x2="22" y2="16" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  UI-UX-PRO-MAX SECTOR DESIGN TOKENS (LIGHT EDITORIAL + STUDIO CARBON)      */
/* -------------------------------------------------------------------------- */
interface SectorDesignSystem {
  isDark: boolean;
  pageBg: string;
  surfaceBg: string;
  cardBg: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderSubtle: string;
  primaryBtn: string;
  secondaryBtn: string;
  accentColor: string;
  accentBadge: string;
  headingFontClass: string;
  heroImage: string;
  secondaryImage: string;
  editorialKicker: string;
  ctaLabel: string;
  formTitle: string;
  testimonials: { name: string; role: string; quote: string }[];
  processSteps: { num: string; title: string; detail: string }[];
}

const DESIGN_SYSTEMS: Record<SectorType, SectorDesignSystem> = {
  dental: {
    isDark: false,
    pageBg: "bg-[#F8FAFC]",
    surfaceBg: "bg-[#F1F5F9]",
    cardBg: "bg-white shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)]",
    textPrimary: "text-[#0F172A]",
    textSecondary: "text-[#334155]",
    textMuted: "text-[#64748B]",
    borderSubtle: "border-[#E2E8F0]",
    primaryBtn: "bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm",
    secondaryBtn: "bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1]",
    accentColor: "text-[#0284C7]",
    accentBadge: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
    headingFontClass: "font-sans tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "KLİNİK Mükemmeliyet & Dijital Protokol",
    ctaLabel: "Muayene Randevusu Oluştur",
    formTitle: "Hızlı Klinik Randevu & Ön Değerlendirme",
    testimonials: [
      {
        name: "Merve K.",
        role: "Zirkonyum & Gülüş Tasarımı Danışanı",
        quote:
          "İlk muayeneden prova sürecine kadar her aşama dijital olarak gösterildi. Doğallığı ve klinik hijyeni gerçekten üst düzey.",
      },
      {
        name: "Hakan T.",
        role: "İmplant Tedavisi",
        quote:
          "Hiç ağrı hissetmeden aynı gün içinde işlemim tamamlandı. Randevu saatlerine dakikası dakikasına uyuluyor.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Dijital Görüntüleme & Analiz",
        detail: "Panoramik röntgen ve 3 boyutlu ağız içi tarama ile milimetrik teşhis.",
      },
      {
        num: "02",
        title: "Şeffaf Tedavi Planlaması",
        detail: "İşlem süresi, kullanılacak sertifikalı materyaller ve maliyetin netleştirilmesi.",
      },
      {
        num: "03",
        title: "Ağrısız & Steril Uygulama",
        detail: "Modern lokal anestezi ve tek kullanımlık steril protokollerle konforlu süreç.",
      },
    ],
  },
  diet: {
    isDark: false,
    pageBg: "bg-[#FAF8F5]",
    surfaceBg: "bg-[#F2EFE9]",
    cardBg: "bg-white shadow-[0_14px_34px_-10px_rgba(20,51,38,0.06)]",
    textPrimary: "text-[#143326]",
    textSecondary: "text-[#3D5245]",
    textMuted: "text-[#697A70]",
    borderSubtle: "border-[#E3DFD5]",
    primaryBtn: "bg-[#15803D] hover:bg-[#166534] text-white shadow-sm",
    secondaryBtn: "bg-white hover:bg-[#F2EFE9] text-[#143326] border border-[#D5CFC2]",
    accentColor: "text-[#15803D]",
    accentBadge: "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]",
    headingFontClass: "font-serif tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "BİLİMSEL BESLENME & METABOLİK DENGE",
    ctaLabel: "Ücretsiz Ön Görüşme Planla",
    formTitle: "Kişisel Beslenme & InBody Analiz Randevusu",
    testimonials: [
      {
        name: "Selin A.",
        role: "Yüz Yüze Diyet Danışanı (-14 kg)",
        quote:
          "Hiçbir yasak listesi olmadan, sosyal hayatımdan kopmadan 3,5 ayda tamamen yağdan 14 kilo verdim. Haftalık InBody ölçümleri çok motive edici.",
      },
      {
        name: "Burak Y.",
        role: "Online Beslenme Takibi",
        quote:
          "Yoğun iş temposunda WhatsApp üzerinden her öğünümü takip etmesi sayesinde insülin direncimi kırdık.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Segmental Yağ & Kas Analizi",
        detail: "Profesyonel klinik cihazla metabolizma hızı, ödem ve iç yağlanma ölçümü.",
      },
      {
        num: "02",
        title: "Yaşam Tarzına Uygun Planlama",
        detail: "Kan tahlilleriniz ve sevdiğiniz besinlere göre sıfırdan kurgulanan liste.",
      },
      {
        num: "03",
        title: "Birebir WhatsApp & Haftalık Kontrol",
        detail: "Günlük öğün değerlendirmesi ve her hafta güncellenen dinamik program.",
      },
    ],
  },
  therapy: {
    isDark: false,
    pageBg: "bg-[#FBF9F6]",
    surfaceBg: "bg-[#F3EFEA]",
    cardBg: "bg-white shadow-[0_14px_36px_-10px_rgba(49,46,129,0.06)]",
    textPrimary: "text-[#1E1B2E]",
    textSecondary: "text-[#4A4458]",
    textMuted: "text-[#7A7389]",
    borderSubtle: "border-[#E6E0D6]",
    primaryBtn: "bg-[#4338CA] hover:bg-[#3730A3] text-white shadow-sm",
    secondaryBtn: "bg-white hover:bg-[#F3EFEA] text-[#1E1B2E] border border-[#D8D0C5]",
    accentColor: "text-[#4338CA]",
    accentBadge: "bg-[#EEF2FF] text-[#3730A3] border-[#E0E7FF]",
    headingFontClass: "font-serif tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "ETİK, GİZLİLİK ESASLI & BİLİMSEL YAKLAŞIM",
    ctaLabel: "Seans & Ön Değerlendirme Al",
    formTitle: "Seans & Değerlendirme Randevusu",
    testimonials: [
      {
        name: "Danışan Yorumu",
        role: "Bireysel Danışmanlık / Terapi",
        quote:
          "İlk seanstan itibaren yargılanmadığımı ve gerçekten anlaşıldığımı hissettiğim, çok huzurlu ve profesyonel bir ortam.",
      },
      {
        name: "Ebeveyn Geri Bildirimi",
        role: "Ergen & Aile Danışmanlığı",
        quote:
          "Sınav senesinde yaşadığımız yoğun kaygı sürecini bilimsel ve sakin yönlendirmelerle çok sağlıklı atlattık.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "İlk Değerlendirme Görüşmesi",
        detail: "İhtiyaçların, beklentilerin ve uygun terapi/rehabilitasyon ekolünün belirlenmesi.",
      },
      {
        num: "02",
        title: "Kişiye Özel Süreç Haritası",
        detail: "Haftalık seans sıklığı ve bilimsel protokollerin yapılandırılması.",
      },
      {
        num: "03",
        title: "Düzenli Takip & Kalıcı Kazanım",
        detail: "Yüz yüze veya online seanslarla sürdürülebilir iyilik halinin korunması.",
      },
    ],
  },
  beauty: {
    isDark: false,
    pageBg: "bg-[#FFFBFD]",
    surfaceBg: "bg-[#FDF2F7]",
    cardBg: "bg-white shadow-[0_14px_38px_-10px_rgba(131,24,67,0.07)]",
    textPrimary: "text-[#3B0A26]",
    textSecondary: "text-[#64324C]",
    textMuted: "text-[#8F657B]",
    borderSubtle: "border-[#F5D6E6]",
    primaryBtn: "bg-[#9D174D] hover:bg-[#831843] text-white shadow-sm",
    secondaryBtn: "bg-white hover:bg-[#FDF2F7] text-[#3B0A26] border border-[#EBC5D8]",
    accentColor: "text-[#9D174D]",
    accentBadge: "bg-[#FCE7F3] text-[#831843] border-[#FBCFE8]",
    headingFontClass: "font-serif tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "MEDİKAL ESTETİK & İLERİ CİLT PROTOKOLÜ",
    ctaLabel: "Ücretsiz Cilt Analizi & Randevu",
    formTitle: "Ücretsiz Ön Analiz & Kampanya Randevusu",
    testimonials: [
      {
        name: "Zeynep D.",
        role: "Hydrafacial & Buz Lazer Paketi",
        quote:
          "Çamlık'ta gittiğim en steril ve ilgili merkez. Cihazlar orijinal ve ilk seanstan itibaren cildimdeki farkı herkes sordu.",
      },
      {
        name: "Elif S.",
        role: "Bölgesel İncelme & Bakım",
        quote:
          "Randevu saatleri çok düzenli, işlem öncesi ücretsiz cilt analizi yapıp ihtiyacım olmayan hiçbir paketi önermediler.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Ücretsiz Dijital Cilt & Kıl Analizi",
        detail: "Cilt tipinize ve ihtiyacınıza en uygun cihaz protokolünün uzman tarafından seçilmesi.",
      },
      {
        num: "02",
        title: "FDA Onaylı Cihaz Uygulaması",
        detail: "Yüksek hijyen standartlarında, acısız ve konforlu seans deneyimi.",
      },
      {
        num: "03",
        title: "Seans Sonrası Kontrol & Bakım",
        detail: "Kalıcı sonuç için düzenli kontrol seansları ve ev devam ürünü rehberliği.",
      },
    ],
  },
  realestate: {
    isDark: false,
    pageBg: "bg-[#F7F6F2]",
    surfaceBg: "bg-[#EFECE6]",
    cardBg: "bg-white shadow-[0_14px_36px_-10px_rgba(15,118,110,0.07)]",
    textPrimary: "text-[#111827]",
    textSecondary: "text-[#374151]",
    textMuted: "text-[#6B7280]",
    borderSubtle: "border-[#E5E0D5]",
    primaryBtn: "bg-[#0F766E] hover:bg-[#115E59] text-white shadow-sm",
    secondaryBtn: "bg-white hover:bg-[#EFECE6] text-[#111827] border border-[#D1CBC0]",
    accentColor: "text-[#0F766E]",
    accentBadge: "bg-[#CCFBF1] text-[#115E59] border-[#99F6E4]",
    headingFontClass: "font-serif tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "GAYRİMENKUL YATIRIM & PORTFÖY YÖNETİMİ",
    ctaLabel: "Ücretsiz Ekspertiz & Portföy Al",
    formTitle: "Gayrimenkul Değerleme & Portföy Talebi",
    testimonials: [
      {
        name: "Murat B.",
        role: "Konut Satışı — Merkezefendi",
        quote:
          "Aylarca satılamayan dairemizi doğru ekspertiz fiyatı ve profesyonel çekimle 12 gün içinde sorunsuz tapuya taşıdılar.",
      },
      {
        name: "Serkan Ö.",
        role: "Arsa & Ticari Yatırım",
        quote:
          "Denizli'nin gelişim bölgelerine çok hakimler. Şeffaf pazarlık süreciyle alıcı ve satıcıyı yüz yüze getirdiler.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Ücretsiz Bölge & Emsal Ekspertizi",
        detail: "Mülkünüzün gerçekleşmiş tapu satış verilerine göre gerçek piyasa değerinin tespiti.",
      },
      {
        num: "02",
        title: "Profesyonel Çekim & Nitelikli Pazarlama",
        detail: "Hazır yatırımcı ağımız ve dijital portallarda hedef odaklı sunum.",
      },
      {
        num: "03",
        title: "Güvenli Sözleşme, Kredi & Tapu",
        detail: "Kapora, konut kredisi ve tapu devir işlemlerinin sıfır riskle tamamlanması.",
      },
    ],
  },
  auto: {
    isDark: true,
    pageBg: "bg-[#0B0C0E]",
    surfaceBg: "bg-[#121418]",
    cardBg: "bg-[#16191F] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]",
    textPrimary: "text-[#F8FAFC]",
    textSecondary: "text-[#CBD5E1]",
    textMuted: "text-[#94A3B8]",
    borderSubtle: "border-[#262A34]",
    primaryBtn: "bg-[#D97706] hover:bg-[#B45309] text-white shadow-sm",
    secondaryBtn: "bg-[#16191F] hover:bg-[#1E222A] text-white border border-[#333846]",
    accentColor: "text-[#F59E0B]",
    accentBadge: "bg-[#D97706]/15 text-[#FBBF24] border-[#D97706]/30",
    headingFontClass: "font-sans tracking-tight",
    heroImage:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    editorialKicker: "BOYA KORUMA MÜHENDİSLİĞİ & DETAY STÜDYOSU",
    ctaLabel: "Araç Ekspertiz & Fiyat Teklifi Al",
    formTitle: "Uygulama Fiyatı & Randevu Sorgulama",
    testimonials: [
      {
        name: "Emre K.",
        role: "Komple TPU PPF Şeffaf Kaplama",
        quote:
          "Sıfır aldığım aracımı bayiden çıkar çıkmaz teslim ettim. Köşe dönüş işçiliği ve parlaklık kusursuz, film olduğu bile belli olmuyor.",
      },
      {
        name: "Onur Ç.",
        role: "Polisaj & 9H Seramik Kaplama",
        quote:
          "Yıkama çizikleri tamamen gitmiş, ayna gibi teslim aldım. Su ve çamur tutmuyor, işçilik 10 numara.",
      },
    ],
    processSteps: [
      {
        num: "01",
        title: "Mikron Boya Ölçümü & Demir Tozu Temizliği",
        detail: "Yüzeydeki reçine ve endüstriyel kalıntıların kil ve kimyasal arındırma ile temizlenmesi.",
      },
      {
        num: "02",
        title: "Çok Aşamalı Hologramsız Polisaj",
        detail: "Kılcal çiziklerin vernik kalınlığını koruyarak optik berraklığa kavuşturulması.",
      },
      {
        num: "03",
        title: "Kürleşme & Dijital Garanti Sertifikası",
        detail: "Tozsuz kabinde TPU PPF / 9H Seramik uygulaması ve yazılı garanti belgesi teslimi.",
      },
    ],
  },
};

export default function ClientShowcase({ business }: { business: BusinessLead }) {
  const ds = DESIGN_SYSTEMS[business.sector] || DESIGN_SYSTEMS.dental;

  const [selectedService, setSelectedService] = useState(
    business.services[0]?.title || "Genel Bilgi & Randevu"
  );
  const [selectedTime, setSelectedTime] = useState("Bu Hafta İçi");
  const [visitorName, setVisitorName] = useState("");
  const [hideBanner, setHideBanner] = useState(false);

  // Interactive Sector Widget States (Before/After Slider & Calculators)
  const [sliderPos, setSliderPos] = useState(58);
  const [heightCm, setHeightCm] = useState(168);
  const [weightKg, setWeightKg] = useState(74);
  const [propSqm, setPropSqm] = useState(135);
  const [propType, setPropType] = useState("3+1 Daire");

  const bmiValue = (weightKg / Math.pow(heightCm / 100, 2)).toFixed(1);
  const idealWeight = Math.round(21.5 * Math.pow(heightCm / 100, 2));

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
    <div className={`min-h-screen ${ds.pageBg} ${ds.textPrimary} antialiased transition-colors`}>
      {/* Google Fonts Editorial Import (Playfair Display + Lora + Plus Jakarta Sans) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,400&family=Playfair+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-editorial-serif { font-family: 'Playfair Display', 'Lora', Georgia, serif; }
        .font-editorial-sans { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
      `}</style>

      {/* İşletme Sahibi İçin Üst Önizleme Bandı */}
      {!hideBanner && (
        <div className="bg-[#0F172A] text-slate-100 border-b border-slate-800 px-4 py-2.5 text-xs font-editorial-sans">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong className="font-semibold text-white">{business.shortName}</strong> için özel hazırlanan kurumsal web sitesi önizlemesi. Sitedeki tüm butonlar doğrudan{" "}
                <strong className="underline text-emerald-300">{business.phoneDisplay}</strong> hattınıza bağlıdır.
              </span>
            </div>
            <button
              onClick={() => setHideBanner(true)}
              className="cursor-pointer text-slate-300 hover:text-white text-[11px] px-2.5 py-1 rounded border border-slate-700 transition"
            >
              Bandı Gizle
            </button>
          </div>
        </div>
      )}

      {/* Üst Kurumsal Navigasyon */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md ${
          ds.isDark ? "bg-[#0B0C0E]/90" : "bg-white/90"
        } border-b ${ds.borderSubtle} font-editorial-sans`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0 ${ds.primaryBtn}`}
            >
              {business.shortName.charAt(0)}
            </div>
            <div className="truncate">
              <div className={`font-bold text-base sm:text-lg ${ds.textPrimary} truncate`}>
                {business.shortName}
              </div>
              <div className={`flex items-center gap-2 text-xs ${ds.textMuted} truncate`}>
                <span>{business.district}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 font-medium text-amber-500">
                  <Icons.Star className="w-3.5 h-3.5" />
                  <span>{business.rating}</span>
                </span>
                <span>({business.reviewCount}+ değerlendirme)</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#hizmetler" className={`${ds.textSecondary} hover:opacity-75 transition`}>
              Hizmetlerimiz
            </a>
            <a href="#surec" className={`${ds.textSecondary} hover:opacity-75 transition`}>
              Çalışma Süreci
            </a>
            <a href="#yorumlar" className={`${ds.textSecondary} hover:opacity-75 transition`}>
              Danışan Yorumları
            </a>
            <a href="#iletisim" className={`${ds.textSecondary} hover:opacity-75 transition`}>
              Konum & İletişim
            </a>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:+${business.phoneClean}`}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${ds.secondaryBtn}`}
            >
              <Icons.Phone className="w-3.5 h-3.5" />
              <span>{business.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${ds.primaryBtn}`}
            >
              <Icons.WhatsApp className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION — Editorial Asymmetric Grid */}
      <section className={`py-12 sm:py-20 border-b ${ds.borderSubtle} font-editorial-sans`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Sol Sütun: Kurumsal Tipografi & Değer Önerisi */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border ${ds.accentBadge}`}
              >
                {ds.editorialKicker}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${ds.borderSubtle} ${ds.cardBg}`}
              >
                <Icons.MapPin className={`w-3.5 h-3.5 ${ds.accentColor}`} />
                <span>{business.district}</span>
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-5xl font-bold leading-[1.12] ${
                ds.headingFontClass === "font-serif tracking-tight"
                  ? "font-editorial-serif"
                  : "font-editorial-sans"
              } ${ds.textPrimary}`}
            >
              {business.heroTagline}
            </h1>

            <p className={`text-base sm:text-lg ${ds.textSecondary} leading-relaxed max-w-2xl`}>
              {business.heroSubtitle}
            </p>

            {/* Kurumsal Güvence Rozetleri (SVG İkonlu) */}
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              {business.badges.map((badge, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border ${ds.borderSubtle} ${ds.cardBg}`}
                >
                  <span className={`p-1 rounded-md ${ds.accentBadge}`}>
                    <Icons.Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold">{badge}</span>
                </div>
              ))}
            </div>

            {/* Ana Aksiyon Butonları */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold transition cursor-pointer ${ds.primaryBtn}`}
              >
                <Icons.WhatsApp className="w-5 h-5" />
                <span>{ds.ctaLabel}</span>
              </a>
              <a
                href={`tel:+${business.phoneClean}`}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold transition cursor-pointer ${ds.secondaryBtn}`}
              >
                <Icons.Phone className="w-4 h-4" />
                <span>{business.phoneDisplay}</span>
              </a>
            </div>

            {/* Kurumsal Kimlik & Sosyal Kanıt Şeridi */}
            <div className={`pt-6 border-t ${ds.borderSubtle} grid grid-cols-3 gap-6`}>
              <div>
                <div className={`text-2xl font-bold ${ds.textPrimary}`}>
                  {business.rating} / 5.0
                </div>
                <div className={`text-xs ${ds.textMuted} mt-0.5`}>
                  Doğrulanmış Danışan Puanı
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${ds.textPrimary}`}>
                  {business.reviewCount}+
                </div>
                <div className={`text-xs ${ds.textMuted} mt-0.5`}>
                  Mutlu Müşteri & Danışan
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${ds.textPrimary}`}>Aynı Gün</div>
                <div className={`text-xs ${ds.textMuted} mt-0.5`}>
                  Hızlı Randevu & Dönüş
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Sütun: Görsel Kompozisyon + Online Randevu Kartı */}
          <div className="lg:col-span-5 space-y-5">
            {/* Editorial Fotoğraf Çerçevesi */}
            <div className={`relative rounded-2xl overflow-hidden border ${ds.borderSubtle} h-56 sm:h-64 shadow-md`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ds.heroImage}
                alt={business.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/80 font-medium">
                    {business.categoryLabel}
                  </div>
                  <div className="text-base font-bold">{business.shortName}</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Randevuya Açık
                </span>
              </div>
            </div>

            {/* Online Randevu & Ön Görüşme Kartı */}
            <div className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6`}>
              <div className={`flex items-center justify-between pb-3.5 mb-4 border-b ${ds.borderSubtle}`}>
                <div>
                  <h2 className="text-base font-bold">{ds.formTitle}</h2>
                  <p className={`text-xs ${ds.textMuted}`}>
                    Bilgilerinizi seçin, saniyeler içinde WhatsApp hattımıza bağlanın
                  </p>
                </div>
                <Icons.Clock className={`w-5 h-5 ${ds.accentColor}`} />
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className={`block text-xs font-semibold ${ds.textSecondary} mb-1.5`}>
                    Hizmet veya Tedavi Seçimi
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`w-full rounded-xl border ${ds.borderSubtle} ${
                      ds.isDark ? "bg-[#0B0C0E] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
                    } px-3.5 py-2.5 text-sm font-medium focus:outline-none`}
                  >
                    {business.services.map((s, idx) => (
                      <option key={idx} value={s.title}>
                        {s.title} — {s.highlight}
                      </option>
                    ))}
                    <option value="Genel Bilgi & Fiyat Talebi">
                      Genel Bilgi & Fiyat Talebi
                    </option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-semibold ${ds.textSecondary} mb-1.5`}>
                    Tercih Ettiğiniz Gün
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Bugün / Acil", "Yarın", "Bu Hafta İçi"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`cursor-pointer py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                          selectedTime === t
                            ? ds.accentBadge
                            : `${ds.borderSubtle} ${ds.textMuted} hover:opacity-80`
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold ${ds.textSecondary} mb-1.5`}>
                    Adınız Soyadınız (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Ahmet Yılmaz"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className={`w-full rounded-xl border ${ds.borderSubtle} ${
                      ds.isDark ? "bg-[#0B0C0E] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
                    } px-3.5 py-2.5 text-sm focus:outline-none`}
                  />
                </div>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition cursor-pointer ${ds.primaryBtn}`}
                >
                  <Icons.WhatsApp className="w-4 h-4" />
                  <span>WhatsApp ile Randevu Talebi Gönder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İNTERAKTİF SEKTÖREL MODÜL (Diyetisyen VKİ / Emlak Değerleme / Görsel Karşılaştırma) */}
      <section className={`py-14 ${ds.surfaceBg} border-b ${ds.borderSubtle} font-editorial-sans`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {business.sector === "diet" ? (
            <div className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center`}>
              <div className="md:col-span-6 space-y-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${ds.accentBadge}`}>
                  <Icons.Sliders className="w-3.5 h-3.5" />
                  <span>İnteraktif Vücut Analiz Aracı</span>
                </span>
                <h2 className="text-2xl font-bold font-editorial-serif">
                  İdeal Kilo & Vücut Kitle İndeksi (VKİ) Hesaplayıcı
                </h2>
                <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>
                  Boy ve kilo değerlerinizi kaydırarak ön analizinizi görün ve sonucu tek tıkla{" "}
                  <strong>{business.shortName}</strong> WhatsApp hattına göndererek kişisel beslenme planınızı başlatın.
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Boyunuz</span>
                      <span className={ds.accentColor}>{heightCm} cm</span>
                    </div>
                    <input
                      type="range"
                      min={145}
                      max={200}
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#15803D] cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Mevcut Kilonuz</span>
                      <span className={ds.accentColor}>{weightKg} kg</span>
                    </div>
                    <input
                      type="range"
                      min={45}
                      max={140}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#15803D] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className={`rounded-2xl p-6 border ${ds.borderSubtle} ${ds.pageBg} space-y-4`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-[#E3DFD5]">
                      <div className={`text-xs ${ds.textMuted}`}>VKİ Değeriniz</div>
                      <div className="text-2xl font-bold text-[#143326] mt-0.5">{bmiValue}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[#E3DFD5]">
                      <div className={`text-xs ${ds.textMuted}`}>Hedef İdeal Kilo</div>
                      <div className="text-2xl font-bold text-[#15803D] mt-0.5">~{idealWeight} kg</div>
                    </div>
                  </div>
                  <a
                    href={buildWhatsAppUrl(
                      `Merhaba ${business.shortName}, web sitenizdeki hesaplayıcıdan ulaşıyorum.\n• Boy: ${heightCm} cm\n• Mevcut Kilo: ${weightKg} kg (VKİ: ${bmiValue}, İdeal Hedef: ~${idealWeight} kg)\nYüz yüze / online diyet programlarınız hakkında bilgi alabilir miyim?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition cursor-pointer ${ds.primaryBtn}`}
                  >
                    <Icons.WhatsApp className="w-4 h-4" />
                    <span>Analiz Sonucumu WhatsApp&apos;tan Gönder</span>
                  </a>
                </div>
              </div>
            </div>
          ) : business.sector === "realestate" ? (
            <div className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center`}>
              <div className="md:col-span-7 space-y-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${ds.accentBadge}`}>
                  <Icons.Sliders className="w-3.5 h-3.5" />
                  <span>Ücretsiz Gayrimenkul Ekspertiz Modülü</span>
                </span>
                <h2 className="text-2xl font-bold font-editorial-serif">
                  Mülkünüzün Güncel Piyasa Değerini Öğrenin
                </h2>
                <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>
                  Denizli genelinde satmak veya kiraya vermek istediğiniz konut, arsa ya da ticari mülkün kriterlerini seçin; bölge emsal raporumuzu aynı gün ücretsiz paylaşalım.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Gayrimenkul Tipi</label>
                    <select
                      value={propType}
                      onChange={(e) => setPropType(e.target.value)}
                      className="w-full rounded-xl border border-[#D1CBC0] bg-[#F7F6F2] px-3.5 py-2.5 text-sm font-medium"
                    >
                      <option value="2+1 Daire">2+1 Daire</option>
                      <option value="3+1 Daire">3+1 Daire</option>
                      <option value="4+1 / Dublex / Villa">4+1 / Dublex / Villa</option>
                      <option value="İmarlı Arsa / Tarla">İmarlı Arsa / Tarla</option>
                      <option value="Ticari Dükkan / İş Yeri">Ticari Dükkan / İş Yeri</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Yaklaşık Brüt Alan</span>
                      <span className={ds.accentColor}>{propSqm} m²</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={500}
                      step={5}
                      value={propSqm}
                      onChange={(e) => setPropSqm(Number(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl p-6 bg-[#F7F6F2] border border-[#E5E0D5] space-y-4">
                  <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                    Ekspertiz Özeti
                  </div>
                  <div className="text-lg font-bold text-[#111827]">
                    {propType} • {propSqm} m² ({business.district})
                  </div>
                  <p className="text-xs text-[#374151]">
                    Güncel tapu satış emsalleriyle ücretsiz değerleme için talebinizi doğrudan iletin:
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      `Merhaba ${business.shortName}, Denizli'deki ${propSqm} m² ${propType} mülküm için ücretsiz piyasa değerlemesi (ekspertiz) ve satış/kiralama bilgisi almak istiyorum.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition cursor-pointer ${ds.primaryBtn}`}
                  >
                    <Icons.WhatsApp className="w-4 h-4" />
                    <span>Ücretsiz Ekspertiz Raporu İste</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* İnteraktif Öncesi / Sonrası & Kalite Karşılaştırma Slider'ı (Auto, Dental, Beauty, Therapy) */
            <div className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center`}>
              <div className="md:col-span-6 space-y-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${ds.accentBadge}`}>
                  <Icons.Shield className="w-3.5 h-3.5" />
                  <span>Uygulama Standartlarımız</span>
                </span>
                <h2 className="text-2xl font-bold">
                  {business.sector === "auto"
                    ? "Boya Koruma & Ayna Parlaklığı Karşılaştırması"
                    : "Detaylı Planlama ve Kusursuz Sonuç Odaklı Süreç"}
                </h2>
                <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>
                  {business.sector === "auto"
                    ? "Kaydırıcıyı sağa-sola hareket ettirerek matlaşmış/çizikli yüzey ile çok aşamalı polisaj + TPU PPF / 9H Seramik kaplama sonrası oluşan derin parlaklık farkını inceleyin."
                    : `${business.shortName} bünyesinde gerçekleştirilen tüm işlemler uluslararası hijyen, sertifikalı materyal ve birebir uzman kontrolü altında yürütülür.`}
                </p>
                <div className="pt-2">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Uygulama Öncesi / Sonrası Görünüm</span>
                    <span className={ds.accentColor}>%{sliderPos}</span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={85}
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                </div>
              </div>

              <div className="md:col-span-6">
                <div className={`relative rounded-2xl overflow-hidden h-56 sm:h-64 border ${ds.borderSubtle} select-none`}>
                  {/* Sonrası (Tam Parlak / Net) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ds.secondaryImage}
                    alt="Uygulama Sonrası"
                    className="w-full h-full object-cover"
                  />
                  {/* Öncesi (Sol Katman - Filtreli) */}
                  <div
                    style={{ width: `${sliderPos}%` }}
                    className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ds.secondaryImage}
                      alt="Uygulama Öncesi"
                      className="w-full h-full object-cover grayscale contrast-75 brightness-75"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-[11px] font-semibold">
                      Standart / İşlem Öncesi
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-emerald-600 text-white text-[11px] font-semibold">
                    {business.shortName} Uygulaması
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* HİZMETLERİMİZ BÖLÜMÜ */}
      <section id="hizmetler" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 font-editorial-sans">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className={`text-xs font-bold uppercase tracking-widest ${ds.accentColor}`}>
              Uzmanlık Alanlarımız
            </span>
            <h2
              className={`text-2xl sm:text-4xl font-bold mt-1.5 ${
                ds.headingFontClass === "font-serif tracking-tight"
                  ? "font-editorial-serif"
                  : "font-editorial-sans"
              }`}
            >
              {business.shortName} Hizmetleri
            </h2>
          </div>
          <p className={`text-sm ${ds.textMuted} max-w-md`}>
            İlgilendiğiniz hizmet kaleminin altındaki bağlantıya tıklayarak doğrudan fiyat ve müsaitlik sorgulayabilirsiniz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {business.services.map((srv, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 sm:p-7 flex flex-col justify-between transition hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-bold ${ds.textMuted}`}>
                    HİZMET 0{idx + 1}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${ds.accentBadge}`}
                  >
                    {srv.highlight}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5">
                  {srv.title}
                </h3>
                <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>
                  {srv.desc}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t ${ds.borderSubtle} flex items-center justify-between`}>
                <a
                  href={buildWhatsAppUrl(
                    `Merhaba ${business.shortName}, "${srv.title}" hizmetiniz hakkında detaylı bilgi ve randevu almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 ${ds.accentColor} hover:underline cursor-pointer`}
                >
                  <span>Fiyat & Randevu Sorgula</span>
                  <Icons.ArrowUpRight className="w-4 h-4" />
                </a>
                <span className={`text-xs ${ds.textMuted}`}>Hızlı Yanıt</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ÇALIŞMA SÜRECİ & DANIŞAN YORUMLARI */}
      <section id="surec" className={`py-16 ${ds.surfaceBg} border-t border-b ${ds.borderSubtle} font-editorial-sans`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* 3 Adımlı Süreç */}
          <div>
            <div className="mb-8">
              <span className={`text-xs font-bold uppercase tracking-widest ${ds.accentColor}`}>
                Nasıl Çalışıyoruz?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                3 Adımda Şeffaf ve Güvenilir Süreç
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ds.processSteps.map((st, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 space-y-2.5`}
                >
                  <div className={`text-xs font-bold uppercase tracking-widest ${ds.accentColor}`}>
                    ADIM {st.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">{st.title}</h3>
                  <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>{st.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Danışan / Müşteri Yorumları */}
          <div id="yorumlar">
            <div className="mb-8">
              <span className={`text-xs font-bold uppercase tracking-widest ${ds.accentColor}`}>
                Memnuniyet & Sosyal Kanıt
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                Danışan ve Müşteri Deneyimleri
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ds.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} p-6 space-y-4`}
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                    <Icons.Star />
                  </div>
                  <p className={`text-sm sm:text-base ${ds.textSecondary} italic leading-relaxed`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className={`pt-3 border-t ${ds.borderSubtle} flex items-center justify-between text-xs`}>
                    <strong className={ds.textPrimary}>{t.name}</strong>
                    <span className={ds.textMuted}>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONUM, HARİTA & İLETİŞİM */}
      <section id="iletisim" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 font-editorial-sans">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className={`text-xs font-bold uppercase tracking-widest ${ds.accentColor}`}>
              Konum & İletişim Bilgileri
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {business.shortName} İletişim
            </h2>
            <p className={`text-sm ${ds.textSecondary} leading-relaxed`}>
              Randevu planlamak, fiyat bilgisi almak veya harita üzerinden yol tarifi başlatmak için aşağıdaki kanallardan bize doğrudan ulaşabilirsiniz.
            </p>

            <div className="space-y-3 pt-1">
              <div className={`p-4 rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} flex items-start gap-3`}>
                <Icons.MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${ds.accentColor}`} />
                <div>
                  <div className={`text-xs font-medium ${ds.textMuted}`}>Açık Adres</div>
                  <div className="text-sm font-semibold mt-0.5">{business.address}</div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border ${ds.borderSubtle} ${ds.cardBg} flex items-center justify-between gap-3`}>
                <div className="flex items-center gap-3">
                  <Icons.Phone className={`w-5 h-5 shrink-0 ${ds.accentColor}`} />
                  <div>
                    <div className={`text-xs font-medium ${ds.textMuted}`}>Telefon & WhatsApp</div>
                    <div className="text-base font-bold mt-0.5">{business.phoneDisplay}</div>
                  </div>
                </div>
                <a
                  href={`tel:+${business.phoneClean}`}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${ds.primaryBtn}`}
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`rounded-2xl overflow-hidden border ${ds.borderSubtle} h-[340px] sm:h-[400px] shadow-md`}>
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

      {/* Kurumsal Alt Bilgi (Footer) */}
      <footer className={`py-8 border-t ${ds.borderSubtle} text-xs ${ds.textMuted} px-4 font-editorial-sans`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <strong className={ds.textPrimary}>{business.name}</strong>. Tüm hakları saklıdır.
          </div>
          <div>
            {business.district} • Tel: {business.phoneDisplay}
          </div>
        </div>
      </footer>

      {/* Sağ Alt Sabit WhatsApp Aksiyonu (SVG İkonlu) */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full font-editorial-sans font-bold text-xs sm:text-sm shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer ${ds.primaryBtn}`}
      >
        <Icons.WhatsApp className="w-4 h-4" />
        <span>WhatsApp Randevu Hattı</span>
      </a>
    </div>
  );
}
