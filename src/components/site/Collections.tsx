import school from "@/assets/collection-school.jpg";
import street from "@/assets/collection-street.jpg";
import work from "@/assets/collection-work.jpg";
import heritage from "@/assets/collection-heritage.jpg";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    name: "Bộ sưu tập Đến trường",
    tag: "Dành cho học sinh, sinh viên",
    desc: "Giày vải sạch sẽ, bền bỉ, giá hợp lý — đồng hành cùng bạn suốt năm học và nhiều năm về sau.",
    price: "149.000₫ – 219.000₫",
    img: school,
    accent: "from-primary/15 to-transparent",
  },
  {
    name: "Bộ sưu tập Thể Thao",
    tag: "Cảm hứng retro",
    desc: "Thiết kế năng động, chất liệu bền và êm — đồng hành cùng bạn trong những cuộc chơi tràn đầy năng lượng.",
    price: "229.000₫ – 329.000₫",
    img: street,
    accent: "from-mustard/30 to-transparent",
  },
  {
    name: "Đi làm & Hằng ngày",
    tag: "Gọn nhẹ mỗi ngày",
    desc: "Slip-on êm chân cho cả ngày dài — đệm nhẹ, vải thoáng khí, mang vào là đi.",
    price: "189.000₫ – 269.000₫",
    img: work,
    accent: "from-accent/40 to-transparent",
  },
  {
    name: "Heritage Classic",
    tag: "Biểu tượng, làm mới",
    desc: "Dáng giày Thượng Đình nguyên bản, được tinh chỉnh cho hôm nay — đế gum, viền đỏ, đường nét vượt thời gian.",
    price: "259.000₫ – 379.000₫",
    img: heritage,
    accent: "from-primary/20 to-transparent",
  },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Bộ sưu tập
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
              Bốn bộ sưu tập,{" "}
              <span className="italic text-primary">một nhịp bước chung.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Hãy chọn đôi giày hợp với một ngày của bạn. Mọi mẫu đều được sản xuất
            tại Hà Nội từ cùng loại vải canvas bền bỉ và mức giá thật lòng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((c) => (
            <article
              key={c.name}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-cream">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.accent} z-10 pointer-events-none`}
                />
                <img
                  src={c.img}
                  alt={c.name}
                  width={1024}
                  height={820}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground">
                  {c.tag}
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-black text-foreground">
                    {c.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Chỉ từ
                    </div>
                    <div className="font-bold text-foreground text-sm">{c.price}</div>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground text-pretty">{c.desc}</p>

                <a
                  href="#how-to-buy"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-semibold group/btn"
                >
                  Xem bộ sưu tập
                  <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover/btn:rotate-45 transition-transform">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
