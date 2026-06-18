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
      "bg-slate text-canvas hover:bg-slate-deep active:scale-95 relative group overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
    secondary:
      "border-2 border-slate text-slate-deep hover:bg-slate/10 active:scale-95 transition-all duration-300",
    accent:
      "bg-sage text-canvas hover:bg-sage-deep active:scale-95 transition-all duration-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-300 no-underline
    focus:outline-none focus:ring-2 focus:ring-slate focus:ring-offset-2
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <Link href={href} className={classes} {...props}>
      {/* Animated shimmer effect on primary button */}
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -left-full group-hover:left-full transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      )}
      <span className="relative">{children}</span>
    </Link>
  );
}
