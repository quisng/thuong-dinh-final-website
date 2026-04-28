import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logothuongdinh from "../../assets/logothuongdinh.jpg";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-foreground text-background pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-background/15">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={logothuongdinh}
                alt="Logo Thượng Đình"
                className="w-10 h-10 object-cover"
              />
            </div>
              <div>
                <div className="font-display font-black text-xl">Thượng Đình</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/50">
                  Từ năm 1957
                </div>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Giày Việt thoải mái cho mọi hành trình. Giá tử tế, vải bền bỉ và
              một mảnh di sản trong từng bước chân.
            </p>

            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">
              Mua sắm
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#collections" className="text-background/80 hover:text-primary-glow">Đến trường</a></li>
              <li><a href="#collections" className="text-background/80 hover:text-primary-glow">Streetwear</a></li>
              <li><a href="#collections" className="text-background/80 hover:text-primary-glow">Hằng ngày</a></li>
              <li><a href="#collections" className="text-background/80 hover:text-primary-glow">Heritage</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">
              Hỗ trợ
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-to-buy" className="text-background/80 hover:text-primary-glow">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow">Bảng size</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow">Chính sách đổi trả</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-glow">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">
              Liên hệ
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                277 Nguyễn Trãi, Thanh Xuân, Hà Nội
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary-glow" />
                1900 1957
              </li>
              <li className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary-glow" />
                hello@thuongdinh.vn
              </li>
            </ul>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-background/50 mb-3">
                Chấp nhận thanh toán
              </div>
              <div className="flex flex-wrap gap-2">
                {["VISA", "MC", "JCB", "MoMo", "ZaloPay", "VNPay", "COD"].map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded-md bg-background/10 border border-background/15 text-[11px] font-bold tracking-wider"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <div>© 2026 Giày Thượng Đình · Thương hiệu di sản Việt.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Bảo mật</a>
            <a href="#" className="hover:text-background">Điều khoản</a>
            <a href="#" className="hover:text-background">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
