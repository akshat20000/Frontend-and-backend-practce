import { useForm, type SubmitHandler } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const correctEmail = "test@example.com";
    const correctPassword = "123456";

    if (data.email === correctEmail && data.password === correctPassword) {
      console.log("Login successful:", data);
      return;
    }

    setError("root", {
      type: "manual",
      message: "Invalid email or password",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {errors.root && (
          <p style={{ color: "red" }}>{errors.root.message}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}