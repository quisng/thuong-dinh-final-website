import { Wallet, Timer, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: Wallet,
    title: "Giày đắt đỏ, vượt quá ngân sách",
    text: "Một đôi sneaker ngoại nhập có giá từ 1 đến 3 triệu đồng cho nhu cầu mang hằng ngày — quá sức với phần lớn học sinh, sinh viên và người đi làm.",
  },
  {
    icon: Timer,
    title: "Giày rẻ tiền, nhanh hỏng",
    text: "Đôi giày 100k mua ngoài chợ chỉ trụ được vài tuần. Bong đế, rách vải — rồi bạn lại tiếp tục mua mới, mua mãi không hết.",
  },
  {
    icon: HeartCrack,
    title: "Thương hiệu xa lạ, thiếu kết nối",
    text: "Những logo nước ngoài không kể câu chuyện của bạn. Đâu rồi đôi giày mang hơi thở Hà Nội buổi sớm, Sài Gòn lúc chiều?",
  },
];

export function Problem() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Vấn đề thường gặp
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
            Tìm một đôi giày phù hợp mỗi ngày — không nên{" "}
            <span className="italic text-primary">phức tạp đến vậy.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Hầu hết người tiêu dùng Việt đều gặp ba nỗi lo giống nhau mỗi mùa —
            và chưa có một giải pháp thật sự thoả đáng.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 font-display text-6xl font-black text-muted/60 leading-none">
                0{i + 1}
              </div>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
