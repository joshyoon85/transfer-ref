import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { globalFont } from "@/utils/fonts/globalFont";

export const metadata = {
  title: "Soccer Rumor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={globalFont.className}>
      {/* flex: 정렬 */}
      {/* flex-col: 정렬의 방향을 위에서 아래로 */}
      <body className="flex flex-col">
        <header className="top-0 max-w-screen-xl w-full mx-auto">
          <Header />
        </header>
        {/* grow: 부족한 공간만큼 늘려준다*/}
        <main className="grow w-full max-w-screen-lg mx-auto">{children}</main>

        <footer className="bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
