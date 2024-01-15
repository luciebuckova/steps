export default function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: '#7950f2', color: '#fff' }}>
      {name}
    </button>
  );
}
