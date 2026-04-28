import heroShoes from "@/assets/hero-shoes.jpg";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden gradient-heritage"
    >
      <div className="absolute inset-0 pattern-stamp opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6 fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Di sản Việt · Hồi sinh
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-foreground text-balance">
            Bước đi thoải mái.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-primary">Mang theo</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-mustard/50 -z-0" />
            </span>{" "}
            bản sắc Việt.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
            Giày Thượng Đình bền bỉ, dễ mang, giá hợp lý — phù hợp cho đi học,
            đi làm, dạo phố và mọi hành trình hằng ngày trên khắp Việt Nam.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.03] transition-all"
            >
              Xem sản phẩm bán chạy
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-background/50 backdrop-blur px-7 py-3.5 font-semibold text-foreground hover:bg-foreground hover:text-background transition-all"
            >
              Khám phá câu chuyện
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-mustard text-mustard" />
              ))}
              <span className="ml-2 text-sm font-medium text-foreground">
                4.9/5 · hơn 12.400 đánh giá
              </span>
            </div>
            <div className="h-5 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">68 năm</span> đồng hành cùng người Việt
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:col-span-6 relative">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/20 via-mustard/15 to-transparent blur-3xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden bg-cream shadow-elegant border border-border/40">
              <img
                src={heroShoes}
                alt="Giày vải Thượng Đình kinh điển màu trắng đế đỏ"
                width={1536}
                height={1280}
                className="w-full h-auto float"
              />
            </div>

            {/* Floating price tag */}
            <div className="absolute -left-4 lg:-left-8 top-10 rounded-2xl bg-card shadow-elegant border border-border p-4 fade-up hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Heritage Classic
              </div>
              <div className="mt-1 font-display font-black text-2xl text-foreground">
                189.000₫
              </div>
              <div className="text-xs text-primary font-semibold">Còn hàng</div>
            </div>

            {/* Floating made-in badge */}
            <div className="absolute -right-2 lg:-right-6 bottom-10 rounded-2xl gradient-primary text-primary-foreground shadow-glow p-4 fade-up hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest opacity-80">
                Sản xuất tại
              </div>
              <div className="font-display font-black text-xl">Hà Nội 🇻🇳</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 lg:mt-24 border-y border-border bg-background/40 backdrop-blur overflow-hidden py-4">
        <div className="marquee flex gap-12 whitespace-nowrap font-display italic text-2xl text-foreground/60">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center">
              <span>★ Thoải mái mỗi bước chân</span>
              <span>★ Made in Vietnam</span>
              <span>★ Từ năm 1957</span>
              <span>★ Miễn phí giao hàng cho đơn từ 500.000₫</span>
              <span>★ Đổi trả trong 30 ngày</span>
              <span>★ Di sản Việt hồi sinh</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
