
export default function GradientText({
  children,
  className = '',
  colors = [
    "#581C87", // main deep purple (your base)
    "#A855F7", // vibrant amethyst accent
    "#00D4FF", // electric cyan for high-energy contrast
    "#A855F7", // vibrant amethyst accent
    "#581C87", // main deep purple (your base)
  ],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
    fontFamily: `Boldonse, system-ui`,
  };

  return (
    <div className={`animated-gradient-text text-xl md:text-2xl m-10 p-5${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}