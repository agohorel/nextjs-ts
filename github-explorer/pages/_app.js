import { Provider } from "react-redux";
import { useStore } from "../store";
import { GlobalStyles } from "../styles/globalStyles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useDarkMode } from "../hooks/useDarkMode";
import { Theme, lightTheme, darkTheme } from "../styles/Theme";

console.log(lightTheme, darkTheme);

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [theme, toggleTheme] = useDarkMode();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <Provider store={store}>
      <Theme theme={currentTheme}>
        <GlobalStyles />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </Theme>
    </Provider>
  );
}
