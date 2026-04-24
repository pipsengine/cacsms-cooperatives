import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Cacsms Cooperatives',
  description: 'A complete cooperative management system built for transparency, growth, and accountability.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
