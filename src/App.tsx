import React from "react";
import { ThemeProvider } from "styled-components"
import {GlobalStyle} from "./style";
import {theme} from "./Theme";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";
import Main from "./components/containers/Main";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <Main />
          <Footer />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
