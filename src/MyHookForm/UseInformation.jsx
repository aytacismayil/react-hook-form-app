import React from "react";
import { useFieldArray } from "react-hook-form";

const UseInformation = (props) => {
  const { register, control } = props;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "users",
  });
  return (
    <div className="card shadow mx-auto w-60  mt-3">
      <div className="card-header">User Information</div>
      <div className="card-body">
        {fields.map((item, index) => (
          <div className="form row form-group row mt-3" key={index}>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First name"
                {...register(`users.${index}.firstName` )}
                defaultValue={item.firstName }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Last name"
                {...register(`users.${index}.lastName`)}
                defaultValue={item.lastName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail Address"
                {...register(`users.${index}.emailAddress`)}
                defaultValue={item.emailAddress}
              />
            </div>
            <div className="col">
              <select
                className="form-control"
                id="state"
                {...register(`users.${index}.stateAddress`)}
                defaultValue={item.stateAddress}
              >
                <option value="">Select Your State</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Goa">Goa</option>
                <option value="Manipur">Manipur</option>
              </select>
            </div>
            <div className="col">
              <div className="btn btn-danger" onClick={() => remove(index)}>
                Delete
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-primary  mt-3"
          onClick={() =>
            append({
              firstName: "",
              lastName: "",
              emailAddress: "",
              stateAddress: "",
            })
          }
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default UseInformation;
