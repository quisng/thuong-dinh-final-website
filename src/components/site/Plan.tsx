const steps = [
  {
    n: "01",
    title: "Chọn phong cách của bạn",
    text: "Lựa một bộ sưu tập hợp với lối sống — đến trường, dạo phố, đi làm hay biểu tượng cổ điển.",
  },
  {
    n: "02",
    title: "Tìm đúng size",
    text: "Tham khảo bảng size và thông tin chi tiết để chọn đôi giày vừa chân nhất.",
  },
  {
    n: "03",
    title: "Tự tin sải bước",
    text: "Nhận giày, tận hưởng sự thoải mái, độ bền và niềm tự hào Việt mỗi ngày.",
  },
];

export function Plan() {
  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 pattern-stamp opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-4">
            Lộ trình của bạn
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-balance leading-tight">
            Tìm đôi giày phù hợp chỉ với{" "}
            <span className="italic text-primary-glow">ba bước đơn giản.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent" />

          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center font-display font-black text-2xl text-primary-foreground shadow-glow mb-6 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-background/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
