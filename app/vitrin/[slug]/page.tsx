import type { Metadata } from "next";
import {
  DENIZLI_BUSINESSES,
  getBusinessBySlug,
  type BusinessLead,
  type SectorType,
} from "../businesses";
import ClientShowcase from "./ClientShowcase";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const customName = typeof sp.ad === "string" ? sp.ad : undefined;
  const found = getBusinessBySlug(slug);

  const title = customName || found?.name || "Kurumsal Web Tasarım Önizlemesi";
  return {
    title: {
      absolute: title,
    },
    description:
      found?.heroSubtitle ||
      `${title} — Online randevu, hizmetlerimiz ve iletişim bilgileri.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

function buildFallbackBusiness(
  slug: string,
  sp: { [key: string]: string | string[] | undefined }
): BusinessLead {
  const rawName =
    typeof sp.ad === "string" && sp.ad.trim()
      ? sp.ad.trim()
      : slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
  const rawPhone =
    typeof sp.tel === "string" && sp.tel.trim()
      ? sp.tel.trim()
      : "0532 000 00 00";
  const digits = rawPhone.replace(/\D/g, "");
  const phoneClean = digits.startsWith("90")
    ? digits
    : digits.startsWith("0")
    ? `9${digits}`
    : `90${digits}`;

  const rawSector = (
    typeof sp.sektor === "string" ? sp.sektor : "dental"
  ) as SectorType;
  const template =
    DENIZLI_BUSINESSES.find((b) => b.sector === rawSector) ||
    DENIZLI_BUSINESSES[0];

  const address =
    typeof sp.adres === "string" && sp.adres.trim()
      ? sp.adres.trim()
      : "Merkezefendi / Denizli";

  return {
    ...template,
    slug,
    name: rawName,
    shortName: rawName,
    phoneDisplay: rawPhone,
    phoneClean,
    address,
    district: address,
  };
}

export default async function BusinessShowcasePage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const sp = await searchParams;
  const business = getBusinessBySlug(slug) || buildFallbackBusiness(slug, sp);

  return <ClientShowcase business={business} />;
}
