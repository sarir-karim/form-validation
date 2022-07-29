import React from "react";
import useForm from './useForm'
import validate from './validateInfo'
import './form.css'

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)
  return (
    <>
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>
            Get Started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your Username"
              value={values.username}
              onChange={handleChange}
            />

            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Password2
            </label>
            <input
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password  "
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign Up
          </button>
          <span>
            Already have an account Login <a href="#"></a>
          </span>
        </form>
      </div>
    </>
  );
};

export default FormSignup;
