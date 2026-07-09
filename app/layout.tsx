import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Computer Generation • Soluzioni IT per Aziende',
  description: 'Server e workstation ricondizionati enterprise per aziende. Progettazione infrastrutture IT, garanzie estese e supporto dedicato.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-slate-950 text-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
