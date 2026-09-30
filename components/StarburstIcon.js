export default function StarburstIcon({ className = "w-6 h-6", fill = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 50.0,2.0 L 56.6,16.7 L 68.4,5.7 L 68.9,21.7 L 83.9,16.1 L 78.3,31.1 L 94.3,31.6 L 83.3,43.4 L 98.0,50.0 L 83.3,56.6 L 94.3,68.4 L 78.3,68.9 L 83.9,83.9 L 68.9,78.3 L 68.4,94.3 L 56.6,83.3 L 50.0,98.0 L 43.4,83.3 L 31.6,94.3 L 31.1,78.3 L 16.1,83.9 L 21.7,68.9 L 5.7,68.4 L 16.7,56.6 L 2.0,50.0 L 16.7,43.4 L 5.7,31.6 L 21.7,31.1 L 16.1,16.1 L 31.1,21.7 L 31.6,5.7 L 43.4,16.7 Z" />
    </svg>
  );
}
