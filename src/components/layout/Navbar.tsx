import CardNav from "@/components/ui/Cardnav";
import logo from "@/assets/logo.png"; // opcional (se existir)

export function Navbar() {
  const items = [
    {
      label: "Sobre",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "InfinityWeb", ariaLabel: "Ir para Sobre", href: "#about" },
        { label: "Por que assinar", ariaLabel: "Ir para Sobre", href: "#about" },
      ],
    },
    {
      label: "Serviços",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Sites", ariaLabel: "Ir para Serviços", href: "#services" },
        { label: "Sistemas", ariaLabel: "Ir para Serviços", href: "#services" },
      ],
    },
    {
      label: "Contato",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Fale conosco", ariaLabel: "Ir para Contato", href: "#contact" },
        { label: "Orçamento", ariaLabel: "Ir para Contato", href: "#contact" },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo} // se não tiver logo, apague essa linha
      logoAlt="InfinityWeb Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
