import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-coral text-white hover:bg-coral-deep shadow-soft hover:shadow-soft-lg",
    secondary:
      "bg-transparent text-olive-deep border-2 border-olive/40 hover:border-olive hover:bg-olive/5",
    ghost:
      "bg-white/70 text-olive-deep border border-olive/20 hover:bg-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[0.95rem]",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 no-underline active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-sand ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
