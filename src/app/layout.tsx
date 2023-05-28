import SessionContext from "./(site)/context/sessionContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatt app",
  description: "Chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionContext>
          <ToasterContext />
          {children}
        </SessionContext>
      </body>
    </html>
  );
}
