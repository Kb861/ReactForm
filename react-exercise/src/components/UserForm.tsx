import "../style/UserForm.scss";
import React from "react";
import { useForm } from "react-hook-form";
import User from "../model/User";
import { useDispatch } from "../redux/store";
import { uppercaseFirstLetter } from "./uppercaseFirstLetter";

type FormValues = User;

export default function UserForm() {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, formState, reset } = useForm<
    FormValues
  >({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data: User) => {
    dispatch({ type: "ADD_USER", user: uppercaseFirstLetter(data) });
    reset();
  });

  return (
    <div className="UserForm">
      <div className="main">
        <h1>Formularz</h1>
        <form className="form" onSubmit={onSubmit}>
          <div className="form_group">
            <label className="form_group_label">
              Imię
              <input
                className="form_group_input"
                type="text"
                name="firstName"
                ref={register({
                  required: { value: true, message: "To pole jest wymagane." },
                })}
              />
              {errors?.firstName && <p>{errors.firstName.message}</p>}
            </label>
          </div>

          <div className="form_group">
            <label className="form_group_label">
              Nazwisko
              <input
                className="form_group_input"
                type="text"
                name="lastName"
                ref={register({
                  required: { value: true, message: "To pole jest wymagane." },
                })}
              />
              {errors?.lastName && <p>{errors.lastName.message}</p>}
            </label>
          </div>

          <div className="form_group">
            <label className="form_group_label">
              Email
              <input
                className="form_group_input"
                type="email"
                name="email"
                ref={register({
                  required: { value: true, message: "To pole jest wymagane." },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Pamiętaj o poprawnym formacie np. jan@poczta.pl",
                  },
                })}
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </label>
          </div>

          <div className="form_group">
            <label className="form_group_label">
              Wiek
              <input
                className="form_group_input"
                type="number"
                name="age"
                ref={register({
                  required: { value: true, message: "To pole jest wymagane." },
                  max: {
                    value: 120,
                    message: "Czy na pewno jesteś starszy/a od Kane Tanaka?",
                  },
                })}
              />
              {errors?.age && <p>{errors.age.message}</p>}
            </label>
          </div>

          <div className="form_group">
            <label className="form_group_label">
              Telefon
              <input
                className="form_group_input"
                type="text"
                name="phone"
                ref={register({
                  required: { value: true, message: "To pole jest wymagane." },
                  minLength: {
                    value: 9,
                    message: "Niepoprawna długość numeru",
                  },
                  maxLength: {
                    value: 20,
                    message: "Niepoprawna długość numeru",
                  },
                })}
              />
              {errors?.phone && <p>{errors.phone.message}</p>}
            </label>
          </div>

          <button
            className="form_btn_submit"
            disabled={!formState.isValid}
            type="submit"
          >
            Dodaj użytkownika
          </button>
        </form>
      </div>
    </div>
  );
}
