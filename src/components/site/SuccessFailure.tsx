import { Check, X } from "lucide-react";

const wins = [
  "Thoải mái di chuyển mỗi ngày",
  "Tự tin hơn ngay với những bộ đồ giản dị",
  "Chất lượng tốt với mức giá hợp lý",
  "Ủng hộ một thương hiệu Việt",
  "Cách mới để khoác lên mình di sản Việt",
];

const losses = [
  "Vài tháng lại phải thay một đôi giày rách",
  "Tốn nhiều tiền hơn dự tính cho hàng ngoại",
  "Mang đôi giày không thật sự là mình",
  "Bỏ lỡ một mảnh ghép văn hoá Việt",
];

export function SuccessFailure() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Success */}
        <div className="relative rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant overflow-hidden">
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-mustard/30 blur-3xl" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80 mb-4">
              Thành công của bạn
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-black leading-tight text-balance">
              Tự tin sải bước mỗi ngày.
            </h3>
            <p className="mt-4 text-primary-foreground/85 text-pretty">
              Cùng Thượng Đình, bạn không chỉ mua một đôi giày — bạn mang theo
              một mảnh di sản Việt trong từng bước chân.
            </p>

            <ul className="mt-7 space-y-3">
              {wins.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-background/20 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-primary-foreground/95 font-medium">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Failure */}
        <div className="relative rounded-3xl p-8 lg:p-10 bg-secondary border border-border">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Cái giá của sự chần chừ
          </div>
          <h3 className="font-display text-3xl lg:text-4xl font-black leading-tight text-foreground text-balance">
            Đừng phí tiền cho những đôi giày nhanh hỏng.
          </h3>
          <p className="mt-4 text-muted-foreground text-pretty">
            Không có đôi giày phù hợp, bạn cứ mãi mua đi mua lại những đôi rẻ
            mà mau hỏng — tốn nhiều hơn về lâu dài, lại chẳng bao giờ thật sự ưng ý.
          </p>

          <ul className="mt-7 space-y-3">
            {losses.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <X className="h-3.5 w-3.5 text-foreground/70" />
                </span>
                <span className="text-foreground/80">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
