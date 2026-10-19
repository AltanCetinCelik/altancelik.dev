"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import type { BusinessLead, SectorType } from "../businesses";
import SectorInteractiveLab from "./SectorInteractiveLab";

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
  faqs: [string, string][];
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
      ["Sertifikalı", "Kayıtlı ve Belgeli Film Uygulaması"],
      ["Aynı Gün", "Dijital Mikron Boya Ölçümü & Analiz"],
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
        "Kürleşme & Kayıtlı Teslimat",
        "Kapalı stüdyo ortamında PPF veya seramik kaplama uygulanır, kızılötesi kürleşme sonrası uygulama sertifikasıyla teslim edilir.",
      ],
    ],
    quotes: [
      {
        text: "Her araç stüdyomuza kabul edildiğinde çok noktalı aydınlatma altında dijital vernik kalınlık ölçümü yapılır; uygulanacak film veya seramik protokolü araç sahibine şeffaf biçimde raporlanır.",
        author: "Şeffaf Ekspertiz & Teslimat Standardı",
        detail: "01 / Stüdyo Protokolü",
      },
      {
        text: "Kaput, çamurluk ve tampon dönüşlerinde bıçaksız kesim ve tozsuz kapalı kabin disiplini uygulanır; her işlem sonunda bakım kılavuzu ve uygulama kaydı teslim edilir.",
        author: "İzlenebilir Uygulama Disiplini",
        detail: "02 / Kalite Standardı",
      },
    ],
    faqs: [
      [
        "TPU PPF kaplama sökülürken aracın orijinal boyasına zarar verir mi?",
        "Hayır. Kullandığımız %100 poliüretan (TPU) filmler boya dostu akrilik yapışkan katmana sahiptir. Doğru ekipmanla söküldüğünde orijinal fabrika verniğine zarar vermez ve iz bırakmaz.",
      ],
      [
        "Uygulama ne kadar sürüyor, aracı ne zaman teslim alabilirim?",
        "Seramik kaplama ve polisaj işlemleri ortalama 1–2 iş günü, komple TPU PPF zırhlama ise köşe dönüşleri ve kürleşme süreciyle birlikte 2–3 iş günü içinde teslim edilir.",
      ],
      [
        "Ekspertizde PPF kaplama sorun yaratır mı?",
        "Hayır. Şeffaf TPU PPF kaplama mikron ölçüm cihazlarında boya koruma filmi olarak net biçimde görülür ve aracınızın orijinal boyasını koruduğunu gösterir.",
      ],
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
      ["Steril Klinik", "Uluslararası Otoklav & Hijyen Protokolü"],
      ["Sertifikalı", "Biyouyumlu Titanyum İmplant Sistemleri"],
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
        "Konforlu Tedavi & Periyodik Kontrol",
        "Modern lokal anestezi altında konforlu uygulama tamamlanır ve düzenli kontrol randevularıyla ağız sağlığınız takip edilir.",
      ],
    ],
    quotes: [
      {
        text: "Kliniğimizde tüm cerrahi ve protetik işlemler öncesinde dijital görüntüleme ile yazılı tedavi planı oluşturulur; kullanılacak tüm materyallerin barkod ve sertifika bilgileri şeffaf biçimde paylaşılır.",
        author: "Şeffaf Tedavi Planlaması",
        detail: "01 / Klinik İlkemiz",
      },
      {
        text: "Her hasta sonrasında tüm ünit ve el aletleri B sınıfı otoklav protokolleriyle sterilize edilir; randevu saatleri hastalarımızın beklemeden birebir hizmet alacağı şekilde planlanır.",
        author: "Sterilizasyon & Randevu Disiplini",
        detail: "02 / Hijyen Standardı",
      },
    ],
    faqs: [
      [
        "İmplant ve zirkonyum işlemlerinde süreç nasıl ilerliyor?",
        "Uygulamalarımız modern lokal anestezi altında hasta konforu ön planda tutularak gerçekleştirilir. Tedavi sonrasında da konforunuz için gerekli tüm medikal protokoller adım adım planlanır.",
      ],
      [
        "Zirkonyum gülüş tasarımı kaç günde tamamlanır?",
        "Dijital ağız içi tarama ve prova süreçleriyle birlikte ortalama 4 ila 5 gün içerisinde yeni restorasyonlarınız prova edilerek tamamlanır.",
      ],
      [
        "İlk muayenede tedavi planı netleşiyor mu?",
        "Evet. İlk muayenede dijital görüntüleme sonrası ihtiyaç duyulan tüm işlemler şeffaf biçimde listelenir ve net tedavi takvimi sunulur.",
      ],
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
        text: "Beslenme planlarımızda tek tip hazır listeler kullanılmaz; kan biyokimyanız, çalışma saatleriniz ve mutfak alışkanlıklarınıza göre her hafta yenilenen sürdürülebilir bir model uygulanır.",
        author: "Kişiye Özel Bilimsel Planlama",
        detail: "01 / Beslenme İlkemiz",
      },
      {
        text: "Sadece tartıdaki rakama değil; kas kütlesinin korunmasına, ödem dengesine ve sağlıklı beslenme alışkanlığının kalıcı hale gelmesine odaklanan birebir takip yürütülür.",
        author: "Bütüncül Metabolik Takip",
        detail: "02 / Klinik Yaklaşım",
      },
    ],
    faqs: [
      [
        "İlk görüşmeye gelirken kan tahlili getirmem gerekiyor mu?",
        "Son 6 ay içinde yapılmış kan tahlilleriniz varsa yanınızda getirebilirsiniz. Yoksa ilk görüşmemizde vücut analizinizi yapıp ihtiyaç duyulan parametreleri birlikte belirleyebiliriz.",
      ],
      [
        "Diyet listelerinde bulunması zor veya pahalı ürünler var mı?",
        "Hayır. Listelerimiz tamamen evinizde pişen yemeklere, bütçenize ve çalışma saatlerinize uygun, sürdürülebilir besinlerden oluşturulur.",
      ],
      [
        "Yoğun çalışıyorum, online diyet takibi nasıl işliyor?",
        "Kliniğe gelemediğiniz haftalarda görüntülü veya sesli görüşme ile listeleriniz yenilenir ve WhatsApp üzerinden günlük öğün fotoğraflarıyla birebir motivasyon takibi yapılır.",
      ],
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
    kicker: "BİLİMSEL DANIŞMANLIK & PSİKOTERAPİ MERKEZİ",
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
      ["Etik Gizlilik", "Mesleki Etik İlkeler & Güvenli Danışan Alanı"],
      ["Uzman Yaklaşım", "Bilimsel Ekoller ve Yapılandırılmış Süreç"],
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
        text: "Merkezimizde gerçekleştirilen tüm bireysel, çift ve çocuk-ergen görüşmeleri Türk Psikologlar Derneği etik yönetmeliği ve tam mahremiyet ilkeleri çerçevesinde yürütülür.",
        author: "Etik Gizlilik & Mahremiyet İlkemiz",
        detail: "01 / Mesleki Etik",
      },
      {
        text: "Danışmanlık süreçlerimizde bilimsel geçerliliği kanıtlanmış çağdaş terapi ekolleri uygulanır; her seans diğer danışanlarla karşılaşmayacağınız şekilde özel zaman aralığıyla planlanır.",
        author: "Bilimsel Ekol & Güvenli Alan",
        detail: "02 / Klinik Standart",
      },
    ],
    faqs: [
      [
        "Seans içerikleri ve kişisel bilgilerim gizli tutuluyor mu?",
        "Evet. Tüm görüşmelerimiz mesleki etik ilkeler ve KVKK kapsamında gizlilik prensibi altında gerçekleştirilir.",
      ],
      [
        "Seans süresi ne kadardır ve hangi sıklıkla planlanır?",
        "Birebir seanslarımız ortalama 50 dakika sürmektedir. İlk değerlendirme seansı sonrasında ihtiyacınıza göre haftalık veya iki haftada bir olacak şekilde planlanır.",
      ],
      [
        "İlk randevu öncesinde kısa bilgi alabilir miyim?",
        "Elbette. WhatsApp veya telefon hattımız üzerinden bize ulaşarak süreç, uzmanlık alanlarımız ve müsait seans saatlerimiz hakkında hemen bilgi alabilirsiniz.",
      ],
    ],
  },

  physio: {
    bg: "#F6F7F4",
    surface: "#FFFFFF",
    surfaceAlt: "#EBECE6",
    ink: "#16201B",
    inkSecondary: "#3F4E46",
    inkMuted: "#6C7B73",
    line: "rgba(22, 32, 27, 0.09)",
    lineStrong: "rgba(22, 32, 27, 0.18)",
    accent: "#215A46",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(33, 90, 70, 0.08)",
    fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
    kicker: "FİZYOTERAPİ, MANUEL TERAPİ & KLİNİK REFORMER PİLATES",
    heroPhoto:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
        caption: "Birebir Postür Analizi, Manuel Terapi ve Omurga Mobilizasyonu",
        tag: "01 / Klinik Değerlendirme",
      },
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
        caption: "Uzman Eşliğinde Birebir ve Düet Aletli Reformer Pilates",
        tag: "02 / Reformer & Cadillac",
      },
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
        caption: "Kişiye Özel Fonksiyonel Egzersiz ve Duruş Rehabilitasyonu",
        tag: "03 / Sağlıklı Hareket",
      },
    ],
    metrics: [
      ["Postür Analizi", "Detaylı Omurga, Kas & Eklem Değerlendirmesi"],
      ["Birebir Seans", "Uzman Eşliğinde Kişiye Özel Uygulama"],
      ["Reformer & FDM", "Modern Ekipmanlı Ferah Stüdyo Ortamı"],
      ["Esnek Saatler", "Çalışma Temponuza Uygun Randevu Planı"],
    ],
    process: [
      [
        "01",
        "Fiziksel Değerlendirme & Postür Analizi",
        "İlk görüşmede duruş (postür), hareket açıklığı ve kas dengeniz incelenerek ihtiyacınıza en uygun program oluşturulur.",
      ],
      [
        "02",
        "Birebir Manuel Uygulama & Reformer",
        "Belirlenen programa göre manuel terapi veya aletli Reformer Pilates seansları uzman gözetiminde birebir uygulanır.",
      ],
      [
        "03",
        "Kas Güçlendirme & Günlük Ergonomi",
        "Kazanılan hareket konforunun kalıcı olması için omurga çevresi kaslar güçlendirilir ve günlük yaşam egzersizleri paylaşılır.",
      ],
    ],
    quotes: [
      {
        text: "Merkezimizde her danışan için seans öncesinde postür ve hareket açıklığı değerlendirmesi yapılır; tüm egzersiz ve manuel uygulamalar omurga biyomekaniğine uygun olarak birebir takip edilir.",
        author: "Biyomekanik Değerlendirme & Birebir Takip",
        detail: "01 / Uygulama İlkemiz",
      },
      {
        text: "Kullanılan tüm Reformer/Cadillac ekipmanları ve uygulama alanları her seans sonrasında dezenfekte edilir; seans içerikleri danışanımızın günlük yaşam ergonomisini destekleyecek şekilde planlanır.",
        author: "Hijyenik Stüdyo & Sürdürülebilir Hareket",
        detail: "02 / Merkez Standardı",
      },
    ],
    faqs: [
      [
        "Daha önce hiç Reformer Pilates yapmadım, başlangıç için uygun mu?",
        "Evet. Tüm derslerimiz öncesinde vücut ve duruş analizi yapılır; egzersiz dirençleri ve hareket seviyesi tamamen sizin fiziksel kondisyonuza göre ayarlanır.",
      ],
      [
        "Seanslar kaç dakika sürüyor ve haftada kaç gün öneriliyor?",
        "Seanslarımız ortalama 50 dakika sürmektedir. Hedefinize ve ihtiyacınıza göre haftada 2 veya 3 seanslık periyotlarla düzenli takip önerilir.",
      ],
      [
        "Tanışma dersi veya ön değerlendirme için nasıl randevu alabilirim?",
        "WhatsApp butonuna tıklayarak veya telefon hattımızdan bize ulaşarak müsait gün ve saatler için hemen randevu oluşturabilirsiniz.",
      ],
    ],
  },

  vet: {
    bg: "#F5F8F7",
    surface: "#FFFFFF",
    surfaceAlt: "#E8F0ED",
    ink: "#102420",
    inkSecondary: "#38524C",
    inkMuted: "#65807A",
    line: "rgba(16, 36, 32, 0.09)",
    lineStrong: "rgba(16, 36, 32, 0.18)",
    accent: "#0E6B58",
    accentContrast: "#FFFFFF",
    accentSoft: "rgba(14, 107, 88, 0.08)",
    fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
    kicker: "MODERN VETERİNER KLİNİĞİ, TEŞHİS LABORATUVARI & PET BAKIM",
    heroPhoto:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=85",
    galleryPhotos: [
      {
        url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
        caption: "Dijital Röntgen, Ultrason ve Hızlı Kan Analiz Laboratuvarı",
        tag: "01 / Hızlı Teşhis",
      },
      {
        url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
        caption: "Kedi ve Köpekler İçin Periyodik Aşı, Mikroçip ve Parazit Takibi",
        tag: "02 / Koruyucu Hekimlik",
      },
      {
        url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80",
        caption: "Steril Cerrahi Ünitesi, Yoğun Bakım ve Stressiz Pet Kuaför",
        tag: "03 / Cerrahi & Bakım",
      },
    ],
    metrics: [
      ["Dijital Lab", "Hemogram, Biyokimya, Röntgen & Ultrason"],
      ["Aşı Takvimi", "Düzenli SMS Hatırlatmalı Koruyucu Hekimlik"],
      ["Steril Cerrahi", "Gaz Anestezisi & Hasta Başı Monitörizasyon"],
      ["Şefkatli Yaklaşım", "Can Dostlarınız İçin Stressiz Muayene Ortamı"],
    ],
    process: [
      [
        "01",
        "Kapsamlı Fiziksel Muayene & Kayıt",
        "Sevimli dostunuzun genel sağlık durumu, kilosu, ateş ve kalp-akciğer bulguları incelenerek dijital hasta kartı oluşturulur.",
      ],
      [
        "02",
        "Laboratuvar & Görüntüleme Destekli Tanı",
        "İhtiyaç halinde kliniğimiz bünyesindeki kan analiz cihazları, röntgen ve ultrason ile dakikalar içinde net teşhis konulur.",
      ],
      [
        "03",
        "Tedavi, Aşı Takibi & Bakım Planı",
        "Koruyucu aşıları ve tedavisi tamamlanır; bir sonraki kontrol tarihi sistemimiz üzerinden size düzenli olarak hatırlatılır.",
      ],
    ],
    quotes: [
      {
        text: "Kliniğimizde tüm cerrahi müdahaleler öncesinde hemogram ve biyokimya kontrolleri yapılır; operasyonlar güvenli gaz anestezisi ve hasta başı monitörizasyon eşliğinde gerçekleştirilir.",
        author: "Güvenli Cerrahi & Laboratuvar Protokolü",
        detail: "01 / Hekimlik İlkemiz",
      },
      {
        text: "Kedi ve köpek dostlarımızın muayene sırasında strese girmemesi için sakin klinik yaklaşımı uygulanır; tüm aşı ve parazit takvimleri dijital kayıt sistemiyle düzenli olarak takip edilir.",
        author: "Kedi/Köpek Dostu Muayene & Dijital Takip",
        detail: "02 / Klinik Standardı",
      },
    ],
    faqs: [
      [
        "Aşı takvimi ve iç-dış parazit zamanlarını nasıl takip ediyorsunuz?",
        "Kliniğimizde kayıtlı tüm can dostlarımızın aşı ve parazit günleri dijital sistemimizde tutulur ve günü geldiğinde telefonunuza hatırlatma bilgisi gönderilir.",
      ],
      [
        "Kısırlaştırma ve cerrahi işlemlerde hangi anestezi yöntemi kullanılıyor?",
        "Operasyonlarımızda riski en aza indiren modern gaz anestezisi ve hasta başı yaşam monitörü kullanılmakta, işlem öncesi kan tahlili ile uygunluk kontrol edilmektedir.",
      ],
      [
        "Pet kuaför ve tıraş işlemleri için randevu almamız gerekiyor mu?",
        "Evet. Dostunuzun bekleyerek strese girmemesi için makas/makine tıraşı ve bakım işlemlerimizi randevulu olarak gerçekleştiriyoruz.",
      ],
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
        caption: "Steril VIP Kabinler ve Dijital Cilt Analizi",
        tag: "03 / Butik Konfor",
      },
    ],
    metrics: [
      ["Yeni Nesil", "Orijinal ve Güncel Cihaz Teknolojisi"],
      ["Cilt Analizi", "İşlem Öncesi Dijital Cilt & Kıl Tipi Tespiti"],
      ["VIP Kabinler", "Tek Kullanımlık Hijyenik Uygulama Alanları"],
      ["Kişisel Paket", "Şeffaf Seans Planlaması & Avantajlı Paketler"],
    ],
    process: [
      [
        "01",
        "Cilt & Uygunluk Analizi",
        "Uzman estetisyenlerimiz tarafından cilt ve kıl yapınız incelenir; ihtiyacınıza en uygun bakım veya cihaz protokolü belirlenir.",
      ],
      [
        "02",
        "Kişiye Özel Seans Uygulaması",
        "Steril özel odalarda, soğutmalı son teknoloji cihazlarla konforlu seansınız gerçekleştirilir.",
      ],
      [
        "03",
        "Kontrol Seansı & Bakım Takibi",
        "Uygulama sonrası gelişim takip edilir ve düzenli kontrol seanslarınız planlanır.",
      ],
    ],
    quotes: [
      {
        text: "Merkezimizde her uygulama öncesinde cilt bariyeri ve kıl kökü yapısı analiz edilir; kullanılan tüm dermokozmetik ürünler ve cihaz başlıkları danışanımıza şeffaf biçimde tanıtılır.",
        author: "Dijital Ön Analiz & Şeffaf Protokol",
        detail: "01 / Merkez İlkemiz",
      },
      {
        text: "Uygulama kabinlerimizde her danışan için tek kullanımlık sarf malzemeleri tercih edilir ve tüm cihaz başlıkları seans aralarında medikal dezenfeksiyon işleminden geçirilir.",
        author: "VIP Kabin & Hijyen Standardı",
        detail: "02 / Kalite Standardı",
      },
    ],
    faqs: [
      [
        "İşlem öncesinde cilt ve uygunluk analizi yapıyor musunuz?",
        "Evet. Merkezimizde tüm işlemler öncesinde uzmanlarımız tarafından cilt ve kıl tipi analizi yapılır, size en uygun cihaz ve seans protokolü belirlenir.",
      ],
      [
        "Lazer epilasyon dört mevsim uygulanabilir mi?",
        "Yeni nesil buz başlıklı soğutma teknolojimiz sayesinde bronzlaşmamış ciltlerde yaz-kış güvenli ve konforlu biçimde seanslara devam edilebilir.",
      ],
      [
        "Kabinlerde hijyen nasıl sağlanıyor?",
        "Her danışanımız için tek kullanımlık örtü ve sarf malzemeleri kullanılır; tüm cihaz başlıkları her seans sonrasında dezenfekte edilir.",
      ],
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
    kicker: "GAYRİMENKUL YATIRIM, PORTFÖY & DEĞERLEME YÖNETİMİ",
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
        caption: "Emsal Piyasa Değerlemesi ve Güvenli Tapu/Kredi Süreci",
        tag: "03 / Şeffaf Değerleme",
      },
    ],
    metrics: [
      ["Emsal Analizi", "Güncel Tapu Emsalleriyle Doğru Fiyatlandırma"],
      ["4K Çekim & Sunum", "Profesyonel Fotoğraf, Drone ve Dijital İlan"],
      ["Doğrudan Pazarlık", "Alıcı ve Satıcıyı Şeffaf Masada Buluşturma"],
      ["Süreç Takibi", "Kredi, Sözleşme ve Tapu Devir Yönetimi"],
    ],
    process: [
      [
        "01",
        "Yerinde İnceleme & Emsal Değerleme",
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
        text: "Portföyümüze alınan tüm konut, ticari mülk ve arsalar için güncel mahalle tapu emsalleri incelenir; hem mülk sahibini hem alıcıyı koruyan şeffaf fiyatlandırma politikası uygulanır.",
        author: "Gerçekçi Emsal & Şeffaf Pazarlık İlkemiz",
        detail: "01 / Kurumsal İlkemiz",
      },
      {
        text: "Kapora sözleşmesinden eksper sürecine, WebTapu başvurusundan güvenli banka transferine kadar tüm resmi işlemler kurumsal danışmanlarımız eşliğinde kayıt altında yürütülür.",
        author: "Hukuki Güvenlik & Tapu Süreç Yönetimi",
        detail: "02 / Hizmet Standardı",
      },
    ],
    faqs: [
      [
        "Mülkümün piyasa değerini nasıl belirliyorsunuz?",
        "Denizli genelindeki konut, ticari mülk ve arsalarınız için mahalle bazlı güncel tapu satış emsallerini ve yerinde inceleme kriterlerini baz alarak gerçekçi fiyat analizi sunuyoruz.",
      ],
      [
        "Mülkümü ne kadar sürede satabilir veya kiralayabilirsiniz?",
        "Doğru piyasa fiyatlandırması, 4K profesyonel çekim ve hazır yatırımcı portföyümüz sayesinde mülkler ortalama 15 ila 45 gün içinde gerçek değerinden sonuçlandırılır.",
      ],
      [
        "Tapu devri ve konut kredisi işlemlerini siz mi takip ediyorsunuz?",
        "Evet. Alıcı-satıcı sözleşmesinden banka ekspertizine, WebTapu başvurusundan güvenli para transferine kadar tüm resmi süreci yanınızda yönetiyoruz.",
      ],
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                {business.district} · {business.categoryLabel}
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

        {/* SEKTÖRE ÖZEL İNTERAKTİF LABORATUVAR / SİMÜLATÖR (3dviz-pro-max & ui-ux-pro-max) */}
        <SectorInteractiveLab
          business={business}
          palette={p}
          buildWaLink={buildWaLink}
        />

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

        {/* ÇALIŞMA SÜRECİ, DANIŞAN DENEYİMLERİ & SIKÇA SORULAN SORULAR */}
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

            {/* Kurumsal İlkelerimiz & Kalite Standartlarımız */}
            <div>
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-widest block mb-3"
              >
                04 / KURUMSAL İLKELERİMİZ & STANDARTLARIMIZ
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
                      className="text-lg sm:text-xl leading-relaxed m-0"
                    >
                      {q.text}
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

            {/* Sıkça Sorulan Sorular (İnteraktif Akordeon) */}
            <div>
              <span
                style={{
                  color: p.inkMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                className="text-xs uppercase tracking-widest block mb-3"
              >
                05 / SIKÇA SORULAN SORULAR
              </span>
              <h3
                style={{
                  fontFamily: p.fontDisplay,
                  letterSpacing: "-0.025em",
                }}
                className="text-2xl sm:text-4xl font-semibold mb-8"
              >
                Merak Edilen Detaylar
              </h3>
              <div
                style={{
                  border: `1px solid ${p.lineStrong}`,
                  backgroundColor: p.surface,
                }}
                className="rounded-2xl overflow-hidden"
              >
                {p.faqs.map(([question, answer], idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        borderBottom:
                          idx < p.faqs.length - 1 ? `1px solid ${p.line}` : "none",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="cursor-pointer w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:opacity-85 transition"
                      >
                        <span className="font-semibold text-sm sm:text-base">
                          {question}
                        </span>
                        <span
                          style={{
                            border: `1px solid ${p.lineStrong}`,
                            color: p.ink,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                          className="w-7 h-7 rounded-full grid place-items-center text-xs shrink-0"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          style={{ color: p.inkSecondary }}
                          className="px-6 pb-6 text-sm leading-relaxed"
                        >
                          {answer}
                        </div>
                      )}
                    </div>
                  );
                })}
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
                  06 / RANDEVU & İLETİŞİM
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

              {/* Adres, Çalışma Saatleri ve Telefon Satırları */}
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
                  <span style={{ color: p.inkMuted, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs uppercase">
                    Çalışma Düzeni
                  </span>
                  <span className="font-medium">Pazartesi – Cumartesi · Randevulu Hizmet</span>
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
            <div className="lg:col-span-7 space-y-3">
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
              <div className="flex items-center justify-between text-xs px-1">
                <span style={{ color: p.inkMuted }}>{business.address}</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: p.ink }}
                  className="font-semibold underline"
                >
                  Google Haritalar&apos;da Yol Tarifi Al ↗
                </a>
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
        className="py-10 pb-24 sm:pb-10 text-[11px] uppercase tracking-wider"
      >
        <div className="vitrin-shell flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {business.name}</span>
          <span>{business.district}</span>
          <span>İLETİŞİM: {business.phoneDisplay}</span>
        </div>
      </footer>

      {/* MOBİL SABİT ALT DÖNÜŞÜM ÇUBUĞU (Telefon Ekranında Tek Parmakla Arama / WhatsApp) */}
      <div
        style={{
          backgroundColor: p.surface,
          borderTop: `1px solid ${p.lineStrong}`,
        }}
        className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 grid grid-cols-2 gap-2.5 shadow-2xl"
      >
        <a
          href={`tel:+${business.phoneClean}`}
          style={{
            border: `1px solid ${p.lineStrong}`,
            backgroundColor: p.bg,
            color: p.ink,
          }}
          className="py-3 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center"
        >
          Hemen Ara
        </a>
        <a
          href={buildWaLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: p.accent,
            color: p.accentContrast,
          }}
          className="py-3 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1"
        >
          <span>WhatsApp Randevu</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
