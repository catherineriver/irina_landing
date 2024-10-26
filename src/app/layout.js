import "./globals.css";

export const metadata = {
  title: "Онлайн-курс по управлению уровнем энергии",
  description: "В результате курса у вас будет полноценная инструкция к себе и своим внутренним батарейкам"
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