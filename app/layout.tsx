import './globals.css';
import type { Metadata } from 'next';

import { ToasterContext } from '@/context/toaster-context';
import { AuthContext } from '@/context/auth-context';

export const metadata: Metadata = {
  title: 'Messenger',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
