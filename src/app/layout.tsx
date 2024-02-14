import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "./nexttoast";
import "react-toastify/dist/ReactToastify.css";
import Camera from "@/components/webCam/Camera";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabine",
  description: "Cabine de Serviços Digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[url('/fundo.svg')]">
        {/* {children}
        <ToastContainer /> */}
        <Camera />
      </body>
    </html>
  );
}
