
import MobileNav from "./_Main/MobilieNav/page";
import Header from "./_shared/Header/page";
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
         <Header />
        {children}

        <MobileNav />
      </body>
    </html>
  );
}
