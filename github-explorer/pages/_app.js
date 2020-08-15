import { Provider } from "react-redux";
import { useStore } from "../store";
import "../styles/global.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}
