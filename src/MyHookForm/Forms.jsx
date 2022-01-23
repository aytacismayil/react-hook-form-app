import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseInformation from "./UseInformation";
import classNames from "classnames";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
  });
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setResult(JSON.stringify(data));
  };

  const basicForm = (
    <div className="card shadow mx-auto w-60  p-4">
      <div className="form-group m-3">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className={classNames("form-control", {
            "is-invalid": errors.fullname,
          })}
          id="fullname"
          {...register("fullname", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Please enter fullname ninimum 3 characters",
            },
          })}
        />
        {errors.fullname && (
          <div className="invalid-feedback">{errors.fullname.message}</div>
        )}
      </div>
      <div className="form-group m-3">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className={classNames("form-control", {
            "is-invalid": errors.email,
          })}
          id="email"
          {...register("email", {
            required: "Full email is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group m-3">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          className={classNames("form-control", {
            "is-invalid": errors.phone,
          })}
          id="phone"
          {...register("phone", {
            required: "Phone is required",
            minLength: {
              value: 3,
              message: "Please enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <div className="invalid-feedback">{errors.phone.message}</div>
        )}
      </div>
      <div className="form-group m-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={classNames("form-control", {
            "is-invalid": errors.password,
          })}
          id="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.:;<=>?\\@[\]^_`{|}~]).{6,64}$/,
              message: "Please enter a valid password",
            },
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>

      <div className="form-group m-3">
        <label htmlFor="state">State</label>
        <select
          className={classNames("form-control", {
            "is-invalid": errors.state,
          })}
          {...register("state", {
            required: "State is required",
          })}

        >
          <option value="hi">Select your state</option>
          <option value="Delhi">Delhi</option>
          <option value="Punjab">Punjab</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Bihar">Bihar</option>
        </select>
        {errors.state && (
          <div className="invalid-feedback">{errors.state.message}</div>
        )}
      </div>

      <div className="form-group m-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            value="male"
            {...register("gender")}
          />
          <label className="form-check-label" htmlFor="male">
            male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            value="female"
            {...register("gender")}
          />
          <label className="form-check-label" htmlFor="female">
            female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="other"
            value="other"
            {...register("gender")}
          />
          <label className="form-check-label" htmlFor="other">
            other
          </label>
        </div>
      </div>

      <div className="form-group m-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            value="agree"
            {...register("agree")}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="updates"
            {...register("updates")}
          />
          <label className="form-check-label" htmlFor="updates">
            send me latest
          </label>
        </div>
      </div>
      {result}
    </div>
  );
  return (
    <React.Fragment>
      <div className="container py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <UseInformation register={register} control={control} />
          <div className="text-center">
            <button type="submit" className="btn btn-primary m-3 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Forms;
