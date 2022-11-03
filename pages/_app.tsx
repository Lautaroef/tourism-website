import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import type { AppProps } from "next/app";

// state
import { AppProvider } from "./components/Context";
import store from "./components/redux/store";
import { Provider } from "react-redux";

// components
import Header from "./components/Header";
import Footer from "./components/Footer/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
