import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nameValid = formData.name.trim().length > 0;
  const emailValid = formData.email.includes("@");
  const passwordValid = formData.password.length >= 6;

  const isFormValid = nameValid && emailValid && passwordValid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        {!nameValid  && (
          <p style={{ color: "red" }}>Name is required</p>
        )}

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        {!emailValid && formData.email.length > 0 && (
          <p style={{ color: "red" }}>Email must contain @</p>
        )}

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        {!passwordValid && formData.password.length > 0 && (
          <p style={{ color: "red" }}>
            Password must be at least 6 characters
          </p>
        )}

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      <hr />

      <h3>Live Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
}