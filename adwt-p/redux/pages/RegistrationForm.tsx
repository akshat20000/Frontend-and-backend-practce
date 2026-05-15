import { useForm, type SubmitHandler } from "react-hook-form";

type RegistrationFormData = {
  fullName: string;
  email: string;
  password: string;
  age: number;
};

export default function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      fullName: "Guest User",
      age: 18,
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName", {
              required: "Full Name is required",
              minLength: {
                value: 3,
                message: "Full Name must be at least 3 characters",
              },
            })}
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label>Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: (value) =>
                /\d/.test(value) || "Password must include at least one number",
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
              min: {
                value: 18,
                message: "Age must be at least 18",
              },
              max: {
                value: 60,
                message: "Age must be less than or equal to 60",
              },
            })}
          />
          {errors.age && (
            <p style={{ color: "red" }}>{errors.age.message}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}