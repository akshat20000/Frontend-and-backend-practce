import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    age: z.coerce.number().gt(18, "Age must be above 18"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormInput = z.input<typeof registerSchema>;
type RegisterFormOutput = z.output<typeof registerSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput, any, RegisterFormOutput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormOutput) => {
    console.log("Registered user:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>

      <div>
        <input
          type="number"
          placeholder="Age"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}