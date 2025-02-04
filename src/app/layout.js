import "./globals.css";

export const metadata = {
  title: "Irina Rossa",
  description: "Онлайн-курс по самоценности",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Nunito:wght@400;500;700&display=swap"
          rel="stylesheet"/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
