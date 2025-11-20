import "./globals.css";

export const metadata = {
  title: "Fusetag Connections",
  description: "Connect your marketing stack with one-click Google-inspired UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
