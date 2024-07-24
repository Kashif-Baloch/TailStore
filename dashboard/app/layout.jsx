import "./globals.css";
import SideBar from "./components/SideBar";
import { StateProvider } from "./contexter/contexter";

export const metadata = {
  title: "DashBoard | TailStore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <SideBar>{children}</SideBar>
        </StateProvider>
      </body>
    </html>
  );
}
