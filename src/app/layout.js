
import { Archivo } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Logo from "@/components/common/Logo";



const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopta",
  description: "Shopta waitlist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased`}
      >
        <SmoothScrollProvider>
        {children}
        </SmoothScrollProvider>

        <Toaster 
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              padding: '16px',
              borderRadius: '10px',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
