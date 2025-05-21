import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const SourceSans = Source_Sans_3({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata = {
  title: "Health71",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SourceSans.className}>{children}</body>
    </html>
  );
}
