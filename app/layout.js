
import "./globals.css";


export const metadata = {
  title: "Esthetic N. Del Rosario",
  description: "Best skin care services here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
