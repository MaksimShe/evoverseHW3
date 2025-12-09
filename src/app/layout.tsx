import './globals.css';

export const metadata = { title: 'Tokyo Slots' };

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ru">
    <head>
      <link rel="preload" as="image" href="/slots/seven.svg" />
      <link rel="preload" as="image" href="/slots/cash.svg" />
      <link rel="preload" as="image" href="/slots/gift.svg" />
      <link rel="preload" as="image" href="/slots/coins.svg" />
      <link rel="preload" as="image" href="/slots/star.svg" />
      <link rel="preload" as="image" href="/slots/treasure.svg" />
    </head>
    <body className="min-h-screen bg-gradient-to-b from-white to-gray-100">{children}</body>
    </html>
  );
}