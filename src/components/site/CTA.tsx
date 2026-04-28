import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative rounded-[2.5rem] p-10 lg:p-16 bg-foreground text-background overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-mustard/30 blur-3xl" />
          <div className="absolute inset-0 pattern-stamp opacity-20" />

          <div className="relative max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-5">
              Đến lượt bạn
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-black leading-[1.05] text-balance">
              Sẵn sàng tìm đôi giày Việt <span className="italic text-primary-glow">cho mỗi ngày của bạn?</span>
            </h2>
            <p className="mt-6 text-lg text-background/75 max-w-2xl text-pretty">
              Chọn đôi giày hợp với lối sống, ủng hộ di sản Việt và giữ cho bạn
              cảm giác thoải mái mỗi ngày.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#collections"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.03] transition-all"
              >
                Mua ngay
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full border-2 border-background/25 px-7 py-3.5 font-semibold text-background hover:bg-background hover:text-foreground transition-all"
              >
                Xem bộ sưu tập
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
