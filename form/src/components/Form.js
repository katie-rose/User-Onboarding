import React, { useRef } from "react";

function Form() {
  const firstNameRef = useRef(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(firstNameRef.current.value);
      }}
      className="login-form"
    >
      <h2>Create User</h2>
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input
          ref={firstNameRef}
          autoComplete="off"
          type="text"
          id="first_name"
          name="first_name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Email</label>
        <input autoComplete="off" type="text" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input autoComplete="off" type="text" id="password" name="password" />
      </div>
      <button className="submit-button">Submit &rarr;</button>
    </form>
  );
}

export default Form;
