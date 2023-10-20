"use server";
import { prisma } from "@/db";

type UserDetails = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const sendForm = async (form: FormData) => {
  const email = form.get("email") as unknown as string;
  const password = form.get("password") as unknown as string;
  const confirmPassword = form.get("confirm-password") as unknown as string;

  const result = await submitForm({
    email,
    password,
    confirmPassword,
  });

  return result;
};

const submitForm = async (formDetails: UserDetails) => {
  let hasError = false;
  let errors = [];

  if (!formDetails.email) {
    errors.push("Email is required.");
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
    errors.push("Email is invalid.");
    hasError = true;
  }

  if (!formDetails.password) {
    errors.push("Password is required.");
    hasError = true;
  } else if (formDetails.password.length < 8) {
    errors.push("Password must be at least 8 characters.");
    hasError = true;
  }

  if (!formDetails.confirmPassword) {
    errors.push("Confirm Password is required.");
    hasError = true;
  } else if (formDetails.confirmPassword !== formDetails.password) {
    errors.push("Passwords do not match.");
    hasError = true;
  }

  if (hasError) {
    return {
      success: false,
      errors,
    };
  }

  const userDetails = await prisma.userDetails.create({
    data: {
      email: formDetails.email,
      password: "😁",
    },
  });

  if (userDetails) {
    return {
      success: true,
      errors: "",
    };
  }
};
