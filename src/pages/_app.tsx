import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../redux/store";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default App;
