import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [password, setVisiblePassword] = useState(false);
  const [confirmpassword, setVisibleConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.confirm_password !== formData.password){

        toast.error('Password does not match')
        return
    }


    toast.success("Registration Successful!");
    console.log(formData);


  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const handleVisiblity = () => {
    setVisiblePassword(!password);
    console.log("passwor", password);
  };

  useEffect(() => {}, []);
  return (
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h2 class="text-center mb-4">Register</h2>
          <form>
            <div class="mb-3 d-flex align-items-center gap-5">
              <label for="name" class="form-label" className="col-md-4">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your full name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            <div class="mb-3 d-flex align-items-center gap-5">
              <label for="email" class="form-label col-md-4">
                Email Address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div class="mb-3 d-flex align-items-center gap-5">
              <label for="password" class="form-label col-md-4">
                Password
              </label>
              <input
                type={password ? "text" : "password"}
                class="form-control"
                id="password"
                placeholder="Enter your password"
                required
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              ></input>

              <div className="width-100" onClick={handleVisiblity}>
                
              {
                password ?<FaEyeSlash /> : <FaEye />
            }
              </div>
            </div>
            <div class="mb-3 d-flex align-items-center gap-5">
              <label for="confirm-password" class="form-label col-md-4">
                Confirm Password
              </label>
              <input
                type={confirmpassword ? "text" :"password"}
                class="form-control"
                id="confirm-password"
                placeholder="Confirm your password"
                required
                onChange={(e) =>
                  setFormData({ ...formData, confirm_password: e.target.value })
                }
              ></input>

              <div className="width-100" onClick={() => setVisibleConfirmPassword(!confirmpassword)}>
                
              {
                confirmpassword ?<FaEyeSlash /> : <FaEye />
            }
              </div>
            </div>
            <div class="mb-3 mx-5 form-check d-flex align-items-center gap-5">
              <input
                type="checkbox"
                class="form-check-input col-md-4"
                id="terms"
                required
              ></input>
              <label class="form-check-label" for="terms">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary w-20"
              onClick={handleSubmit}
            >
              Register
            </button>
            <button
              type="reset"
              class="btn mx-5 btn-secondary w-30"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
