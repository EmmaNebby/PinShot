import { useTitle, useAuthContext } from "@hooks";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormFields, FormUi } from "@layouts";
import { registerOptions } from "@utils";
import { userService } from "@services";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  useTitle("Login to PINSHOT");

  const togglePassword = () => {
    setShowPassword((prev) => !prev); //this prev can be any variable to switch between false and true on the showPassword api
  };

  const onFormSubmit = async (data) => {
    console.log(data);
  };

  return (
    <FormUi
      title="Welcome, Login"
      info="Don't have an account?"
      to="/signup"
      path="Sign up"
      btnText="Login"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <FormFields
        register={register}
        errors={errors?.username}
        registerOptions={registerOptions?.username}
        className="my-4 text-black"
        id="userName"
        label="UserName"
        name="userName"
        type="text"
        placeholder="userName"
      />

      <FormFields
        register={register}
        errors={errors?.password}
        registerOptions={registerOptions?.password}
        className="my-1 text-black position-relative"
        id="password"
        label="Password"
        name="Password"
        type="password"
        placeholder="Password"
        showPassword={showPassword}
        togglePassword={togglePassword}
      />
      <div
        className="w-100 text-end my-2"
        style={{ color: "var(--orangeLight)", fontWeight: 500 }}
      >
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </FormUi>
  );
}
