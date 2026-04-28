import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import logothuongdinh from "../../assets/logothuongdinh.jpg";

const links = [
  { href: "#home", label: "Trang chủ" },
  { href: "#collections", label: "Bộ sưu tập" },
  { href: "#story", label: "Câu chuyện thương hiệu" },
  { href: "#why-us", label: "Vì sao chọn chúng tôi" },
  { href: "#how-to-buy", label: "Hướng dẫn mua hàng" },
  { href: "#reviews", label: "Đánh giá" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fff3ea]/95 backdrop-blur-xl border-b border-red-100 shadow-soft"
          : "bg-[#fff3ea]/95 backdrop-blur-xl border-b border-red-100 shadow-soft"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={logothuongdinh}
                alt="Logo Thượng Đình"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display font-black text-lg text-foreground">
                Thượng Đình
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Từ năm 1957
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#collections"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow hover:scale-[1.03] transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              Mua ngay
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-5 border-t border-border pt-4 fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
