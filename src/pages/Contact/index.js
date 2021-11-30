import "./styleContact.css";
import React from "react";
import { Header, FastMenuStyled, Main } from "../About/styledComponents";
import FormAndMap from "./FormAndMap";
import mountainLandscape from "./images/paisaje-montania-new.jpg";

function index() {
  return (
    <>
      <Header img={mountainLandscape}>Contact</Header>
      <div className="lg:max-w-5xl md:flex mx-auto mt-6 px-8 py-12">
        <FastMenuStyled />
        <FormAndMap />
      </div>
    </>
  );
}

export default index;
