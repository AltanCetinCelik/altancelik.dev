export type SectorType =
  | "auto"
  | "dental"
  | "diet"
  | "therapy"
  | "beauty"
  | "realestate";

export interface BusinessLead {
  slug: string;
  name: string;
  shortName: string;
  sector: SectorType;
  categoryLabel: string;
  phoneDisplay: string;
  phoneClean: string; // 905xxxxxxxxx for wa.me
  address: string;
  district: string;
  instagram?: string;
  rating: string;
  reviewCount: number;
  heroTagline: string;
  heroSubtitle: string;
  badges: string[];
  services: {
    title: string;
    desc: string;
    highlight: string;
  }[];
}

export const DENIZLI_BUSINESSES: BusinessLead[] = [
  {
    slug: "not-garage-denizli",
    name: "Not Garage Denizli — PPF & Seramik Kaplama",
    shortName: "Not Garage Denizli",
    sector: "auto",
    categoryLabel: "Premium Araç Koruma & Detailing Stüdyosu",
    phoneDisplay: "0546 625 55 01",
    phoneClean: "905466255501",
    address: "Yunusemre Mah. 6430 Sok. No:13/A, Pamukkale / Denizli",
    district: "Pamukkale / Denizli",
    rating: "4.9",
    reviewCount: 84,
    heroTagline: "Aracınız İçin Kusursuz Zırh ve Ayna Parlaklığı",
    heroSubtitle:
      "Denizli Pamukkale'de %100 poliüretan TPU PPF şeffaf kaplama, 9H seramik kaplama, detaylı iç kuaför ve boya düzeltme merkezi.",
    badges: ["Garantili TPU PPF", "9H Seramik Kaplama", "VIP Detailing"],
    services: [
      {
        title: "TPU Şeffaf Boya Koruma (PPF)",
        desc: "Taş izi, sürtme ve güneş yanıklarına karşı kendini onaran (self-healing) %100 TPU film uygulaması.",
        highlight: "5–10 Yıl Garantili",
      },
      {
        title: "9H / 10H Kristal Seramik Kaplama",
        desc: "Çok aşamalı polisaj (pasta-cila) sonrası su itici hidrofobik zırh ve derin ayna parlaklığı.",
        highlight: "Yüksek Hidrofobi",
      },
      {
        title: "VIP Detaylı İç Temizlik & Ozon",
        desc: "Koltuk, tavan, torpido ve deri aksamların antibakteriyel buharlı temizliği ve deri koruma bakımı.",
        highlight: "İlk Günki Kokusuyla",
      },
      {
        title: "Cam Filmi & Kaliper/Far Uygulamaları",
        desc: "UV blokajlı seramik cam filmi, far parlatma ve PPF far koruma uygulamaları.",
        highlight: "Aynı Gün Teslim",
      },
    ],
  },
  {
    slug: "oident-dis-poliklinigi",
    name: "Oident Ağız ve Diş Sağlığı Polikliniği",
    shortName: "Oident Diş Polikliniği",
    sector: "dental",
    categoryLabel: "Ağız ve Diş Sağlığı Polikliniği",
    phoneDisplay: "0533 733 96 20",
    phoneClean: "905337339620",
    address: "Yenişafak Mah. 1055 Sok. No:3/A, Merkezefendi / Denizli",
    district: "Merkezefendi / Denizli",
    instagram: "@oident20",
    rating: "4.9",
    reviewCount: 142,
    heroTagline: "Dijital Diş Hekimliği ile Özgüvenli Gülüşler",
    heroSubtitle:
      "Merkezefendi'de uzman hekim kadromuz ve steril klinik altyapımızla implant, zirkonyum gülüş tasarımı, kanal tedavisi ve çocuk diş hekimliği.",
    badges: ["Dijital Gülüş Tasarımı", "Ağrısız İmplant", "Aynı Gün Randevu"],
    services: [
      {
        title: "İmplant & Çene Cerrahisi",
        desc: "Eksik dişleriniz için 3D tomografi destekli, sertifikalı ve ömür boyu garantili dental implant uygulamaları.",
        highlight: "Sertifikalı İmplant",
      },
      {
        title: "Zirkonyum & Hollywood Smile",
        desc: "Yüz hatlarınıza özel dijital ölçü ile doğal ışık geçirgenliğine sahip zirkonyum ve emax lamine kaplamalar.",
        highlight: "Dijital Tasarım",
      },
      {
        title: "Lazerle Diş Beyazlatma (Bleaching)",
        desc: "Diş minesine zarar vermeden tek seansta 3–5 ton daha beyaz ve parlak gülüş.",
        highlight: "45 Dakikada Sonuç",
      },
      {
        title: "Kanal Tedavisi & Estetik Dolgu",
        desc: "Modern endodontik cihazlarla ağrısız, tek seans kanal tedavisi ve kompozit bonding uygulamaları.",
        highlight: "Konforlu Tedavi",
      },
    ],
  },
  {
    slug: "isa-nuri-ince-dis",
    name: "Özel İsa Nuri İnce Ağız ve Diş Sağlığı Polikliniği",
    shortName: "İsa Nuri İnce Diş Polikliniği",
    sector: "dental",
    categoryLabel: "Ağız ve Diş Sağlığı Polikliniği",
    phoneDisplay: "0555 964 86 36",
    phoneClean: "905559648636",
    address: "Altıntop Mah. 1601. Sk. No:8, Merkezefendi / Denizli",
    district: "Merkezefendi / Denizli",
    instagram: "@ozelisanuriincedispoliklinigi",
    rating: "4.8",
    reviewCount: 165,
    heroTagline: "Denizli Merkez'de Güvenilir ve Modern Diş Tedavisi",
    heroSubtitle:
      "Altıntop Mahallesi'nde son teknoloji görüntüleme sistemleri, implantoloji, estetik diş hekimliği ve koruyucu ağız sağlığı çözümleri.",
    badges: ["Deneyimli Kadro", "3D Panoramik Görüntüleme", "Hızlı Randevu"],
    services: [
      {
        title: "Dental İmplant Uygulamaları",
        desc: "Sabit ve konforlu çiğneme fonksiyonu sağlayan biyouyumlu titanyum implant tedavileri.",
        highlight: "Uzman Cerrahi",
      },
      {
        title: "Estetik Gülüş Tasarımı & Zirkonyum",
        desc: "Doğal diş görünümünde zirkonyum ve porselen kaplamalarla estetik gülüş yenileme.",
        highlight: "Doğal Estetik",
      },
      {
        title: "Diş Taşı Temizliği & Diş Eti Bakımı",
        desc: "Ultrasonik detertraj ve airflow ile diş eti sağlığının korunması ve ferah nefes.",
        highlight: "Periyodik Bakım",
      },
      {
        title: "Çocuk Diş Hekimliği (Pedodonti)",
        desc: "Çocuklar için korkusuz, eğlenceli ve koruyucu diş tedavileri, fissür örtücü uygulamalar.",
        highlight: "Çocuk Dostu Klinik",
      },
    ],
  },
  {
    slug: "dentdenizli-klinik",
    name: "DentDenizli Ağız ve Diş Sağlığı Kliniği",
    shortName: "DentDenizli Klinik",
    sector: "dental",
    categoryLabel: "Ağız ve Diş Sağlığı Kliniği",
    phoneDisplay: "0545 127 20 20",
    phoneClean: "905451272020",
    address: "Merkezefendi / Denizli",
    district: "Merkezefendi / Denizli",
    rating: "4.9",
    reviewCount: 118,
    heroTagline: "Sağlıklı ve Estetik Gülüşünüz İçin Yanınızdayız",
    heroSubtitle:
      "Denizli'de modern diş hekimliği teknolojileriyle implant, zirkonyum kaplama, diş beyazlatma ve acil diş tedavilerinde hızlı randevu imkanı.",
    badges: ["Modern Klinik", "Steril Teknoloji", "WhatsApp Randevu"],
    services: [
      {
        title: "İmplant Tedavisi",
        desc: "Eksik dişlerin yerine doğal diş konforunda sabit implant çözümleri.",
        highlight: "Ömür Boyu Garanti",
      },
      {
        title: "Zirkonyum & Estetik Kaplama",
        desc: "Metal desteksiz, diş eti uyumu mükemmel zirkonyum restorasyonlar.",
        highlight: "Yüksek Estetik",
      },
      {
        title: "Ofis Tipi Diş Beyazlatma",
        desc: "Klinik ortamda güvenli ve hızlı diş rengi açma uygulaması.",
        highlight: "Tek Seans",
      },
      {
        title: "Gömülü 20 Yaş Dişi & Kanal Tedavisi",
        desc: "Ağrısız cerrahi çekimler ve mikroskop/cihaz destekli kanal tedavileri.",
        highlight: "Ağrısız İşlem",
      },
    ],
  },
  {
    slug: "ds-albayrak-dis",
    name: "DS Albayrak Ağız ve Diş Sağlığı Kliniği",
    shortName: "DS Albayrak Diş",
    sector: "dental",
    categoryLabel: "Ağız ve Diş Sağlığı Kliniği",
    phoneDisplay: "0501 233 20 20",
    phoneClean: "905012332020",
    address: "Merkezefendi / Denizli",
    district: "Denizli Merkez",
    rating: "4.9",
    reviewCount: 96,
    heroTagline: "Gülüşünüzü Uzman Ellere Emanet Edin",
    heroSubtitle:
      "Denizli'de kişiye özel gülüş tasarımı, implant cerrahisi ve koruyucu diş hekimliği uygulamalarında hasta odaklı yaklaşım.",
    badges: ["Kişiye Özel Tedavi", "Dijital Ölçü", "Steril Ortam"],
    services: [
      {
        title: "Gülüş Tasarımı & Lamine",
        desc: "Yüz estetiğinize tam uyumlu yaprak porselen ve zirkonyum uygulamaları.",
        highlight: "Estetik Çözüm",
      },
      {
        title: "İmplant & Protez",
        desc: "Tek diş eksikliklerinden tam dişsizliğe kadar sabit implant üstü protezler.",
        highlight: "Yüksek Başarı",
      },
      {
        title: "Endodonti & Estetik Dolgu",
        desc: "Doğal dişinizi kurtaran kanal tedavileri ve görünmez estetik dolgular.",
        highlight: "Tek Seans",
      },
      {
        title: "Diş Beyazlatma & Detartraj",
        desc: "Profesyonel diş taşı temizliği ve lazer destekli beyazlatma.",
        highlight: "Anında Parlaklık",
      },
    ],
  },
  {
    slug: "dis-hekimi-tulay-akkol",
    name: "Diş Hekimi Tülay Akkol Kliniği",
    shortName: "Dt. Tülay Akkol",
    sector: "dental",
    categoryLabel: "Özel Diş Hekimi Muayenehanesi",
    phoneDisplay: "0501 289 19 69",
    phoneClean: "905012891969",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "5.0",
    reviewCount: 64,
    heroTagline: "Butik, Konforlu ve Birebir Diş Hekimliği Hizmeti",
    heroSubtitle:
      "Denizli'de sıra beklemeden, sakin ve steril muayenehane ortamında estetik diş hekimliği, dolgu, kanal ve protez tedavileri.",
    badges: ["Birebir İlgi", "Randevulu Sistem", "Ağrısız Yaklaşım"],
    services: [
      {
        title: "Estetik Ön Diş Restorasyonları",
        desc: "Bonding, kompozit lamine ve zirkonyum ile doğal gülüş estetiği.",
        highlight: "Doğal Görünüm",
      },
      {
        title: "Kanal Tedavisi & Dolgu",
        desc: "Diş ağrısını hızla gideren konforlu ve kalıcı endodontik tedaviler.",
        highlight: "Aynı Gün Müdahale",
      },
      {
        title: "Sabit ve Hareketli Protezler",
        desc: "Eksik dişler için hassas tutuculu ve estetik protez çözümleri.",
        highlight: "Tam Uyum",
      },
      {
        title: "Diş Eti Tedavisi & Beyazlatma",
        desc: "Sağlıklı diş etleri ve ışıldayan bir gülüş için profesyonel bakım.",
        highlight: "30 Dk Bakım",
      },
    ],
  },
  {
    slug: "dyt-ozge-goker",
    name: "Dyt. Özge Göker Beslenme ve Diyet Danışmanlığı",
    shortName: "Dyt. Özge Göker",
    sector: "diet",
    categoryLabel: "Beslenme ve Diyet Uzmanı",
    phoneDisplay: "0534 654 26 25",
    phoneClean: "905346542625",
    address: "Gültepe Mah. 719 Sok. No:15 D:16, Merkezefendi / Denizli",
    district: "Merkezefendi / Denizli",
    instagram: "@dytozgegoker",
    rating: "5.0",
    reviewCount: 92,
    heroTagline: "Yasaksız, Sürdürülebilir ve Size Özel Beslenme Programları",
    heroSubtitle:
      "Denizli Merkezefendi'de profesyonel vücut analizi (InBody/Tanita) eşliğinde yüz yüze ve online diyet programlarıyla sağlıklı kilo yönetimi.",
    badges: ["Yüz Yüze & Online Diyet", "Profesyonel Vücut Analizi", "Kişiye Özel Liste"],
    services: [
      {
        title: "Kilo Verme & Yağ Yakımı Programı",
        desc: "Aç kalmadan, kan tahlillerinize ve yaşam tarzınıza uygun haftalık güncellenen beslenme planı.",
        highlight: "Haftalık Takip",
      },
      {
        title: "Bölgesel İncelme & Detoks Paketleri",
        desc: "Ödem atıcı ve metabolizma hızlandırıcı özel beslenme protokolleri.",
        highlight: "Hızlı Sonuç",
      },
      {
        title: "Hastalıklarda Tıbbi Beslenme",
        desc: "İnsülin direnci, tiroid, PCOS, diyabet ve sindirim sistemi rahatsızlıklarına özel diyet.",
        highlight: "Klinik Beslenme",
      },
      {
        title: "Online Diyet & WhatsApp Motivasyon",
        desc: "Şehir içi veya şehir dışından günlük öğün kontrolü ve birebir WhatsApp takibi.",
        highlight: "7/24 İletişim",
      },
    ],
  },
  {
    slug: "dyt-zeynep-cansiz",
    name: "Dyt. Zeynep Cansız Beslenme ve Diyet Kliniği",
    shortName: "Dyt. Zeynep Cansız",
    sector: "diet",
    categoryLabel: "Beslenme ve Diyet Uzmanı",
    phoneDisplay: "0553 326 75 40",
    phoneClean: "905533267540",
    address: "Yunusemre Mah. 6460 Sok. Ofis Kınıklı No:4 K:2 D:8, Pamukkale / Denizli",
    district: "Kınıklı, Pamukkale / Denizli",
    instagram: "@dytzeynepcansiz",
    rating: "5.0",
    reviewCount: 78,
    heroTagline: "Kınıklı'da Bilimsel ve Kalıcı Kilo Kontrolü",
    heroSubtitle:
      "Pamukkale Kınıklı'daki kliniğimizde detaylı yağ-kas ölçümü, sürdürülebilir beslenme eğitimi ve birebir motivasyon takibi.",
    badges: ["Ofis Kınıklı", "Detaylı Yağ-Kas Ölçümü", "Online & Yüz Yüze"],
    services: [
      {
        title: "Birebir Klinik Diyet Takibi",
        desc: "Haftalık profesyonel tartım, сегmental yağ-kas analizi ve size özel yeni liste planlaması.",
        highlight: "Yüz Yüze Görüşme",
      },
      {
        title: "Online Beslenme Danışmanlığı",
        desc: "Yoğun çalışanlar için WhatsApp üzerinden öğün fotoğraflı günlük takip sistemi.",
        highlight: "Esnek Program",
      },
      {
        title: "Gebelik & Emzirme Dönemi Beslenmesi",
        desc: "Anne ve bebek sağlığını koruyan, süt artıran dengeli beslenme planları.",
        highlight: "Güvenli Takip",
      },
      {
        title: "Sporcu Beslenmesi & Kilo Alma",
        desc: "Kas kütlesini artırmaya ve antrenman performansını yükseltmeye yönelik makro planlama.",
        highlight: "Performans Odaklı",
      },
    ],
  },
  {
    slug: "dyt-teslime-bayer",
    name: "Dyt. Teslime Bayer Üçkuyulu Beslenme Danışmanlığı",
    shortName: "Dyt. Teslime Bayer Üçkuyulu",
    sector: "diet",
    categoryLabel: "Beslenme ve Diyet Uzmanı",
    phoneDisplay: "0551 636 47 30",
    phoneClean: "905516364730",
    address: "Denizli Merkez",
    district: "Denizli",
    instagram: "@dyt.teslimebayer",
    rating: "5.0",
    reviewCount: 74,
    heroTagline: "Sağlıklı Yaşam ve İdeal Kilonuza Birlikte Ulaşalım",
    heroSubtitle:
      "Sevdiğiniz besinlerden vazgeçmeden, metabolizmanıza özel hazırlanan beslenme programları ile kalıcı incelme.",
    badges: ["Kişiye Özel Diyet", "WhatsApp Takibi", "Ücretsiz Ön Görüşme"],
    services: [
      {
        title: "Sağlıklı Zayıflama & Kilo Koruma",
        desc: "Jo-jo etkisi olmadan, sadece yağ dokusundan kayıp sağlayan bilimsel diyet listeleri.",
        highlight: "Kalıcı Sonuç",
      },
      {
        title: "İnsülin Direnci & PCOS Beslenmesi",
        desc: "Hormonal dengeyi destekleyen ve tatlı krizlerini bitiren fonksiyonel beslenme.",
        highlight: "Kan Tahlili Odaklı",
      },
      {
        title: "Online Diyet Koçluğu",
        desc: "Mesafe fark etmeksizin görüntülü görüşme ve günlük WhatsApp öğün kontrolü.",
        highlight: "Birebir İlgi",
      },
      {
        title: "Çocuk & Ergen Beslenmesi",
        desc: "Büyüme ve gelişimi destekleyen, sağlıklı beslenme alışkanlığı kazandıran programlar.",
        highlight: "Aile Destekli",
      },
    ],
  },
  {
    slug: "dyt-merve-kizil-cetinkaya",
    name: "Uzm. Dyt. Merve Kızıl Çetinkaya — Diyetin Sensin",
    shortName: "Uzm. Dyt. Merve Kızıl Çetinkaya",
    sector: "diet",
    categoryLabel: "Uzman Diyetisyen",
    phoneDisplay: "0534 338 68 02",
    phoneClean: "905343386802",
    address: "Denizli Merkez",
    district: "Denizli",
    instagram: "@diyetinsensin",
    rating: "5.0",
    reviewCount: 110,
    heroTagline: "Diyetin Sensin: Bedeninize Uygun Uzman Beslenme",
    heroSubtitle:
      "Uzman Diyetisyen Merve Kızıl Çetinkaya eşliğinde bilimsel, uygulanabilir ve motive edici beslenme danışmanlığı.",
    badges: ["Uzman Diyetisyen", "Yüz Yüze & Online", "Birebir Takip"],
    services: [
      {
        title: "Kişiye Özel Kilo Yönetimi",
        desc: "Yaşam temposu ve metabolizma hızınıza göre tamamen size özel hazırlanan programlar.",
        highlight: "Haftalık Analiz",
      },
      {
        title: "Fonksiyonel & Hastalıkta Beslenme",
        desc: "Tiroid, diyabet, kolesterol ve mide-bağırsak sorunlarına yönelik tedavi destekleyici diyet.",
        highlight: "Uzman Yaklaşım",
      },
      {
        title: "Online Motivasyon & Takip",
        desc: "WhatsApp üzerinden anlık soru-cevap ve günlük tabak kontrolü.",
        highlight: "Aktif Takip",
      },
      {
        title: "Detoks & Ödem Atım Programları",
        desc: "Direnç kilolarını kıran kısa süreli metabolizma canlandırma listeleri.",
        highlight: "Direnç Kırıcı",
      },
    ],
  },
  {
    slug: "psk-arzu-ceylan",
    name: "Arzu Ceylan — Çocuk, Ergen ve Aile Danışmanlığı",
    shortName: "Psk. Dan. Arzu Ceylan",
    sector: "therapy",
    categoryLabel: "Çocuk, Ergen ve Aile Danışmanlığı",
    phoneDisplay: "0533 452 70 05",
    phoneClean: "905334527005",
    address: "Denizli Merkez",
    district: "Denizli",
    instagram: "@pskd_arzuceylan_denizli",
    rating: "5.0",
    reviewCount: 68,
    heroTagline: "Çocuk, Ergen ve Aile İçi İletişimde Güvenli Alanınız",
    heroSubtitle:
      "Denizli'de oyun terapisi, ergen sınav kaygısı, dikkat geliştirme ve aile/çift danışmanlığında bilimsel ve gizlilik esaslı destek.",
    badges: ["Çocuk & Ergen Uzmanlığı", "Aile Danışmanlığı", "%100 Gizlilik"],
    services: [
      {
        title: "Çocuk & Oyun Terapisi",
        desc: "Davranış problemleri, korkular, kardeş kıskançlığı ve uyum süreçleri için oyun temelli danışmanlık.",
        highlight: "Deneyimsel Yaklaşım",
      },
      {
        title: "Ergen Danışmanlığı & Sınav Kaygısı",
        desc: "LGS/YKS sürecinde sınav kaygısı, dikkat dağınıklığı, özgüven ve ergenlik dönemi iletişim desteği.",
        highlight: "Odak & Başarı",
      },
      {
        title: "Aile ve Çift Danışmanlığı",
        desc: "Ebeveyn tutumları, aile içi çatışmalar ve eşler arası sağlıklı iletişim becerileri.",
        highlight: "Çözüm Odaklı",
      },
      {
        title: "Online Danışmanlık Seansları",
        desc: "Ev konforunda görüntülü ve tam gizlilik prensibiyle bireysel/ebeveyn görüşmeleri.",
        highlight: "Esnek Saatler",
      },
    ],
  },
  {
    slug: "psk-asena-ilayda-baser",
    name: "Klinik Psikolog Asena İlayda Başer",
    shortName: "Kln. Psk. Asena İlayda Başer",
    sector: "therapy",
    categoryLabel: "Uzman Klinik Psikolog",
    phoneDisplay: "0537 421 96 79",
    phoneClean: "905374219679",
    address: "Denizli Merkez",
    district: "Denizli",
    instagram: "@pskasenaibaser",
    rating: "5.0",
    reviewCount: 81,
    heroTagline: "Kendinizi Anlama ve İyileşme Yolculuğunuzda Profesyonel Destek",
    heroSubtitle:
      "Klinik Psikolog Asena İlayda Başer ile Denizli'de yüz yüze ve online bireysel psikoterapi, kaygı, depresyon ve ilişki terapisi.",
    badges: ["Klinik Psikolog", "Yüz Yüze & Online Terapi", "Etik & Gizli"],
    services: [
      {
        title: "Bireysel Yetişkin Psikoterapisi",
        desc: "Kaygı bozuklukları, panik atak, depresyon, stres ve yaşam krizlerinde bilimsel psikoterapi.",
        highlight: "BDT & Şema Odaklı",
      },
      {
        title: "İlişki & Bağlanma Sorunları",
        desc: "Romantik ilişkilerde tekrarlayan döngüler, sınır koyma ve özdeğer çalışmaları.",
        highlight: "Derinlikli Çalışma",
      },
      {
        title: "Ergen Psikoterapisi",
        desc: "Kimlik gelişimi, akran ilişkileri, gelecek kaygısı ve duygu regülasyonu desteği.",
        highlight: "Genç Dostu Alan",
      },
      {
        title: "Online Terapi",
        desc: "Türkiye ve yurt dışından danışanlar için güvenli görüntülü terapi seansları.",
        highlight: "Kolay Randevu",
      },
    ],
  },
  {
    slug: "psk-ecem-beceren",
    name: "Psikolog Ecem Beceren Danışmanlık Merkezi",
    shortName: "Psikolog Ecem Beceren",
    sector: "therapy",
    categoryLabel: "Psikolojik Danışmanlık & Terapi",
    phoneDisplay: "0554 124 20 62",
    phoneClean: "905541242062",
    address: "Denizli Merkez",
    district: "Denizli",
    instagram: "@psikolog.ecembeceren",
    rating: "5.0",
    reviewCount: 59,
    heroTagline: "Ruh Sağlığınız İçin Yargısız ve Güvenli Terapi Alanı",
    heroSubtitle:
      "Denizli'de yetişkin, ergen ve çocuk danışmanlığında bilimsel ekollerle yüz yüze ve online psikolojik destek.",
    badges: ["Bireysel Terapi", "Online & Yüz Yüze", "Kolay Randevu"],
    services: [
      {
        title: "Bireysel Psikolojik Danışmanlık",
        desc: "Anksiyete, stres yönetimi, öfke kontrolü ve duygusal zorluklarda birebir terapi.",
        highlight: "50 Dk Seans",
      },
      {
        title: "Çocuk & Ergen Gelişim Takibi",
        desc: "Çocuklarda duygusal gelişim, okul uyumu ve ergenlik dönemi danışmanlığı.",
        highlight: "Ebeveyn Görüşmeli",
      },
      {
        title: "Sınav Kaygısı & Motivasyon",
        desc: "Öğrenciler için kaygı yönetimi, dikkat ve verimli çalışma stratejileri.",
        highlight: "Yapılandırılmış Program",
      },
      {
        title: "Online Psikoterapi",
        desc: "Bulunduğunuz her yerden gizlilikle katılabileceğiniz görüntülü seanslar.",
        highlight: "Esnek Takvim",
      },
    ],
  },
  {
    slug: "fizyoform-denizli",
    name: "Fizyoform Denizli — Fizyoterapi & Klinik Pilates",
    shortName: "Fizyoform Denizli",
    sector: "therapy",
    categoryLabel: "Fizyoterapi ve Klinik Pilates Merkezi",
    phoneDisplay: "0533 154 19 49",
    phoneClean: "905331541949",
    address: "Gerzele Mah. Geriz Cd. No:35, Merkezefendi / Denizli",
    district: "Gerzele, Merkezefendi / Denizli",
    instagram: "@denizli.fizyoform",
    rating: "4.9",
    reviewCount: 124,
    heroTagline: "Ağrısız Hareket ve Sağlıklı Omurga İçin Uzman Fizyoterapi",
    heroSubtitle:
      "Merkezefendi Gerzele'de bel-boyun fıtığı, duruş bozuklukları, manuel terapi ve fizyoterapist eşliğinde birebir Reformer Pilates.",
    badges: ["Uzman Fizyoterapist", "Manuel Terapi", "Klinik Reformer Pilates"],
    services: [
      {
        title: "Manuel Terapi & Bel-Boyun Fıtığı",
        desc: "Ameliyatsız fıtık, eklem kısıtlılığı ve kas spazmlarında kanıta dayalı manuel terapi uygulamaları.",
        highlight: "Ücretsiz İlk Değerlendirme",
      },
      {
        title: "Fizyoterapist Eşliğinde Reformer Pilates",
        desc: "Omurga sağlığınızı koruyan, kişiye özel planlanmış birebir veya düet aletli pilates dersleri.",
        highlight: "Birebir Eğitim",
      },
      {
        title: "Skolyoz & Postür (Duruş) Rehabilitasyonu",
        desc: "Çocuk ve yetişkinlerde 3 boyutlu skolyoz egzersizleri ve kamburluk (kifoz) düzeltme programı.",
        highlight: "3D Egzersiz",
      },
      {
        title: "Ortopedik & Sporcu Rehabilitasyonu",
        desc: "Menisküs, ön çapraz bağ ve ameliyat sonrası güvenli spora dönüş programları.",
        highlight: "Bireysel Takip",
      },
    ],
  },
  {
    slug: "studio-venti-pilates",
    name: "Studio Venti — Reformer Pilates & Fonksiyonel Egzersiz",
    shortName: "Studio Venti Denizli",
    sector: "therapy",
    categoryLabel: "Reformer Pilates Stüdyosu",
    phoneDisplay: "0501 166 20 22",
    phoneClean: "905011662022",
    address: "Servergazi Mah. Çınar Sk. No:34/A, Merkezefendi / Denizli",
    district: "Servergazi, Merkezefendi / Denizli",
    instagram: "@studiioventi",
    rating: "5.0",
    reviewCount: 87,
    heroTagline: "Servergazi'de Butik Reformer Pilates Deneyimi",
    heroSubtitle:
      "Ferah stüdyo ortamında uzman eğitmenlerle birebir ve grup Reformer/Cadillac Pilates dersleriyle sıkılaşın, esneyin ve yenilenin.",
    badges: ["Deneme Dersi İmkanı", "Birebir & Düet Ders", "Servergazi"],
    services: [
      {
        title: "Birebir (Private) Reformer Pilates",
        desc: "Vücut analizinize ve hedeflerinize göre tamamen size özel planlanan 50 dakikalık aletli pilates.",
        highlight: "Maksimum Verim",
      },
      {
        title: "Düet (2 Kişilik) Pilates Paketleri",
        desc: "Arkadaşınız veya eşinizle birlikte motivasyonu yüksek, eğlenceli reformer seansları.",
        highlight: "Avantajlı Paket",
      },
      {
        title: "Duruş Düzeltme & Sıkılaşma",
        desc: "Core bölgesini güçlendiren, sırt ağrılarını azaltan ve tüm vücudu şekillendiren programlar.",
        highlight: "8 Haftada Fark",
      },
      {
        title: "Hamile Pilatesi",
        desc: "Gebelik sürecini konforlu geçirmek ve doğuma hazırlanmak için güvenli egzersizler.",
        highlight: "Güvenli Egzersiz",
      },
    ],
  },
  {
    slug: "fizyosifa-fdm",
    name: "Fizyoşifa FDM Fizyoterapi ve Danışmanlık Merkezi",
    shortName: "Fizyoşifa FDM",
    sector: "therapy",
    categoryLabel: "Fizyoterapi ve Manuel Terapi Merkezi",
    phoneDisplay: "0507 041 36 86",
    phoneClean: "905070413686",
    address: "Sırakapılar Mah. 1585 Sok. No:2 Çağrı Apt. K:2 D:5, Denizli",
    district: "Sırakapılar / Denizli",
    instagram: "@fztsaidyildizsmhb",
    rating: "4.9",
    reviewCount: 73,
    heroTagline: "Kronik Ağrılarınıza Bilimsel Fizyoterapi Çözümleri",
    heroSubtitle:
      "Denizli Sırakapılar'da fasya distorsiyon modeli (FDM), manuel terapi, kupa/kuru iğneleme ve kişiye özel egzersiz yaklaşımları.",
    badges: ["FDM & Manuel Terapi", "Ağrı Yönetimi", "Merkezi Konum"],
    services: [
      {
        title: "Bel ve Boyun Fıtığı Rehabilitasyonu",
        desc: "Sinir basısını azaltan manuel teknikler ve omurga stabilizasyon egzersizleri.",
        highlight: "Hızlı Rahatlama",
      },
      {
        title: "Fasya Distorsiyon Modeli (FDM)",
        desc: "Omuz donması, topuk dikeni, tenisçi dirseği ve kas-iskelet ağrılarında hedefe yönelik uygulama.",
        highlight: "Etkin Yöntem",
      },
      {
        title: "Klinik Egzersiz & Postür Analizi",
        desc: "Ağrının tekrarlamasını önleyen kişiye özel güçlendirme ve esneklik programı.",
        highlight: "Kalıcı İyileşme",
      },
      {
        title: "Evde Fizyoterapi Hizmeti",
        desc: "Kliniğe gelemeyen nörolojik veya ortopedik danışanlar için ev ortamında rehabilitasyon.",
        highlight: "Birebir Destek",
      },
    ],
  },
  {
    slug: "aris-guzellik-merkezi",
    name: "Aris Güzellik & Estetik Merkezi Denizli",
    shortName: "Aris Güzellik Merkezi",
    sector: "beauty",
    categoryLabel: "Güzellik & Medikal Cilt Bakım Merkezi",
    phoneDisplay: "0544 117 21 20",
    phoneClean: "905441172120",
    address: "Kınıklı Mah. Çamlık Bulvarı No:67 A/1, Pamukkale / Denizli",
    district: "Çamlık Bulvarı, Pamukkale / Denizli",
    rating: "4.9",
    reviewCount: 156,
    heroTagline: "Çamlık Bulvarı'nda Cildinize Hak Ettiği Işıltıyı Verin",
    heroSubtitle:
      "Denizli Çamlık'ta son teknoloji buz lazer epilasyon, Hydrafacial medikal cilt bakımı, bölgesel incelme (G5 / EMS) ve kalıcı makyaj.",
    badges: ["Çamlık Bulvarı", "FDA Onaylı Cihazlar", "Ücretsiz Cilt Analizi"],
    services: [
      {
        title: "4 Mevsim Buz Lazer Epilasyon",
        desc: "Acısız, hızlı ve tüm kıl tiplerinde etkili son nesil soğutmalı lazer epilasyon paketleri.",
        highlight: "Kampanyalı Paket",
      },
      {
        title: "Hydrafacial & Medikal Cilt Bakımı",
        desc: "Derinlemesine gözenek temizliği, leke/akne protokolleri ve kolajen gençleştirme bakımı.",
        highlight: "İlk Seansta Parlaklık",
      },
      {
        title: "Bölgesel İncelme (G5 & Heykeltraş)",
        desc: "Selülit giderici ve sıkılaştırıcı cihaz protokolleriyle ameliyatsız incelme.",
        highlight: "Ölçü Garantili",
      },
      {
        title: "İpek Kirpik, Kaş Laminasyon & Kalıcı Makyaj",
        desc: "Doğal ifadeyi bozmayan mikroblading, dudak renklendirme ve kirpik lifting işlemleri.",
        highlight: "Uzman Estetisyen",
      },
    ],
  },
  {
    slug: "vizyongoz-medikal-estetik",
    name: "Vizyon Medikal Estetik & Saç Ekimi Merkezi",
    shortName: "Vizyon Medikal Estetik",
    sector: "beauty",
    categoryLabel: "Medikal Estetik & Saç Ekimi",
    phoneDisplay: "0530 362 18 84",
    phoneClean: "905303621884",
    address: "Sırakapılar Mah. 495 Sok. No:7, Merkezefendi / Denizli",
    district: "Sırakapılar, Merkezefendi / Denizli",
    rating: "4.8",
    reviewCount: 134,
    heroTagline: "Medikal Estetik ve Saç Ekiminde Klinik Güvence",
    heroSubtitle:
      "Denizli Merkezefendi'de steril hastane/klinik altyapısıyla Safir FUE & DHI saç ekimi, mezoterapi, PRP ve medikal cilt gençleştirme.",
    badges: ["Safir FUE & DHI Saç Ekimi", "Klinik Güvence", "Ücretsiz Ön Analiz"],
    services: [
      {
        title: "Safir FUE & DHI Saç Ekimi",
        desc: "Doğal saç çizgisi tasarımı ve maksimum greft yoğunluğu ile iz bırakmayan saç ekimi.",
        highlight: "Garantili Sertifika",
      },
      {
        title: "Saç & Yüz Mezoterapisi / PRP",
        desc: "Saç dökülmesini durduran ve cildi yenileyen vitamin, somon DNA ve gençlik aşısı uygulamaları.",
        highlight: "Hızlı Yenilenme",
      },
      {
        title: "Medikal Cilt Gençleştirme",
        desc: "Leke, ince kırışıklık ve akne izlerine karşı klinik düzeyde cilt yenileme protokolleri.",
        highlight: "Uzman Kadro",
      },
      {
        title: "Beslenme & Bölgesel İncelme Birimi",
        desc: "Bütüncül estetik ve sağlıklı görünüm için klinik takip programları.",
        highlight: "Kişiye Özel Plan",
      },
    ],
  },
  {
    slug: "gd-veteriner-klinigi",
    name: "GD Veteriner Kliniği Denizli",
    shortName: "GD Veteriner Kliniği",
    sector: "dental",
    categoryLabel: "Veteriner Kliniği & Pet Sağlık Merkezi",
    phoneDisplay: "0554 370 27 67",
    phoneClean: "905543702767",
    address: "Yenişehir Mah. 34. Sk. No:3 (Yürüyüş Yolu Girişi), Merkezefendi / Denizli",
    district: "Yenişehir / Denizli",
    instagram: "@gdveterinerklinigi",
    rating: "4.9",
    reviewCount: 112,
    heroTagline: "Can Dostlarınız İçin 7/24 Şefkatli ve Modern Veterinerlik",
    heroSubtitle:
      "Denizli Yenişehir Yürüyüş Yolu girişinde dijital röntgen, hemogram/biyokimya laboratuvarı, aşı takibi, cerrahi ve pet kuaför.",
    badges: ["Yenişehir Yürüyüş Yolu", "Tam Donanımlı Lab", "Acil Müdahale"],
    services: [
      {
        title: "Koruyucu Hekimlik & Aşı Takvimi",
        desc: "Kedi ve köpekleriniz için mikroçip, iç-dış parazit ve periyodik karma/kuduz aşı takibi.",
        highlight: "SMS Hatırlatma",
      },
      {
        title: "Teşhis, Röntgen & Kan Laboratuvarı",
        desc: "Dakikalar içinde sonuç veren hemogram, biyokimya, ultrason ve dijital röntgen görüntüleme.",
        highlight: "15 Dk Tanı",
      },
      {
        title: "Steril Cerrahi & Kısırlaştırma",
        desc: "Gaz anestezisi ve yoğun bakım ünitesi güvencesiyle kısırlaştırma ve yumuşak doku/ortopedi cerrahisi.",
        highlight: "Güvenli Anestezi",
      },
      {
        title: "Pet Kuaför & Ağız Diş Bakımı",
        desc: "Anestezisiz makas/makine tıraşı, banyo ve ultrasonik diş taşı temizliği.",
        highlight: "Stressiz Bakım",
      },
    ],
  },
  {
    slug: "denizli-20-emlak",
    name: "Denizli 20 Emlak & Gayrimenkul Yatırım Danışmanlığı",
    shortName: "Denizli 20 Emlak",
    sector: "realestate",
    categoryLabel: "Gayrimenkul & Yatırım Danışmanlığı",
    phoneDisplay: "0533 653 38 68",
    phoneClean: "905336533868",
    address: "Merkezefendi / Denizli",
    district: "Denizli Merkez",
    rating: "4.9",
    reviewCount: 88,
    heroTagline: "Denizli'de Doğru Fiyatlı Konut, Arsa ve Ticari Yatırımlar",
    heroSubtitle:
      "Merkezefendi ve Pamukkale bölgesinde satılık/kiralık daire, villa, arsa portföyü ve ücretsiz güncel ekspertiz (değerleme) hizmeti.",
    badges: ["Ücretsiz Ekspertiz", "Hızlı Satış & Kiralama", "Güvenilir Tapu Süreci"],
    services: [
      {
        title: "Satılık & Kiralık Konut Portföyü",
        desc: "Çamlık, Servergazi, Yenişehir, Bağbaşı ve Kınıklı'da seçkin daire ve villa seçenekleri.",
        highlight: "Güncel Portföy",
      },
      {
        title: "Ücretsiz Gayrimenkul Değerleme",
        desc: "Mülkünüzün gerçek piyasa değerini bölge emsalleriyle analiz edip en doğru fiyattan pazarlıyoruz.",
        highlight: "24 Saatte Rapor",
      },
      {
        title: "Arsa & Ticari Gayrimenkul Yatırımı",
        desc: "Yüksek prim potansiyelli imarlı arsalar, dükkanlar ve sanayi/depo yatırımları.",
        highlight: "Yüksek Getiri",
      },
      {
        title: "Profesyonel Drone Çekimi & Pazarlama",
        desc: "4K video çekimi, ilan portalları ve yatırımcı ağımızla mülkünüzü en kısa sürede sonuca ulaştırıyoruz.",
        highlight: "Anahtar Teslim",
      },
    ],
  },
  {
    slug: "iyiol-gayrimenkul",
    name: "Denizli İYİOL Gayrimenkul Danışmanlığı",
    shortName: "İYİOL Gayrimenkul",
    sector: "realestate",
    categoryLabel: "Gayrimenkul & Emlak Ofisi",
    phoneDisplay: "0533 637 88 55",
    phoneClean: "905336378855",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "4.9",
    reviewCount: 76,
    heroTagline: "Denizli'de Gayrimenkul Alım, Satım ve Kiralamada Güvenin Adresi",
    heroSubtitle:
      "Denizli genelinde daire, rezidans, müstakil ev ve yatırım amaçlı arsa işlemlerinizde şeffaf ve profesyonel danışmanlık.",
    badges: ["Şeffaf Pazarlık", "Kredi & Tapu Takibi", "Seçkin İlanlar"],
    services: [
      {
        title: "Konut & Villa Satışı",
        desc: "Aileniz veya yatırımınız için Denizli'nin en çok değer kazanan bölgelerinde konut seçenekleri.",
        highlight: "Yüz Yüze Sunum",
      },
      {
        title: "Kurumsal Kiralama & Kiracı Seçimi",
        desc: "Mülkünüzü referanslı, düzenli ödemeli kiracılarla sözleşme güvencesi altında buluşturuyoruz.",
        highlight: "Güvenli Kontrat",
      },
      {
        title: "Arsa & Tarla Yatırımları",
        desc: "Gelişim aksındaki bölgelerde orta ve uzun vadede yüksek kazanç sağlayan arsa portföyü.",
        highlight: "Yatırım Fırsatı",
      },
      {
        title: "Mülkünüzü Satmak / Kiralamak İstiyorum",
        desc: "Gayrimenkulünüzü bize bildirin, profesyonel çekim ve reklamla hemen alıcısıyla buluşturalım.",
        highlight: "Hızlı Sonuç",
      },
    ],
  },
  {
    slug: "revizyon-gayrimenkul",
    name: "Revizyon Gayrimenkul & Yatırım Denizli",
    shortName: "Revizyon Gayrimenkul",
    sector: "realestate",
    categoryLabel: "Gayrimenkul Yatırım Danışmanlığı",
    phoneDisplay: "0533 201 88 98",
    phoneClean: "905332018898",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "4.9",
    reviewCount: 91,
    heroTagline: "Gayrimenkul Yatırımlarınıza Yeni Bir Vizyon Katıyoruz",
    heroSubtitle:
      "Denizli'de lüks konut, ticari dükkan, arsa yatırımı ve portföy yönetiminde uzman danışman kadromuzla yanınızdayız.",
    badges: ["Portföy Yönetimi", "Ücretsiz Ekspertiz", "Hızlı Tapu"],
    services: [
      {
        title: "Lüks Konut & Villa Portföyü",
        desc: "Merkezefendi ve Pamukkale'nin prestijli sitelerinde satılık ve kiralık daireler.",
        highlight: "Seçkin Portföy",
      },
      {
        title: "Ticari Gayrimenkul & Dükkan",
        desc: "Cadde cepheli kurumsal kiracılı dükkanlar, ofisler ve iş yeri alternatifleri.",
        highlight: "Kira Getirili",
      },
      {
        title: "Arsa & Kat Karşılığı Projeler",
        desc: "Müteahhit ve arsa sahipleri için doğru fizibilite ve kat karşılığı proje danışmanlığı.",
        highlight: "Uzman Analiz",
      },
      {
        title: "Ücretsiz Fiyat Analizi",
        desc: "Satmak istediğiniz mülkün güncel piyasa değerini aynı gün ücretsiz belirliyoruz.",
        highlight: "Aynı Gün Dönüş",
      },
    ],
  },
  {
    slug: "atikoglu-gayrimenkul",
    name: "Atikoğlu Gayrimenkul Danışmanlığı Denizli",
    shortName: "Atikoğlu Gayrimenkul",
    sector: "realestate",
    categoryLabel: "Gayrimenkul & Emlak Danışmanlığı",
    phoneDisplay: "0532 151 03 30",
    phoneClean: "905321510330",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "4.9",
    reviewCount: 83,
    heroTagline: "Denizli'de Yılların Tecrübesiyle Güvenilir Gayrimenkul Hizmeti",
    heroSubtitle:
      "Alıcı ve satıcıyı doğrudan, şeffaf koşullarda buluşturan yerel piyasa hakimiyeti ve sorunsuz tapu danışmanlığı.",
    badges: ["Yerel Uzmanlık", "Birebir Pazarlık", "Tam Güvence"],
    services: [
      {
        title: "Satılık Daire & Müstakil Ev",
        desc: "Bütçenize ve kriterlerinize tam uyan krediye uygun daire seçenekleri.",
        highlight: "Krediye Uygun",
      },
      {
        title: "Yatırımlık Arsa & Arazi",
        desc: "Ada/parsel sorgusu yapılmış, temiz tapulu ve prim potansiyeli yüksek arsalar.",
        highlight: "Temiz Tapu",
      },
      {
        title: "Kiralık Konut & İş Yeri",
        desc: "Öğrenci, aile ve memur profiline uygun hızlı kiralık daire ve ofis çözümleri.",
        highlight: "Hemen Teslim",
      },
      {
        title: "Mülk Satış & Değerleme",
        desc: "Evinizi veya arsanızı değerinde ve hızla nakde çevirmek için bizimle iletişime geçin.",
        highlight: "Ücretsiz Ekspertiz",
      },
    ],
  },
  {
    slug: "ates-20-gayrimenkul",
    name: "Ateş 20 Gayrimenkul Denizli",
    shortName: "Ateş 20 Gayrimenkul",
    sector: "realestate",
    categoryLabel: "Gayrimenkul & Yatırım Ofisi",
    phoneDisplay: "0544 235 16 40",
    phoneClean: "905442351640",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "4.9",
    reviewCount: 79,
    heroTagline: "7/24 Ulaşılabilir, Hızlı ve Sonuç Odaklı Gayrimenkul Çözümleri",
    heroSubtitle:
      "Denizli'de konut, aparat, arsa ve ticari mülk alım-satım süreçlerinizde günün her saati yanınızdayız.",
    badges: ["7/24 İletişim", "Hızlı Pazarlama", "Denizli Uzmanı"],
    services: [
      {
        title: "Acil Satılık & Fırsat İlanları",
        desc: "Piyasa değerinin altında, yatırımcısına anında kazandıran güncel fırsat daire ve arsalar.",
        highlight: "Fırsat Portföyü",
      },
      {
        title: "1+1, 2+1, 3+1 Satılık/Kiralık Daireler",
        desc: "Kınıklı, Çamlık, Bağbaşı ve Merkezefendi'de yüksek kira getirili konutlar.",
        highlight: "Yüksek Kira Çarpanı",
      },
      {
        title: "Tapu ve Konut Kredisi Danışmanlığı",
        desc: "Banka kredi süreçleri ve tapu randevularınızın baştan sona takibi.",
        highlight: "Sıfır Zahmet",
      },
      {
        title: "Ücretsiz İlan & Ekspertiz",
        desc: "Mülkünüzü WhatsApp'tan gönderin, aynı gün yerinde inceleyip satışa çıkaralım.",
        highlight: "Hızlı Satış",
      },
    ],
  },
  {
    slug: "yuksel-gayrimenkul",
    name: "Yüksel Gayrimenkul & Yatırım Denizli",
    shortName: "Yüksel Gayrimenkul",
    sector: "realestate",
    categoryLabel: "Emlak & Yatırım Danışmanlığı",
    phoneDisplay: "0553 350 56 60",
    phoneClean: "905533505660",
    address: "Denizli Merkez",
    district: "Denizli",
    rating: "4.9",
    reviewCount: 95,
    heroTagline: "Değer Kazanan Yatırımlar, Huzurlu Yuvalar",
    heroSubtitle:
      "Denizli'de gayrimenkul alırken de satarken de kazançlı çıkmanız için doğru fiyatlandırma ve profesyonel portföy yönetimi.",
    badges: ["Doğru Fiyat", "Geniş Yatırımcı Ağı", "Güvenli İşlem"],
    services: [
      {
        title: "Satılık Konut & Rezidans",
        desc: "Yeni deprem yönetmeliğine uygun, modern mimarili sıfır ve ikinci el daireler.",
        highlight: "Deprem Yönetmelikli",
      },
      {
        title: "Arsa, Bağ & Bahçe Yatırımı",
        desc: "Denizli ve çevresinde geleceğe dönük imarlı arsa ve müstakil yaşam alanları.",
        highlight: "Prim Garantili",
      },
      {
        title: "Ticari Mülk & Yatırım Danışmanlığı",
        desc: "Düzenli kira getirisi sağlayan cadde mağazaları ve kurumsal iş yerleri.",
        highlight: "Kurumsal Kiracılı",
      },
      {
        title: "Mülkünüzü Değerinde Satıyoruz",
        desc: "Ücretsiz ekspertiz ve profesyonel tanıtımla mülkünüzü gerçek değerinde satıyoruz.",
        highlight: "Hemen Başvurun",
      },
    ],
  },
];

export function getBusinessBySlug(slug: string): BusinessLead | undefined {
  return DENIZLI_BUSINESSES.find((b) => b.slug === slug);
}
