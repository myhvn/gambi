"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/layout.css";
const inter = Inter({ subsets: ["latin"] });

import Sidebar from "@/components/sidebar";
import Navigation from "@/components/navigation";
import { AppProvider } from "@/context/app";
import Mobilefooter from "@/components/mobilefooter";
import Rightbar from "@/components/rightbar";
import Content from "@/components/content";
import { Tooltip } from "react-tooltip";
import Modal from "@/components/modal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="next">
          <AppProvider>
            {" "}
            <div className="wrap next-844n9s">
              <Sidebar />
              <div className="main-content next-844n9s">
                <Navigation />
                <Content>{children}</Content>
                <Mobilefooter />
              </div>
              <Rightbar />
            </div>
            <Modal />
          </AppProvider>
          <Tooltip id="tooltip" />
        </div>
      </body>
    </html>
  );
}
