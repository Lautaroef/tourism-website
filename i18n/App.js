import React, { useState } from "react";
import GetUserLocation from "./Components/GetUserLocation";
import "./index.css";
import Header from "./Pages/Home/Header/Header";
import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
import translate from "./i18n/translate";

function App() {
  const [Language, setLanguage] = useState(LOCALES.ENGLISH);
  return (
    <>
      <I18nProvider locale={Language}>
        {translate("edit", { path: <Header /> })}
        <br />
      </I18nProvider>
      <button onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button>
      <button onClick={() => setLanguage(LOCALES.PORTUGUESE)}>
        Portuguese
      </button>
      <button onClick={() => setLanguage(LOCALES.ESPANOL)}>Español</button>
    </>
  );
}
export default App;
