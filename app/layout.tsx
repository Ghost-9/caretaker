import './globals.css';
import {constants} from '@/app/config/constants';

export const metadata = {
  title: constants.SITE_NAME,
  description: constants.DESCRIPTION,
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