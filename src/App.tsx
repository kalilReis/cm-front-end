import React from "react";

import GlobalStyle from "./style";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";
import Main from "./components/containers/Main";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
