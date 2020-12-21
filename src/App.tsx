import React from 'react'
import { Provider } from "react-redux"
import store from "./store"
import RouterConfig from "./router"
import { Helmet, HelmetProvider } from "react-helmet-async"
import initReactFastclick from 'react-fastclick'

initReactFastclick();

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>app</title>
        </Helmet>
        <RouterConfig />
      </HelmetProvider>
    </Provider>
  );
}

export default App