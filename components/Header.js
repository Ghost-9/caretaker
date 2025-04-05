import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-green-700">CareTaker</div>
      <nav className="space-x-6">
        <Link href="#health" className="hover:text-green-600">Health</Link>
        <Link href="#about" className="hover:text-green-600">About Us</Link>
        <Link href="#team" className="hover:text-green-600">Team</Link>
        <Link href="#story" className="hover:text-green-600">Story</Link>
        <Link href="#blog" className="hover:text-green-600">Blog</Link>
      </nav>
      <a
        href="#contact"
        className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Contact
      </a>
    </header>
  );
}