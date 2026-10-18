"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import type { BusinessLead, SectorType } from "../businesses";

interface EditorialPalette {
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
  kicker: string;
  heroPhoto: string;
  galleryPhotos: { url: string; caption: string; tag: string }[];
  metrics: [string, string][];
  process: [string, string, string][];
  quotes: { text: string; author: string; detail: string }[];
}

const PALETTES: Record<SectorType, EditorialPalette> = {
  auto: {
    bg: "#090A0C",
    surface: "#101216",
    surfaceAlt: "#15181E",
    ink: "#F4F6F8",
    inkSecondary: "#B4BCC4",
    inkMuted: "#6E7781",
    line: "rgba(255, 255, 255, 0.09)",
    lineStrong: "rgba(255, 255, 255, 0.2)",
    accent: "#E5A93C",
    accentContrast: "#090A0C",
    accentSoft: "rgba(229, 169, 60, 0.12)",
    fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
    kicker: "STUDIO PROTECTION & DETAILING ENGINEERING",
    heroPhoto:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80",
        caption: "Tozsuz Kabinde %100 Poliüretan TPU PPF Uygulaması",
        tag: "01 / Yüzey Zırhlama",
      },
      {
        url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80",
        caption: "Çok Aşamalı Boya Düzeltme & 9H Kristal Seramik",
        tag: "02 / Optik Parlaklık",
      },
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
        caption: "Detaylı İç Kuaför, Deri Koruma ve Antibakteriyel Bakım",
        tag: "03 / Kabin Restorasyonu",
      },
    ],
    metrics: [
      ["190 Mikron", "Kendini Onaran (Self-Healing) TPU Film"],
      ["9H Sertlik", "Kimyasal & UV Dirençli Kristal Seramik"],
      ["Yazılı Garanti", "Sararma ve Kalkmaya Karşı Sertifikalı"],
      ["Aynı Gün", "Ücretsiz Mikron Boya Ölçümü & Ekspertiz"],
    ],
    process: [
      [
        "01",
        "Dekontaminasyon & Mikron Analizi",
        "Demir tozu, reçine ve yüzey kalıntıları pH nötr kimyasallarla arındırılır; her panelin vernik kalınlığı dijital olarak ölçülür.",
      ],
      [
        "02",
        "Hologramsız Optik Polisaj",
        "Kılcal yıkama çizikleri ve matlaşmış katmanlar çok aşamalı pasta-cila protokolüyle ayna netliğine kavuşturulur.",
      ],
      [
        "03",
        "Kürleşme & Garanti Teslimatı",
        "Kapalı stüdyo ortamında PPF veya seramik kaplama uygulanır, kızılötesi kürleşme sonrası garanti belgesiyle teslim edilir.",
      ],
    ],
    quotes: [
      {
        text: "Sıfır kilometre aldığım aracımı bayiden çıkar çıkmaz teslim ettim. Kaput ve çamurluk köşe dönüşlerinde film olduğu dışarıdan kesinlikle anlaşılmıyor.",
        author: "Emre K.",
        detail: "Komple TPU PPF Kaplama",
      },
      {
        text: "Yıkama çiziklerinden matlaşmış siyah aracım ilk günkü derinliğine kavuştu. İşçilik ve teslimat disiplini gerçekten üst düzey.",
        author: "Onur Ç.",
        detail: "Polisaj & 9H Seramik Kaplama",
      },
    ],
  },

  dental: {
    bg: "#F6F7F9",
    surface: "#FFFFFF",
    surfaceAlt: "#EEF1F5",
    ink: "#0C1524",
    inkSecondary: "#3B495E",
    inkMuted: "#6C7A8E",
    line: "rgba(12, 21, 36, 0.09)",
    lineStrong: "rgba(12, 21, 36, 0.18)",
    accent: "#0B6BCB",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(11, 107, 203, 0.08)",
    fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
    kicker: "DİJİTAL DİŞ HEKİMLİĞİ & AĞIZ SAĞLIĞI MERKEZİ",
    heroPhoto:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
        caption: "3 Boyutlu Dijital Gülüş Tasarımı & CAD/CAM Ölçü",
        tag: "01 / Dijital Protokol",
      },
      {
        url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
        caption: "Sertifikalı İmplant Cerrahisi & Zirkonyum Restorasyon",
        tag: "02 / Estetik & Fonksiyon",
      },
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
        caption: "Uluslararası Otoklav Sterilizasyon & Konforlu Klinik",
        tag: "03 / Steril Altyapı",
      },
    ],
    metrics: [
      ["3D CAD/CAM", "Dijital Ağız İçi Tarama & Hassas Ölçü"],
      ["%100 Steril", "Uluslararası Otoklav & Hijyen Protokolü"],
      ["Sertifikalı", "Ömür Boyu Garantili İmplant Sistemleri"],
      ["Aynı Gün", "Hızlı Muayene & Şeffaf Tedavi Planı"],
    ],
    process: [
      [
        "01",
        "Panoramik Görüntüleme & Muayene",
        "İlk randevuda dijital röntgen ve ağız içi kamera ile mevcut durum detaylıca incelenir, alternatif tedavi yolları anlatılır.",
      ],
      [
        "02",
        "Dijital Ölçü & Prova Süreci",
        "Yüz hatlarınıza en uygun diş formu dijital ortamda tasarlanır; işlem sonunda nasıl bir gülüşe kavuşacağınız önceden planlanır.",
      ],
      [
        "03",
        "Ağrısız Tedavi & Periyodik Kontrol",
        "Modern lokal anestezi altında konforlu uygulama tamamlanır ve düzenli kontrol randevularıyla uzun ömürlü kullanım güvenceye alınır.",
      ],
    ],
    quotes: [
      {
        text: "Dişçi koltuğu korkumu tamamen yenmemi sağladılar. Zirkonyum kaplamalarım o kadar doğal oldu ki kimse işlem yapıldığını anlamıyor.",
        author: "Merve K.",
        detail: "Zirkonyum & Gülüş Tasarımı",
      },
      {
        text: "İmplant sürecim beklediğimden çok daha rahat ve ağrısız geçti. Randevu saatlerine gösterilen özen ve klinik temizliği kusursuz.",
        author: "Hakan T.",
        detail: "Dental İmplant Tedavisi",
      },
    ],
  },

  diet: {
    bg: "#F8F6F1",
    surface: "#FFFFFF",
    surfaceAlt: "#EFECE4",
    ink: "#162A1F",
    inkSecondary: "#3F5448",
    inkMuted: "#6E8075",
    line: "rgba(22, 42, 31, 0.09)",
    lineStrong: "rgba(22, 42, 31, 0.18)",
    accent: "#1F6E43",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(31, 110, 67, 0.09)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    kicker: "KLİNİK BESLENME & SÜRDÜRÜLEBİLİR KİLO YÖNETİMİ",
    heroPhoto:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        caption: "Kan Tahlili ve Metabolizma Hızına Özel Beslenme Planı",
        tag: "01 / Kişisel Planlama",
      },
      {
        url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        caption: "Profesyonel Segmental Yağ, Kas ve Ödem Analizi",
        tag: "02 / Klinik Ölçüm",
      },
      {
        url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        caption: "Yüz Yüze Görüşme ve WhatsApp Üzerinden Günlük Öğün Takibi",
        tag: "03 / Aktif Motivasyon",
      },
    ],
    metrics: [
      ["InBody Analiz", "Bölgesel Yağ, Kas & Bazal Metabolizma Ölçümü"],
      ["Yasaksız Liste", "Sosyal Hayata Uyumlu Sürdürülebilir Beslenme"],
      ["Birebir Takip", "WhatsApp Üzerinden Günlük Öğün Kontrolü"],
      ["Yüz Yüze & Online", "Kliniğimizde veya Uzaktan Esnek Program"],
    ],
    process: [
      [
        "01",
        "Vücut Kompozisyonu & Kan Tahlili İncelemesi",
        "İlk görüşmede profesyonel cihazla yağ-kas oranınız ölçülür, güncel kan değerleriniz ve beslenme alışkanlıklarınız analiz edilir.",
      ],
      [
        "02",
        "Size Özel Beslenme Programı",
        "Hazır şablon listeler yerine çalışma saatlerinize, sevdiğiniz tatlara ve metabolik ihtiyacınıza uygun haftalık liste hazırlanır.",
      ],
      [
        "03",
        "Haftalık Tartım & Kilo Koruma Eğitimi",
        "Her hafta yapılan ölçümlerle liste güncellenir; hedef kiloya ulaşıldığında kalıcı koruma programı uygulanır.",
      ],
    ],
    quotes: [
      {
        text: "Aç kalmadan ve sevdiğim yemeklerden mahrum olmadan 3 ayda 12 kilo verdim. Her hafta yapılan yağ-kas analizleri motivasyonumu çok yüksek tuttu.",
        author: "Selin A.",
        detail: "Yüz Yüze Beslenme Danışanı",
      },
      {
        text: "İnsülin direncim nedeniyle yıllardır veremediğim kiloları doğru beslenme planlaması ve günlük WhatsApp takibi sayesinde sağlıklı şekilde geride bıraktım.",
        author: "Burak Y.",
        detail: "Klinik & Online Diyet",
      },
    ],
  },

  therapy: {
    bg: "#F9F7F3",
    surface: "#FFFFFF",
    surfaceAlt: "#F0ECE3",
    ink: "#1E1D24",
    inkSecondary: "#494754",
    inkMuted: "#787585",
    line: "rgba(30, 29, 36, 0.09)",
    lineStrong: "rgba(30, 29, 36, 0.18)",
    accent: "#3E387E",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(62, 56, 126, 0.08)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    kicker: "BİLİMSEL DANIŞMANLIK, TERAPİ & REHABİLİTASYON",
    heroPhoto:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
        caption: "Birebir Uzman Değerlendirmesi ve Kişiye Özel Seans Planı",
        tag: "01 / Bireysel Yaklaşım",
      },
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
        caption: "Kanıta Dayalı Uygulamalar ve Sakin, Güvenli Merkez Ortamı",
        tag: "02 / Bilimsel Protokol",
      },
      {
        url: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=900&q=80",
        caption: "Yüz Yüze ve Online Seans Seçenekleriyle Düzenli Takip",
        tag: "03 / Süreklilik",
      },
    ],
    metrics: [
      ["%100 Gizlilik", "Mesleki Etik İlkeler & Güvenli Danışan Alanı"],
      ["Uzman Kadro", "Akademik ve Klinik Deneyimli Uygulayıcılar"],
      ["50 Dk Birebir", "Tamamen Size Ayrılmış Yapılandırılmış Seans"],
      ["Esnek Takvim", "Yüz Yüze ve Online Randevu Alternatifleri"],
    ],
    process: [
      [
        "01",
        "Ön Değerlendirme & İhtiyaç Analizi",
        "İlk seansta yaşadığınız süreç, beklentileriniz ve hedefleriniz detaylıca dinlenerek size en uygun bilimsel yöntem belirlenir.",
      ],
      [
        "02",
        "Yapılandırılmış Seans Süreci",
        "Belirlenen hedefler doğrultusunda haftalık veya ihtiyaca göre planlanan birebir seanslarla kalıcı gelişim desteklenir.",
      ],
      [
        "03",
        "Süreç Takibi & Kazanımların Korunması",
        "Düzenli değerlendirmelerle ilerleme izlenir ve günlük yaşam kalitenizi artıracak pratik araçlar kazandırılır.",
      ],
    ],
    quotes: [
      {
        text: "Merkeze adım attığınız andan itibaren huzurlu, sakin ve son derece profesyonel bir yaklaşımla karşılaşıyorsunuz. Süreç boyunca kendimi çok güvende hissettim.",
        author: "Danışan Geri Bildirimi",
        detail: "Bireysel Seans Programı",
      },
      {
        text: "Bilimsel açıklamaları, güler yüzlü iletişimi ve randevu disipliniyle Denizli'de gönül rahatlığıyla tavsiye edebileceğim tek adres.",
        author: "Danışan Yorumu",
        detail: "Uzman Danışmanlık",
      },
    ],
  },

  beauty: {
    bg: "#FCF9F8",
    surface: "#FFFFFF",
    surfaceAlt: "#F5ECE8",
    ink: "#26171E",
    inkSecondary: "#59434D",
    inkMuted: "#8C737E",
    line: "rgba(38, 23, 30, 0.09)",
    lineStrong: "rgba(38, 23, 30, 0.18)",
    accent: "#8E2A52",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(142, 42, 82, 0.08)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    kicker: "MEDİKAL ESTETİK, CİLT BAKIMI & LAZER TEKNOLOJİLERİ",
    heroPhoto:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
        caption: "Hydrafacial & Profesyonel Anti-Aging Cilt Protokolleri",
        tag: "01 / Cilt Yenileme",
      },
      {
        url: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=900&q=80",
        caption: "Son Nesil Buz Başlıklı Lazer & Bölgesel İncelme Sistemleri",
        tag: "02 / İleri Cihaz Parkuru",
      },
      {
        url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
        caption: "Steril VIP Kabinler ve Ücretsiz Dijital Cilt Analizi",
        tag: "03 / Butik Konfor",
      },
    ],
    metrics: [
      ["FDA Onaylı", "Orijinal ve Yeni Nesil Cihaz Teknolojisi"],
      ["Ücretsiz Analiz", "İşlem Öncesi Dijital Cilt & Kıl Köku Tespiti"],
      ["VIP Kabinler", "Tek Kullanımlık Hijyenik Uygulama Alanları"],
      ["Garantili Paket", "Şeffaf Seans Planlaması & Kampanyalı Fiyat"],
    ],
    process: [
      [
        "01",
        "Ücretsiz Cilt & Uygunluk Analizi",
        "Uzman estetisyenlerimiz tarafından cilt ve kıl yapınız incelenir; ihtiyacınız olmayan hiçbir işlem önerilmeden en doğru protokol seçilir.",
      ],
      [
        "02",
        "Kişiye Özel Seans Uygulaması",
        "Steril özel odalarda, soğutmalı ve acısız son teknoloji cihazlarla konforlu seansınız gerçekleştirilir.",
      ],
      [
        "03",
        "Kontrol Seansı & Bakım Takibi",
        "Uygulama sonrası gelişim takip edilir ve kalıcı etki için kontrol seanslarınız düzenli olarak planlanır.",
      ],
    ],
    quotes: [
      {
        text: "Denizli'de gittiğim en temiz ve düzenli merkez. İlk ücretsiz cilt analizinden itibaren çok ilgiliydiler, ilk seansta bile cildimdeki ışıltı fark edildi.",
        author: "Zeynep D.",
        detail: "Hydrafacial & Lazer Epilasyon",
      },
      {
        text: "Randevu saatlerinde hiç bekletilmiyorsunuz, cihazlar son teknoloji ve personel işini gerçekten severek yapıyor.",
        author: "Elif S.",
        detail: "Bölgesel İncelme & Bakım",
      },
    ],
  },

  realestate: {
    bg: "#F6F5F0",
    surface: "#FFFFFF",
    surfaceAlt: "#ECE9E0",
    ink: "#14181D",
    inkSecondary: "#3E4650",
    inkMuted: "#6F7882",
    line: "rgba(20, 24, 29, 0.09)",
    lineStrong: "rgba(20, 24, 29, 0.18)",
    accent: "#125B50",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(18, 91, 80, 0.08)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    kicker: "GAYRİMENKUL YATIRIM, PORTFÖY & EKSPERTİZ YÖNETİMİ",
    heroPhoto:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
        caption: "Merkezefendi & Pamukkale Seçkin Konut ve Villa Portföyü",
        tag: "01 / Nitelikli Konut",
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
        caption: "Yüksek Kira Getirili Ticari Mağaza & Arsa Yatırımları",
        tag: "02 / Ticari & Arsa",
      },
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
        caption: "Ücretsiz Piyasa Değerlemesi ve Güvenli Tapu/Kredi Süreci",
        tag: "03 / Şeffaf Ekspertiz",
      },
    ],
    metrics: [
      ["Ücretsiz Ekspertiz", "Güncel Tapu Emsalleriyle Doğru Fiyatlandırma"],
      ["4K Çekim & Sunum", "Profesyonel Fotoğraf, Drone ve Dijital İlan"],
      ["Doğrudan Pazarlık", "Alıcı ve Satıcıyı Şeffaf Masada Buluşturma"],
      ["Tam Güvence", "Kredi, Sözleşme ve Tapu Devir Takibi"],
    ],
    process: [
      [
        "01",
        "Ücretsiz Yerinde Değerleme (Ekspertiz)",
        "Satmak veya kiralamak istediğiniz mülkü yerinde inceliyor, bölgedeki gerçek satış rakamlarına göre en doğru piyasa değerini raporluyoruz.",
      ],
      [
        "02",
        "Profesyonel Görsel Prodüksiyon & Pazarlama",
        "Mülkünüzü profesyonel çekimlerle hem hazır yatırımcı portföyümüze hem de tüm ulusal ilan portallarına vitrin ilanı olarak sunuyoruz.",
      ],
      [
        "03",
        "Şeffaf Pazarlık & Sorunsuz Tapu Devri",
        "Nitelikli alıcılarla güvenli sözleşme, banka kredi süreci ve tapu randevusunu baştan sona sizin adınıza yönetiyoruz.",
      ],
    ],
    quotes: [
      {
        text: "Aylarca bekleyen dairemizi doğru ekspertiz fiyatı ve profesyonel tanıtımla 2 hafta içinde gerçek değerinden tapuya taşıdılar.",
        author: "Murat B.",
        detail: "Konut Satışı — Merkezefendi",
      },
      {
        text: "Denizli'nin prim yapan bölgelerine çok hakimler. Alıcı ve satıcıyı şeffaf şekilde bir araya getirip tüm tapu sürecini sorunsuz çözdüler.",
        author: "Serkan Ö.",
        detail: "Arsa & Yatırım Danışmanlığı",
      },
    ],
  },
};

