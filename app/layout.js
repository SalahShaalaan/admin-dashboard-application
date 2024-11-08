import Header from "./_components/Header/Header";
import Sidebar from "./_components/Sidebar";
import "./globals.css";
import { Nunito } from "next/font/google"
import { ThemeProvider } from "./ThemeProvider";

const nunitoFont = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: " DashStack | Dashboard ",
  description: "Admin dashboard to manage your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoFont.className} antialiased dark:bg-darkBg`}>
        <ThemeProvider>
          <div className=" bg-white text-black dark:bg-darkBg dark:text-darkText">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-4 mt-8 container mx-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}