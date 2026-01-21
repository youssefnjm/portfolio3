
export default function GradientText({
  children,
  className = '',
  colors = [
    "#C20A0A", // main red
    "#FF6B6B", // lighter red/pink accent
    "#FFD93D", // golden yellow for contrast
    "#FF6B6B", // lighter red/pink accent
    "#C20A0A", // main red
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