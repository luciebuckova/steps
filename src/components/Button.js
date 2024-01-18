export default function Button({ children, onClick, bgColor, textColor }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}>
      {children}
    </button>
  );
}
