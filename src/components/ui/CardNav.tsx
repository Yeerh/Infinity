import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type LinkItem = {
  label: string;
  ariaLabel: string;
  href?: string;
};

type NavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: LinkItem[];
};

type Ease =
  | "power1.out"
  | "power2.out"
  | "power3.out"
  | "power4.out"
  | "expo.out"
  | "circ.out";

interface CardNavProps {
  logo?: string;
  logoAlt?: string;

  items: NavItem[];

  baseColor?: string; // cor do ícone/hamburger
  menuColor?: string; // cor do fundo do menu overlay
  buttonBgColor?: string;
  buttonTextColor?: string;

  ease?: Ease;
}

export default function CardNav({
  logo,
  logoAlt = "Logo",
  items,
  baseColor = "#fff",
  menuColor = "#000",
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
  ease = "power3.out",
}: CardNavProps) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  cardRefs.current = [];

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el) cardRefs.current.push(el);
  };

  const tl = useRef<gsap.core.Timeline | null>(null);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  const mapped = useMemo(() => items, [items]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    // estado inicial (fechado)
    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(panel, { y: -12, autoAlpha: 0 });
    gsap.set(cardRefs.current, { y: 18, autoAlpha: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(overlay, { autoAlpha: 1, duration: 0.18, ease }, 0)
      .set(overlay, { pointerEvents: "auto" }, 0)
      .to(panel, { y: 0, autoAlpha: 1, duration: 0.25, ease }, 0.05)
      .to(
        cardRefs.current,
        { y: 0, autoAlpha: 1, duration: 0.32, stagger: 0.06, ease },
        0.12
      );

    return () => {
      tl.current?.kill();
      tl.current = null;
    };
  }, [ease, mapped.length]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (open) {
      tl.current?.play(0);
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC fecha
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Barra superior (fica no topo) */}
      <div className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3">
            {logo ? (
              <img src={logo} alt={logoAlt} className="h-8 w-8" />
            ) : (
              <div
                className="h-8 w-8 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #5D2A9B 0%, #502F78 100%)",
                }}
              />
            )}
            <span className="font-bold text-white">InfinityWeb</span>
          </a>

          <button
            type="button"
            onClick={toggle}
            className="rounded-full px-4 py-2 text-sm font-semibold border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10"
            style={{ color: baseColor }}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Overlay/Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60]"
        style={{ background: `${menuColor}E6` }}
        onMouseDown={(e) => {
          // clique fora fecha
          if (e.target === overlayRef.current) close();
        }}
      >
        <div ref={panelRef} className="mx-auto max-w-7xl px-6 pt-24 pb-10">
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-sm">Navigation</div>
            <button
              type="button"
              onClick={close}
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: buttonBgColor, color: buttonTextColor }}
            >
              Close
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {mapped.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                ref={addCardRef}
                className="rounded-2xl p-6 border border-white/10 backdrop-blur"
                style={{ background: item.bgColor, color: item.textColor }}
              >
                <div className="text-lg font-extrabold">{item.label}</div>

                <div className="mt-4 flex flex-col gap-2">
                  {item.links.map((l, i) => (
                    <a
                      key={`${l.label}-${i}`}
                      href={l.href ?? "#"}
                      aria-label={l.ariaLabel}
                      onClick={() => close()}
                      className="text-sm opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 h-[1px] bg-white/10" />

                <div className="mt-4 text-xs text-white/70">
                  InfinityWeb Navigation
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
