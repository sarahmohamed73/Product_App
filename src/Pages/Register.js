import React, {useState} from "react";

function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [userFormError, setUserFormError] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    confirmPassword: null
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@%$#]).{8,}$/;
  const usernameRegex =  /^[A-Za-z][A-Za-z0-9_]{5,30}$/

  const handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    // Check Name
    if (name === "name") {
      setUserForm({
        ...userForm,
        name: value
      });
      setUserFormError({
        ...userFormError,
        name: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Name"
          : value.trim(" ").length < 3
          ? "Your Name Must Be More More Than Or Equel 3 Charcter"
          : null
      });
    }

    // Check Email
    else if (name === "email") {
      setUserForm({
        ...userForm,
        email: value
      });
      setUserFormError({
        ...userFormError,
        email: 
         value.trim(" ").length === 0
         ? "You Should Enter Your Email"
         : !value.match(emailRegex)
         ? "Invalid Email, Email Should Be Like This name@example.com"
         : null
      });
    }

    // Check Username
    else if (name === "username") {
      setUserForm({
        ...userForm,
        username: value
      });
      setUserFormError({
        ...userFormError,
        username: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Username"
          : !value.match(usernameRegex)
          ? "Invalid Username, Username Must Start With Letter And Have Only Letter, Numbers, _ And Feom 5 To 30 Letter"
          : null
      });
    }

    // Check Password
    else if (name === "password") {
      setUserForm({
        ...userForm,
        password: value
      });
      setUserFormError({
        ...userFormError,
        password: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Password"
          : !value.match(passwordRegex)
          ? "Invalid Password, The Password Must Contain At Least One Lowercase, One Uppercase, At Least one Digit, Special Character And More Than 7 Letter"
          : null
      });
    }

    // Check Confirm Password
    else if (name === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: value
      });
      setUserFormError({
        ...userFormError,
        confirmPassword: 
          value.trim(" ").length === 0
          ? "You Should Enter Your Confirm Password"
          : value !== userForm.password
          ? "Password Don't Match"
          : null
      });
    };
  };

  const isFormValid = !userFormError.name && !userFormError.email && !userFormError.username && !userFormError.password && !userFormError.confirmPassword && userForm.name && userForm.email && userForm.username && userForm.password && userForm.confirmPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log("Form Submitted Successfully");
    } else {
      console.log("Form Has Errors");
    }
  };

  return (
    <div className="container" style={{height: '100vh'}}>
      <h1 className="text-start mb-5">Register</h1>
      <div className="form-group">
        <form onChange={handleFormChange} onSubmit={handleSubmit}>
          {/* Name */}
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingName" name="name" required value={userForm.name}  placeholder="Name"/>
            <label for="floatingName">Name</label>
            {userFormError.name && <div className="form-text text-danger text-start">{userFormError.name}</div>}
          </div>
          {/* Email */}
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingEmail" name="email" required value={userForm.email} placeholder="Email"/>
            <label for="floatingEmail">Email address</label>
            {userFormError.email && <div className="form-text text-danger text-start ">{userFormError.email}</div>}
          </div>
          {/* Username */}
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingUsername" name="username" required value={userForm.username} placeholder="Username" />
            <label for="floatingUsename">Username</label>
            {userFormError.username && <div className="form-text text-danger text-start ">{userFormError.username}</div>}
          </div>
          {/* Password */}
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" name="password" required value={userForm.password} placeholder="Password" />
            <label for="floatingPassword">Password</label>
            {userFormError.password && <div className="form-text text-danger text-start ">{userFormError.password}</div>}
          </div>
          {/* Confirm Password */}
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingConfirmPassword" name="confirmPassword" required value={userForm.confirmPassword} placeholder="Confirm Password" />
            <label for="floatingConfirmPassword">Confirm Password</label>
            {userFormError.confirmPassword && <div className="form-text text-danger text-start ">{userFormError.confirmPassword}</div>}
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-success text-start py-2" disabled={!isFormValid}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register