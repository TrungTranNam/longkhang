import React from "react";
import { HeroCarousel } from "../components/HeroCarousel";
import { RecipeSlider } from "../components/RecipeSlider";
import { ShoppingSection } from "../components/ShoppingSection";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
export const HomePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LongKhang Wagyu Shop",
    description: "Cửa hàng thịt bò Wagyu cao cấp nhập khẩu trực tiếp từ Nhật Bản",
    url: window.location.href,
    logo: "https://your-logo-url.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Đường ABC",
      addressLocality: "Quận 1",
      addressRegion: "TP.HCM",
      addressCountry: "VN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0123.456.789",
      contactType: "customer service"
    }
  };
  return <>
      <SEO title="Trang Chủ" description="Thịt bò Wagyu A5 cao cấp nhập khẩu trực tiếp từ Nhật Bản. Chất lượng premium, vân mỡ đẹp, độ mềm hoàn hảo và hương vị đặc trưng." schema={schema} />
      <HeroCarousel />
      <ShoppingSection />
      <RecipeSlider />
      <Footer />
    </>;
};