export default function ClientShowcase({ business }: { business: BusinessLead }) {
  const p = PALETTES[business.sector] || PALETTES.dental;

  const [selectedService, setSelectedService] = useState(
    business.services[0]?.title || "Genel Bilgi & Randevu"
  );
  const [selectedDay, setSelectedDay] = useState("Bu Hafta İçi");
  const [clientName, setClientName] = useState("");
  const [hidePreviewBar, setHidePreviewBar] = useState(false);

  const buildWaLink = (customMsg?: string) => {
    const msg =
      customMsg ||
      `Merhaba ${business.shortName}, web siteniz üzerinden ulaşıyorum.\n\n` +
        `• Hizmet / Konu: ${selectedService}\n` +
        `• Tercih Edilen Zaman: ${selectedDay}\n` +
        (clientName.trim() ? `• Ad Soyad: ${clientName.trim()}\n\n` : "\n") +
        `Müsaitlik ve detaylar hakkında bilgi alabilir miyim?`;
    return `https://wa.me/${business.phoneClean}?text=${encodeURIComponent(msg)}`;
  };

  const mapQuery = encodeURIComponent(`${business.name} ${business.address}`);

  return (
    <div
      style={{
        backgroundColor: p.bg,
        color: p.ink,
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      className="min-h-screen antialiased selection:bg-black selection:text-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .vitrin-shell {
          width: min(calc(100% - 40px), 1200px);
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .vitrin-shell {
            width: calc(100% - 28px);
          }
        }
      `}</style>

      {/* İŞLETME SAHİBİ İÇİN İNCE ÜST ÖNİZLEME BANDI */}
      {!hidePreviewBar && (
        <div
          style={{
            backgroundColor: "#0C1117",
            color: "#E2E8F0",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
          className="px-4 py-2.5 text-xs"
        >
          <div className="vitrin-shell flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span
                style={{ backgroundColor: "#10B981" }}
                className="inline-block w-2 h-2 rounded-full"
              />
              <span>
                <strong className="text-white">{business.shortName}</strong> için hazırlanan özel web sitesi önizlemesi — Tüm randevu ve arama butonları doğrudan{" "}
                <strong className="text-emerald-300 underline">{business.phoneDisplay}</strong> hattınıza bağlıdır.
              </span>
            </div>
            <button
              onClick={() => setHidePreviewBar(true)}
              className="cursor-pointer text-[11px] text-slate-400 hover:text-white px-2.5 py-0.5 rounded border border-slate-700"
            >
              Önizleme Çubuğunu Kapat
            </button>
          </div>
        </div>
      )}

      {/* MİMARİ ÜST NAVİGASYON (altancelik.dev / Studio Standardı) */}
      <header
        style={{
          borderBottom: `1px solid ${p.line}`,
          backgroundColor: p.bg,
        }}
        className="sticky top-0 z-40 backdrop-blur-md bg-opacity-90"
      >
        <div className="vitrin-shell h-20 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3.5 min-w-0">
            <span
              style={{
                border: `1px solid ${p.lineStrong}`,
                backgroundColor: p.surface,
                color: p.ink,
                fontFamily: "'JetBrains Mono', monospace",
              }}
              className="w-10 h-10 rounded-xl grid place-items-center text-xs font-semibold shrink-0"
            >
              {business.shortName.slice(0, 2).toUpperCase()}
            </span>
            <div className="truncate">
              <div className="font-bold text-base sm:text-lg tracking-tight truncate">
                {business.shortName}
              </div>
              <div
                style={{ color: p.inkMuted }}
                className="text-[11px] tracking-wide truncate"
              >
                {business.district} · Google {business.rating} / 5.0 ({business.reviewCount}+ Yorum)
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#hizmetler"
              style={{ color: p.inkSecondary }}
              className="hover:opacity-70 transition"
            >
              Hizmetler
            </a>
            <a
              href="#galeri"
              style={{ color: p.inkSecondary }}
              className="hover:opacity-70 transition"
            >
              Stüdyo & Yaklaşım
            </a>
            <a
              href="#surec"
              style={{ color: p.inkSecondary }}
              className="hover:opacity-70 transition"
            >
              Süreç
            </a>
            <a
              href="#iletisim"
              style={{ color: p.inkSecondary }}
              className="hover:opacity-70 transition"
            >
              İletişim & Harita
            </a>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:+${business.phoneClean}`}
              style={{
                border: `1px solid ${p.lineStrong}`,
                backgroundColor: p.surface,
                color: p.ink,
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold hover:opacity-80 transition"
            >
              <span>{business.phoneDisplay}</span>
            </a>
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: p.accent,
                color: p.accentContrast,
              }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition"
            >
              <span>Randevu & Bilgi Al</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* EDITORIAL HERO SECTION */}
      <main id="top">
        <section
          style={{ borderBottom: `1px solid ${p.line}` }}
          className="pt-12 pb-16 sm:pt-20 sm:pb-24"
        >
          <div className="vitrin-shell">
            {/* Üst Kicker Etiketi */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span
                style={{
                  border: `1px solid ${p.lineStrong}`,
                  backgroundColor: p.surface,
                  color: p.inkSecondary,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-widest"
              >
                <span
                  style={{ backgroundColor: p.accent }}
                  className="w-2 h-2 rounded-full"
                />
                {p.kicker}
              </span>
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-wider"
              >
                {business.district}
              </span>
            </div>

            {/* Devasa Editorial Başlık */}
            <h1
              style={{
                fontFamily: p.fontDisplay,
                letterSpacing: "-0.035em",
                lineHeight: 1.03,
              }}
              className="text-4xl sm:text-6xl lg:text-[68px] font-semibold max-w-4xl"
            >
              {business.heroTagline}
            </h1>

            {/* Alt Açıklama ve Aksiyon Satırı */}
            <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-8 items-end">
              <p
                style={{ color: p.inkSecondary }}
                className="lg:col-span-7 text-base sm:text-xl leading-relaxed m-0"
              >
                {business.heroSubtitle}
              </p>

              <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: p.accent,
                    color: p.accentContrast,
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold hover:opacity-90 transition"
                >
                  <span>WhatsApp&apos;tan Randevu Oluştur</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`tel:+${business.phoneClean}`}
                  style={{
                    border: `1px solid ${p.lineStrong}`,
                    backgroundColor: p.surface,
                    color: p.ink,
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold hover:opacity-80 transition"
                >
                  <span>Hemen Ara · {business.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Geniş Sinematik Hero Görseli */}
            <div
              style={{ border: `1px solid ${p.line}` }}
              className="mt-12 rounded-2xl overflow-hidden relative aspect-[16/9] sm:aspect-[21/9]"
            >
              <img
                src={p.heroPhoto}
                alt={business.name}
                className="w-full h-full object-cover"
              />
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.72) 100%)",
                }}
                className="absolute inset-0"
              />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8 sm:right-8 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <div
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-[11px] uppercase tracking-widest text-white/75"
                  >
                    {business.categoryLabel}
                  </div>
                  <div className="text-lg sm:text-2xl font-semibold mt-0.5">
                    {business.name}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {business.badges.map((b, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-black/55 backdrop-blur-md border border-white/20 text-xs font-medium text-white"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mimari 4'lü Standart Şeridi (Hairline Grid) */}
            <div
              style={{
                border: `1px solid ${p.line}`,
                backgroundColor: p.surface,
              }}
              className="mt-6 rounded-2xl grid sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
            >
              {p.metrics.map(([val, label], idx) => (
                <div
                  key={idx}
                  style={{
                    borderRight: idx < 3 ? `1px solid ${p.line}` : "none",
                    borderBottom: `1px solid ${p.line}`,
                  }}
                  className="p-6"
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: p.inkMuted,
                    }}
                    className="text-[11px] uppercase tracking-widest"
                  >
                    0{idx + 1} / STANDART
                  </div>
                  <div
                    style={{ color: p.ink }}
                    className="text-xl font-bold mt-2 tracking-tight"
                  >
                    {val}
                  </div>
                  <div
                    style={{ color: p.inkSecondary }}
                    className="text-xs mt-1 leading-relaxed"
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HİZMETLERİMİZ — MİMARİ İNDEKS TABLOSU (No Cheap SaaS Boxes) */}
        <section
          id="hizmetler"
          style={{ borderBottom: `1px solid ${p.line}` }}
          className="py-20 sm:py-28"
        >
          <div className="vitrin-shell">
            <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
              <div className="lg:col-span-8">
                <span
                  style={{
                    color: p.inkMuted,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                  className="text-xs uppercase tracking-widest block mb-3"
                >
                  01 / UZMANLIK & HİZMETLERİMİZ
                </span>
                <h2
                  style={{
                    fontFamily: p.fontDisplay,
                    letterSpacing: "-0.03em",
                  }}
                  className="text-3xl sm:text-5xl font-semibold m-0"
                >
                  {business.shortName} Uygulama Alanları
                </h2>
              </div>
              <p
                style={{ color: p.inkSecondary }}
                className="lg:col-span-4 text-sm sm:text-base leading-relaxed m-0"
              >
                Detaylı bilgi veya randevu almak istediğiniz hizmet satırına tıklayarak doğrudan uzman ekibimize ulaşabilirsiniz.
              </p>
            </div>

            {/* İndeks Satırları */}
            <div style={{ borderTop: `1px solid ${p.lineStrong}` }}>
              {business.services.map((srv, idx) => (
                <a
                  key={idx}
                  href={buildWaLink(
                    `Merhaba ${business.shortName}, "${srv.title}" hizmetiniz hakkında detaylı bilgi ve randevu almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderBottom: `1px solid ${p.line}` }}
                  className="group py-7 sm:py-9 grid md:grid-cols-12 gap-4 items-center transition hover:opacity-85"
                >
                  <div
                    style={{
                      color: p.inkMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                    className="md:col-span-1 text-xs"
                  >
                    0{idx + 1}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight m-0">
                      {srv.title}
                    </h3>
                  </div>
                  <div
                    style={{ color: p.inkSecondary }}
                    className="md:col-span-5 text-sm sm:text-base leading-relaxed"
                  >
                    {srv.desc}
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                    <span
                      style={{
                        border: `1px solid ${p.lineStrong}`,
                        backgroundColor: p.surface,
                        color: p.inkSecondary,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                      className="px-3 py-1 rounded-lg text-[11px]"
                    >
                      {srv.highlight}
                    </span>
                    <span
                      style={{
                        border: `1px solid ${p.lineStrong}`,
                        color: p.ink,
                      }}
                      className="w-9 h-9 rounded-full grid place-items-center text-sm shrink-0"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* GÖRSEL STÜDYO & KLİNİK GALERİSİ (3'lü Editorial Grid) */}
        <section
          id="galeri"
          style={{ borderBottom: `1px solid ${p.line}` }}
          className="py-20 sm:py-28"
        >
          <div className="vitrin-shell">
            <div className="mb-12">
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-widest block mb-3"
              >
                02 / KALİTE & DETAY YAKLAŞIMIMIZ
              </span>
              <h2
                style={{
                  fontFamily: p.fontDisplay,
                  letterSpacing: "-0.03em",
                }}
                className="text-3xl sm:text-5xl font-semibold m-0"
              >
                Her Aşamada Şeffaf ve Belgeli Uygulama
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {p.galleryPhotos.map((item, idx) => (
                <article
                  key={idx}
                  style={{
                    border: `1px solid ${p.line}`,
                    backgroundColor: p.surface,
                  }}
                  className="rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      style={{
                        color: p.inkMuted,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                      className="text-[11px] uppercase tracking-widest block mb-2"
                    >
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug m-0">
                      {item.caption}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ÇALIŞMA SÜRECİ & DANIŞAN DENEYİMLERİ */}
        <section
          id="surec"
          style={{
            borderBottom: `1px solid ${p.line}`,
            backgroundColor: p.surfaceAlt,
          }}
          className="py-20 sm:py-28"
        >
          <div className="vitrin-shell space-y-20">
            {/* 3 Adımlı Mimari Grid */}
            <div>
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-widest block mb-3"
              >
                03 / ÇALIŞMA PROTOKOLÜ
              </span>
              <h2
                style={{
                  fontFamily: p.fontDisplay,
                  letterSpacing: "-0.03em",
                }}
                className="text-3xl sm:text-5xl font-semibold mb-10"
              >
                İlk Görüşmeden Teslime 3 Adım
              </h2>

              <div
                style={{
                  border: `1px solid ${p.line}`,
                  backgroundColor: p.surface,
                }}
                className="rounded-2xl grid md:grid-cols-3 overflow-hidden"
              >
                {p.process.map(([num, title, desc], idx) => (
                  <article
                    key={idx}
                    style={{
                      borderRight: idx < 2 ? `1px solid ${p.line}` : "none",
                      borderBottom: `1px solid ${p.line}`,
                    }}
                    className="p-7 sm:p-9 flex flex-col justify-between min-h-[240px]"
                  >
                    <span
                      style={{
                        color: p.inkMuted,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                      className="text-xs"
                    >
                      ADIM {num}
                    </span>
                    <div className="mt-10">
                      <h3 className="text-xl font-semibold tracking-tight mb-3">
                        {title}
                      </h3>
                      <p
                        style={{ color: p.inkSecondary }}
                        className="text-sm leading-relaxed m-0"
                      >
                        {desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Müşteri / Danışan Deneyimleri */}
            <div>
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-widest block mb-3"
              >
                04 / REFERANS & MEMNUNİYET
              </span>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {p.quotes.map((q, idx) => (
                  <blockquote
                    key={idx}
                    style={{
                      border: `1px solid ${p.line}`,
                      backgroundColor: p.surface,
                    }}
                    className="rounded-2xl p-7 sm:p-9 m-0 flex flex-col justify-between gap-6"
                  >
                    <p
                      style={{
                        fontFamily: p.fontDisplay,
                        color: p.ink,
                      }}
                      className="text-lg sm:text-2xl leading-relaxed m-0"
                    >
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <footer
                      style={{ borderTop: `1px solid ${p.line}` }}
                      className="pt-4 flex items-center justify-between text-xs"
                    >
                      <strong className="font-semibold">{q.author}</strong>
                      <span
                        style={{
                          color: p.inkMuted,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {q.detail}
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RANDEVU, HARİTA & İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim" className="py-20 sm:py-28">
          <div className="vitrin-shell grid lg:grid-cols-12 gap-12 items-start">
            {/* Sol: Hızlı Randevu & İletişim Bilgileri */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span
                  style={{
                    color: p.inkMuted,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                  className="text-xs uppercase tracking-widest block mb-3"
                >
                  05 / RANDEVU & İLETİŞİM
                </span>
                <h2
                  style={{
                    fontFamily: p.fontDisplay,
                    letterSpacing: "-0.03em",
                  }}
                  className="text-3xl sm:text-4xl font-semibold m-0"
                >
                  Hızlı Randevu Oluşturun
                </h2>
                <p
                  style={{ color: p.inkSecondary }}
                  className="text-sm sm:text-base mt-3 leading-relaxed"
                >
                  Hizmeti seçip doğrudan <strong>{business.shortName}</strong> WhatsApp hattına mesaj gönderebilir veya telefonla arayabilirsiniz.
                </p>
              </div>

              {/* Sade, Şık Randevu Formu */}
              <div
                style={{
                  border: `1px solid ${p.lineStrong}`,
                  backgroundColor: p.surface,
                }}
                className="rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label
                    style={{
                      color: p.inkMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                    className="block text-[11px] uppercase tracking-wider mb-2"
                  >
                    Hizmet Seçimi
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    style={{
                      border: `1px solid ${p.lineStrong}`,
                      backgroundColor: p.bg,
                      color: p.ink,
                    }}
                    className="w-full rounded-xl px-3.5 py-3 text-sm font-medium focus:outline-none"
                  >
                    {business.services.map((s, idx) => (
                      <option key={idx} value={s.title}>
                        {s.title} ({s.highlight})
                      </option>
                    ))}
                    <option value="Genel Bilgi & Randevu">
                      Genel Bilgi & Fiyat Talebi
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      color: p.inkMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                    className="block text-[11px] uppercase tracking-wider mb-2"
                  >
                    Tercih Edilen Gün
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Bugün", "Yarın", "Bu Hafta İçi"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDay(d)}
                        style={{
                          border: `1px solid ${
                            selectedDay === d ? p.accent : p.line
                          }`,
                          backgroundColor:
                            selectedDay === d ? p.accentSoft : p.bg,
                          color: p.ink,
                        }}
                        className="cursor-pointer py-2.5 px-2 rounded-xl text-xs font-semibold transition"
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      color: p.inkMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                    className="block text-[11px] uppercase tracking-wider mb-2"
                  >
                    Adınız Soyadınız (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    style={{
                      border: `1px solid ${p.lineStrong}`,
                      backgroundColor: p.bg,
                      color: p.ink,
                    }}
                    className="w-full rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: p.accent,
                    color: p.accentContrast,
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm hover:opacity-90 transition"
                >
                  <span>WhatsApp ile Gönder</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Adres ve Telefon Satırları */}
              <div style={{ borderTop: `1px solid ${p.line}` }} className="pt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${p.line}` }}>
                  <span style={{ color: p.inkMuted, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs uppercase">
                    Telefon
                  </span>
                  <a href={`tel:+${business.phoneClean}`} className="font-semibold hover:underline">
                    {business.phoneDisplay}
                  </a>
                </div>
                <div className="flex justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${p.line}` }}>
                  <span style={{ color: p.inkMuted, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs uppercase shrink-0">
                    Adres
                  </span>
                  <span className="text-right font-medium">{business.address}</span>
                </div>
              </div>
            </div>

            {/* Sağ: Canlı Google Haritası */}
            <div className="lg:col-span-7">
              <div
                style={{ border: `1px solid ${p.lineStrong}` }}
                className="rounded-2xl overflow-hidden h-[420px] sm:h-[520px]"
              >
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
      </main>

      {/* MİMARİ ALT BİLGİ (Footer) */}
      <footer
        style={{
          borderTop: `1px solid ${p.line}`,
          color: p.inkMuted,
          fontFamily: "'JetBrains Mono', monospace",
        }}
        className="py-10 text-[11px] uppercase tracking-wider"
      >
        <div className="vitrin-shell flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {business.name}</span>
          <span>{business.district}</span>
          <span>İLETİŞİM: {business.phoneDisplay}</span>
        </div>
      </footer>
    </div>
  );
}
