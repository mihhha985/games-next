import React from 'react';
import '@/styles/globals.scss';
import {games} from "@/file";

export const Context = React.createContext(null);
export default function App({ Component, pageProps }) {
  return  <Context.Provider value={{games}}>
            <Component {...pageProps} />
          </Context.Provider>
}
