import { Provider } from "react-redux";
import { useStore } from "../store";
import { GlobalStyles } from "../styles/globalStyles";
import { AppProps } from "next/app";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useDarkMode } from "../hooks/useDarkMode";
import { Theme, lightTheme, darkTheme } from "../styles/Theme";

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const [theme, toggleTheme] = useDarkMode();
  const currentTheme: object = theme === "light" ? lightTheme : darkTheme;

  return (
    <Provider store={store}>
      <Theme theme={currentTheme}>
        <GlobalStyles />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </Theme>
    </Provider>
  );
}
