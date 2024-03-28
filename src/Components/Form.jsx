import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Formontext } from "./context/ThemeContext";

const Form = () => {
  const {
    cardName,
    cardNumber,
    cardDate,
    cardCvc,
    setCardName,
    setCardNumber,
    setCardDate,
    setCardCvc,
    handleSubmitOk,
  } = useContext(Formontext);

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if (isValid) {
      handleSubmitOk();
      reset();
    }
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    if (value.length <= 19) {
      // Delete all NaN
      let cleanedValue = value.replace(/\D/g, "");
      // Aadd a space after each 4 digit
      let formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
      // Update state with Card number
      setCardNumber(formattedValue);
    }
  };

  return (
    <div className="ReactiveCard__Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Form__Field">
          <label className="Form__Label" htmlFor="name">
            Cardholder name
          </label>
          <input
            value={cardName}
            type="text"
            placeholder="e.g Meryem Achemlal"
            {...register("name", {
              required: true,
              pattern: /^[A-Za-z ]+$/i,
            })}
            className={`Form__Input ${errors.name ? "Form__ErrorInput" : ""}`}
            name="name"
            id="name"
            onChange={(e) => setCardName(e.target.value)}
          />

          {errors.name && errors.name.type === "required" && (
            <span className="Form__ErrorMessage">Can't be blank</span>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <span className="Form__ErrorMessage">
              Wrong format, letters only
            </span>
          )}
        </div>
        <div className="Form__Field">
          <label className="Form__Label" htmlFor="num">
            card number
          </label>
          <input
            type="text"
            value={cardNumber}
            placeholder="e.g 1234 5678 9123 0000"
            {...register("num", {
              required: "Can't be blank",
              minLength: {
                value: 19,
                message: "Incorrect value of Card number (16 digits)",
              },
            })}
            className={`Form__Input  ${errors.num ? "Form__ErrorInput" : ""}`}
            onChange={handleInputChange}
            name="num"
            id="num"
          />
          {errors.num && (
            <span className="Form__ErrorMessage">{errors.num.message}</span>
          )}
        </div>

        <div className="Form__Group">
          <div className="Form__FieldWrapper">
            <label className="Form__Label" htmlFor="dateExp">
              exp. date (mm/yy)
            </label>
            <div className="Form__SubGroup">
              <div className="Form__Field Form__Field--date">
                <input
                  type="number"
                  value={cardDate.month}
                  placeholder="MM"
                  {...register("dateExpMonth", {
                    required: true,
                    maxLength: {
                      value: 2,
                      message: "Only 2 digits",
                    },
                    min: {
                      value: String(new Date().getMonth() + 2).padStart(2, ""),
                      message: "Incorrect value of mounth",
                    },
                    max: {
                      value: 12,
                      message: "Incorrect value of mounth",
                    },
                  })}
                  className={`Form__Input ${
                    errors.dateExpMonth ? "Form__ErrorInput" : ""
                  }`}
                  name="dateExpMonth"
                  id="dateExpMonth"
                  onChange={(e) => {
                    setCardDate((prevDate) => ({
                      ...prevDate,
                      month: e.target.value,
                    }));
                  }}
                />

                {errors.dateExpMonth && (
                  <span className="Form__ErrorMessage">
                    {errors.dateExpMonth.message}
                  </span>
                )}
                {((errors.dateExpMonth &&
                  errors.dateExpMonth.type === "required") ||
                  (errors.dateExpYear &&
                    errors.dateExpYear.type === "required")) && (
                  <span className="Form__ErrorMessage">Can't be blank</span>
                )}
              </div>
              <div className="Form__Field Form__Field--date">
                <input
                  type="number"
                  value={cardDate.year}
                  placeholder="YY"
                  {...register("dateExpYear", {
                    required: true,
                    maxLength: {
                      value: 2,
                      message: "Only 2 digits",
                    },
                    min: {
                      value: parseInt(
                        String(new Date().getFullYear()).slice(-2)
                      ),
                      message: "Incorrect value of year",
                    },
                  })}
                  className={`Form__Input ${
                    errors.dateExpYear ? "Form__ErrorInput" : ""
                  }`}
                  name="dateExpYear"
                  id="dateExpYear"
                  onChange={(e) => {
                    setCardDate((prevDate) => ({
                      ...prevDate,
                      year: e.target.value,
                    }));
                  }}
                />

                {errors.dateExpYear && (
                  <span className="Form__ErrorMessage">
                    {errors.dateExpYear.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="Form__Field Form">
            <label className="Form__Label" htmlFor="cvc">
              cvc
            </label>
            <input
              type="number"
              value={cardCvc}
              placeholder="e.g 123"
              {...register("cvc", {
                required: true,
                maxLength: "3",
                minLength: "3",
                max: "999",
                min: "100",
              })}
              className={`Form__Input ${errors.cvc ? "Form__ErrorInput" : ""}`}
              name="cvc"
              id="cvc"
              onChange={(e) => setCardCvc(e.target.value)}
            />
            {errors.cvc && errors.cvc.type === "required" && (
              <span className="Form__ErrorMessage">Can't be blank</span>
            )}
            {errors.cvc &&
              (errors.cvc.type === "min" ||
                errors.cvc.type === "maxLength" ||
                errors.cvc.type === "minLength" ||
                errors.cvc.type === "max") && (
                <span className="Form__ErrorMessage">
                  Incorrect value of CVC
                </span>
              )}
          </div>
        </div>
        <button className="Form__SubmitButton" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
