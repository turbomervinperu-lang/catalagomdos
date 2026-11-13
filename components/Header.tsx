import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={120} height={60} priority />
        {/* Banner */}
        <Image src="/banner.jpg" alt="Banner" width={800} height={200} className="mt-2" priority />
      </div>
    </header>
  );
}
