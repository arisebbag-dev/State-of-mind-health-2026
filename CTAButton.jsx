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
      "bg-apricot text-forest-deep hover:bg-apricot-deep active:scale-95 relative group overflow-hidden",
    secondary:
      "border-2 border-forest text-forest hover:bg-forest hover:text-canvas active:scale-95",
    accent:
      "bg-forest text-canvas hover:bg-forest-deep active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-200 no-underline
    focus:outline-none focus:ring-2 focus:ring-apricot focus:ring-offset-2
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
