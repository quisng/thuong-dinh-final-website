import { Building2, Wallet, CreditCard, BanknoteArrowUp } from "lucide-react";

const methods = [
  { icon: Building2, name: "Chuyển khoản ngân hàng", sub: "Vietcombank, Techcombank, BIDV…" },
  { icon: Wallet, name: "Ví điện tử", sub: "MoMo · ZaloPay · VNPay" },
  { icon: CreditCard, name: "Thẻ tín dụng / ghi nợ", sub: "Visa · Mastercard · JCB" },
  { icon: BanknoteArrowUp, name: "Thanh toán khi nhận hàng", sub: "Trả tiền khi nhận giày (COD)" },
];

export function Payments() {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Thanh toán an toàn
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground text-balance leading-tight">
              Thanh toán theo cách bạn muốn — <span className="italic text-primary">an tâm tuyệt đối.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-pretty">
              Đa dạng phương thức thanh toán giúp bạn mua sắm an toàn và tiện lợi.
              Từ ví điện tử đến nhận hàng trả tiền — chọn cách phù hợp nhất với bạn.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {methods.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl bg-card border border-border p-5 flex items-center gap-4 hover:shadow-soft transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <m.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
