import { valibotResolver } from "@hookform/resolvers/valibot";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import InputForm from "~/components/form/input-form";
import TitleSeparator from "~/components/layout/title-separator";
import { Button } from "~/components/ui/button";

const RegisterSchema = v.pipe(
  v.object({
    fullName: v.pipe(
      v.string("Nama lengkap wajib diisi"),
      v.nonEmpty("Nama lengkap wajib diisi")
    ),
    email: v.pipe(
      v.string("Email wajib diisi"),
      v.email("Email tidak valid"),
      v.nonEmpty("Email wajib diisi")
    ),
    password: v.pipe(
      v.string("Password Wajib diisi"),
      v.minLength(8, "Password harus minimal 8 karakter"),
      v.nonEmpty("Password wajib diisi")
    ),
    confirmPassword: v.pipe(
      v.string("Konfirmasi Password wajib diisi"),
      v.nonEmpty("Konfirmasi Password wajib diisi")
    ),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "Password tidak cocok"
    ),
    ["confirmPassword"]
  )
);

type RegisterForm = v.InferInput<typeof RegisterSchema>;

export default function RegisterSection() {
  const methods = useForm<RegisterForm>({
    mode: "onBlur",
    resolver: valibotResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6">
      <FormProvider {...methods}>
        <form className="space-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
          <InputForm
            name="fullName"
            placeholder="Nama Lengkap"
            type="text"
            isRequired
          />

          <InputForm name="email" placeholder="Email" type="email" isRequired />

          <InputForm
            name="password"
            placeholder="Password"
            type="password"
            isRequired
          />

          <InputForm
            name="confirmPassword"
            placeholder="Konfirmasi Password"
            type="password"
            isRequired
          />

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </FormProvider>

      <TitleSeparator title="OR CONTINUE WITH" />

      <Button className="w-full">
        <IconBrandGoogleFilled />
        <span>Sign Up with Google</span>
      </Button>
    </div>
  );
}
