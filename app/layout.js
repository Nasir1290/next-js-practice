import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>

      <body >
        <div>
          <ul className=" p-4 border border-gray-300 bg-gray-400 flex gap-6">
            <li>

              <CustomLink path={"/"}>
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink path={"/dashboard"}>
                DashBoard
              </CustomLink>
            </li>
            <li>
              <CustomLink  path={"/dashboard/settings"}>
                Settings
              </CustomLink>
            </li>
          </ul>
        </div>
        {children}

      </body>
    </html>
  );
}
