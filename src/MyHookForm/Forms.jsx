import React from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container py-5">
      <div className="card shadow mx-auto w-50  p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group m-3">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              {...register("fullname")}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              {...register("phone")}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password")}
            />
          </div>

          <div className="form-group m-3">
            <label htmlFor="state">State</label>
            <select className="form-select" {...register("state")}>
              <option value="hi">Select your state</option>
              <option value="Delhi">Delhi</option>
              <option value="Punjab">Punjab</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
            </select>
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

          <div className="text-center">
            <button type="submit" className="btn btn-primary m-3 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
