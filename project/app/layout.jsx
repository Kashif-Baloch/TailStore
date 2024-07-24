import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import { CartProvider } from "../lib/cui";
import { Auth0Provider } from "../lib/auth";
import { StateProvider } from "./context/context";

export const metadata = {
  title: "Tailstore | Wear the Tail",
  description:
    "Tailstore is an Eccomerce website. Here you can buy your favorite Products",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Auth0Provider
            domain="dev-kashifnawaz.us.auth0.com"
            clientId="Hd0yFHL3IjdjspWnv9TyBYiUksCKSycw"
            authorizationParams={{
              redirect_uri: "http://localhost:3000/",
            }}
          >
            <StateProvider>
              <CartProvider currency="PKR">
                <TopBar />
                <Navbar />
                {children}
                <Footer />
              </CartProvider>
            </StateProvider>
          </Auth0Provider>
        </body>
      </html>
    </>
  );
}
