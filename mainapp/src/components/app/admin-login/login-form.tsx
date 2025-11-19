"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  adminLoginFormSchema,
  AdminLoginFormType,
} from "@/lib/form/schema/admin-login-form";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginFormDefaultValue } from "@/lib/form/default/admin-login-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const AdminLoginForm = () => {
  const form = useForm<AdminLoginFormType>({
    resolver: zodResolver(adminLoginFormSchema),
    defaultValues: adminLoginFormDefaultValue,
  });

  const onSubmitHandler = (values: AdminLoginFormType) => {
    console.log(values);
  }

  return (
    <form id="admin-login-form" onSubmit={form.handleSubmit(onSubmitHandler)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="admin-login-form-username">
                Username
              </FieldLabel>
              <Input
                {...field}
                id="admin-login-form-username"
                aria-invalid={fieldState.invalid}
                placeholder="Enter username"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="admin-login-form-password">
                Password
              </FieldLabel>
              <Input
                {...field}
                id="admin-login-form-password"
                aria-invalid={fieldState.invalid}
                placeholder="Enter password"
                type="password"
                className="tracking-widest"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default AdminLoginForm;
