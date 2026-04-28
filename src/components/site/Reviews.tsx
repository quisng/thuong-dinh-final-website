import { Star } from "lucide-react";

const reviews = [
  {
    name: "Minh Anh",
    role: "Sinh viên · Hà Nội",
    avatar: "MA",
    text: "Mình mua đôi School Collection để đi học mỗi ngày, đi suốt một học kỳ vẫn còn rất bền. Giá hợp lý mà form lại đẹp.",
    rating: 5,
  },
  {
    name: "Quốc Bảo",
    role: "Nhân viên văn phòng · Sài Gòn",
    avatar: "QB",
    text: "Đôi slip-on đi cả ngày không đau chân. Đi từ văn phòng ra cà phê chiều vẫn ổn áp, lại dễ phối đồ.",
    rating: 5,
  },
  {
    name: "Linh Nguyễn",
    role: "Tín đồ streetwear · Đà Nẵng",
    avatar: "LN",
    text: "Màu mustard retro cực chất. Chụp ảnh lên hình rất đẹp, mà lại là thương hiệu Việt — mình rất tự hào khi mang.",
    rating: 5,
  },
  {
    name: "Chị Hương",
    role: "Phụ huynh · Hải Phòng",
    avatar: "CH",
    text: "Mua cho hai bé đi học. Giặt nhiều lần vẫn trắng đẹp, đế chắc, không bị bong như mấy đôi mua chợ trước đây.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Câu chuyện thật
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
            Từ học sinh, người đi làm đến{" "}
            <span className="italic text-primary">mọi gia đình Việt.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-mustard text-mustard" />
                ))}
              </div>
              <p className="font-display italic text-lg lg:text-xl text-foreground leading-relaxed text-pretty">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-11 w-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
