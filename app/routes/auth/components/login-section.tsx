import { valibotResolver } from "@hookform/resolvers/valibot";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import InputForm from "~/components/form/input-form";
import TitleSeparator from "~/components/layout/title-separator";
import { Button } from "~/components/ui/button";

const LoginSchema = v.object({
  email: v.pipe(
    v.string("Email wajib diisi"),
    v.email("Email tidak valid"),
    v.nonEmpty("Email wajib diisi")
  ),
  password: v.pipe(
    v.string("Password wajib diisi"),
    v.minLength(8, "Password harus minimal 8 karakter"),
    v.nonEmpty("Password wajib diisi")
  ),
});

type LoginForm = v.InferInput<typeof LoginSchema>;

export default function LoginSection() {
  const methods = useForm<LoginForm>({
    mode: "onBlur",
    resolver: valibotResolver(LoginSchema),
  });

  const _onSubmit = (data: LoginForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6">
      <FormProvider {...methods}>
        <form className="space-y-4">
          <InputForm name="email" placeholder="Email" isRequired />

          <InputForm
            name="password"
            placeholder="Password"
            type="password"
            isRequired
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </FormProvider>

      <TitleSeparator title="OR CONTINUE WITH" />

      <Button className="w-full">
        <IconBrandGoogleFilled />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
}
