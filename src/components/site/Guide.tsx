import lifestyle from "@/assets/lifestyle-street.jpg";
import { ShieldCheck, Sparkles, Tag, Users } from "lucide-react";

const trust = [
  { icon: ShieldCheck, label: "Thương hiệu di sản Việt", sub: "Tin dùng từ năm 1957" },
  { icon: Sparkles, label: "Bền bỉ cho mọi ngày", sub: "Kiểm định trên 10.000 bước chân" },
  { icon: Tag, label: "Giá cả hợp lý", sub: "Chỉ từ 149.000₫" },
  { icon: Users, label: "Cho học sinh, người đi làm & gia đình", sub: "Mọi lứa tuổi, mọi hành trình" },
];

export function Guide() {
  return (
    <section id="story" className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/50">
            <img
              src={lifestyle}
              alt="Cô gái trẻ dạo phố Hà Nội cùng đôi giày vải Thượng Đình"
              width={1280}
              height={1024}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-2xl bg-card shadow-elegant border border-border px-5 py-4 max-w-[220px]">
            <div className="font-display italic text-sm text-foreground leading-snug">
              "Ông tôi từng mang. Giờ đến lượt tôi."
            </div>
            <div className="mt-2 text-xs text-muted-foreground">— Linh, 22 tuổi, Hà Nội</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Người đồng hành cùng bạn
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
            Thượng Đình đã sánh bước cùng{" "}
            <span className="italic text-primary">bao thế hệ người Việt.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Gần bảy thập kỷ qua, đôi giày vải Thượng Đình đã đưa học sinh đến trường,
            công nhân vào xưởng và những gia đình Việt đi qua bao mùa nắng mưa.
            Hôm nay, chúng tôi gìn giữ di sản ấy bằng sự thoải mái hiện đại,
            thiết kế tươi mới — và mức giá tử tế mà cha mẹ chúng ta từng tin dùng.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-start gap-3 rounded-2xl bg-card/70 border border-border p-4"
              >
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
