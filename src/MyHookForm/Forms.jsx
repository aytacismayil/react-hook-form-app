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
              {...register('fullname')}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email')}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              {...register('phone')}
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
          <button type="submit" className="btn btn-primary m-3 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
