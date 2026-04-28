import { MousePointerClick, Ruler, ShoppingCart, CreditCard, Truck, MessageCircle } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Chọn bộ sưu tập", text: "Khám phá Đến trường, Streetwear, Hằng ngày hoặc Heritage." },
  { icon: Ruler, title: "Chọn đúng size", text: "Tham khảo bảng size Việt Nam của chúng tôi để có size vừa vặn nhất." },
  { icon: ShoppingCart, title: "Thêm vào giỏ hàng", text: "Kiểm tra lại đôi giày yêu thích và tiến hành thanh toán." },
  { icon: CreditCard, title: "Chọn hình thức thanh toán", text: "Chuyển khoản, MoMo, ZaloPay, VNPay, thẻ hoặc COD." },
  { icon: Truck, title: "Nhận hàng tận nơi", text: "Miễn phí giao hàng toàn quốc cho đơn từ 500.000₫." },
  { icon: MessageCircle, title: "Cần hỗ trợ?", text: "Đổi trả trong 30 ngày. Đội ngũ luôn sẵn sàng qua Zalo & hotline." },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Hướng dẫn mua hàng
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
            Mua giày Thượng Đình online — <span className="italic text-primary">đơn giản như đi bộ.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-card border border-border p-7 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-3xl font-black text-muted/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1.5">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
