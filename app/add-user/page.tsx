"use client";
import { UserForm } from "@/components/UserForm";

type FormResult = {
  success: boolean;
  errors: string[];
};

export default function AddUser() {
  function processResult(result: FormResult) {
    if (result.success) {
      alert("Details sent succesfully");
    } else {
      let errorMessage = "";
      result.errors.forEach((x) => (errorMessage += `\n${x}`));
      alert(errorMessage);
    }
  }
  return (
    <>
      <header>
        <h1 className="text-2xl">Add New User</h1>
      </header>
      <main className="border-solid border-2 border-slate-100 rounded-lg p-5">
        <UserForm
          setResult={(result) => processResult(result as unknown as FormResult)}
        />
      </main>
    </>
  );
}
