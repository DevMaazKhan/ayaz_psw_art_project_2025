"use client";

import { Input } from "@/components/ui/input";
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
import { useRouter } from "next/navigation";
import { PATH } from "@/lib/constant/path";
import {
  ADMIN_LOGIN_FORM_PASSWORD_FIELD_LABEL,
  ADMIN_LOGIN_FORM_PASSWORD_FIELD_PLACEHOLDER,
  ADMIN_LOGIN_FORM_USERNAME_FIELD_LABEL,
  ADMIN_LOGIN_FORM_USERNAME_FIELD_PLACEHOLDER,
} from "@/lib/constant/resources-en";

const AdminLoginForm = () => {
  const form = useForm<AdminLoginFormType>({
    resolver: zodResolver(adminLoginFormSchema),
    defaultValues: adminLoginFormDefaultValue,
  });

  const router = useRouter();

  const onSubmitHandler = (values: AdminLoginFormType) => {
    router.replace(PATH.ADMIN_DASHBOARD);
  };

  return (
    <form id="admin-login-form" onSubmit={form.handleSubmit(onSubmitHandler)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="admin-login-form-username">
                {ADMIN_LOGIN_FORM_USERNAME_FIELD_LABEL}
              </FieldLabel>
              <Input
                {...field}
                id="admin-login-form-username"
                aria-invalid={fieldState.invalid}
                placeholder={ADMIN_LOGIN_FORM_USERNAME_FIELD_PLACEHOLDER}
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
                {ADMIN_LOGIN_FORM_PASSWORD_FIELD_LABEL}
              </FieldLabel>
              <Input
                {...field}
                id="admin-login-form-password"
                aria-invalid={fieldState.invalid}
                placeholder={ADMIN_LOGIN_FORM_PASSWORD_FIELD_PLACEHOLDER}
                type="password"
                className="tracking-widest placeholder:tracking-normal"
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
