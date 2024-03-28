import React, { useState, createContext } from "react";
export const Formontext = createContext();

const ThemeContextProvider = (props) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState({ month: "", year: "" });
  const [cardCvc, setCardCvc] = useState("");
  const [submitOk, setSubmitOk] = useState(false);

  const handleSubmitOk = () => {
    setSubmitOk(!submitOk);
  };
  return (
    <Formontext.Provider
      value={{
        cardName,
        cardNumber,
        cardDate,
        cardCvc,
        setCardName,
        setCardNumber,
        setCardDate,
        setCardCvc,
        submitOk,
        handleSubmitOk,
      }}
    >
      {props.children}
    </Formontext.Provider>
  );
};

export default ThemeContextProvider;
