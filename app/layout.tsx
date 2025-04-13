import './globals.css';
import { AuthBroadcastProvider } from './providers';

export const metadata = {
  title: 'CareTaker - Your Trusted Healthcare Partner',
  description: 'Empowering your health and uplifting your life with trusted healthcare services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body> 
        {children}
      </body>
    </html>
  );
}