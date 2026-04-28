import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Guide } from "@/components/site/Guide";
import { Collections } from "@/components/site/Collections";
import { Plan } from "@/components/site/Plan";
import { SuccessFailure } from "@/components/site/SuccessFailure";
import { Reviews } from "@/components/site/Reviews";
import { HowToBuy } from "@/components/site/HowToBuy";
import { Payments } from "@/components/site/Payments";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giày Thượng Đình — Bước đi thoải mái, mang theo bản sắc Việt" },
      {
        name: "description",
        content:
          "Giày Thượng Đình bền bỉ, dễ mang, giá hợp lý — phù hợp đi học, đi làm, dạo phố. Sản xuất tại Hà Nội từ năm 1957.",
      },
      { property: "og:title", content: "Giày Thượng Đình — Di sản Việt hồi sinh" },
      {
        property: "og:description",
        content:
          "Tự tin sải bước mỗi ngày cùng Thượng Đình. Giày Việt thoải mái, bền bỉ, giá hợp lý — mang theo bản sắc Việt trong từng bước chân.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* 1. Hero — StoryBrand: Character + Headline */}
        <Hero />
        {/* 2. Problem */}
        <Problem />
        {/* 3. Guide — Thuong Dinh as the trusted Vietnamese brand */}
        <Guide />
        {/* 4. Collections — products */}
        <Collections />
        {/* 5. Plan — 3 simple steps */}
        <Plan />
        {/* 6. Success + Failure */}
        <SuccessFailure />
        {/* 7. Customer reviews */}
        <Reviews />
        {/* 8. How to buy */}
        <HowToBuy />
        {/* 9. Payment options */}
        <Payments />
        {/* 10. Final CTA */}
        <CTA />
      </main>
      {/* 11. Footer + Contact */}
      <Footer />
    </div>
  );
}
