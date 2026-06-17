import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest focus-visible:ring-offset-canvas";

const sizes = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary:
    "bg-forest text-canvas shadow-card hover:bg-forest-deep hover:-translate-y-0.5 hover:shadow-soft",
  secondary:
    "bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-sage-mist",
  accent:
    "bg-apricot text-forest-deep shadow-card hover:bg-apricot-deep hover:text-canvas hover:-translate-y-0.5",
};

export default function CTAButton({
  href = "/contact",
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
