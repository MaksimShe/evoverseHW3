import './globals.css';

export const metadata = { title: 'Tokyo Slots' };

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ru">
    <body className="min-h-screen bg-gradient-to-b from-white to-gray-100">{children}</body>
    </html>
  );
}