import React, { useContext } from "react";
import Form from "../Components/Form";
import { Formontext } from "../Components/context/ThemeContext";
import Bg_desktop from "../images/bg-main-desktop.png";
import Bg_mobile from "../images/bg-main-mobile.png";
import CardImage from "../Components/CardImage";
import Thanks from "../Components/Thanks";

const Page = () => {
  const { submitOk } = useContext(Formontext);

  console.log("test : ", submitOk);
  return (
    <div className="ReactiveCard__Container">
      <div className="ReactiveCard__BgDesktop">
        <img src={Bg_desktop} alt="" />
      </div>
      <div className="ReactiveCard__BgMobile">
        <img src={Bg_mobile} alt="" />
      </div>
      <CardImage />
      <div className="ReactiveCard__FormContainer">
        {submitOk ? <Thanks /> : <Form />}
      </div>
    </div>
  );
};

export default Page;
