import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const details = await prisma.userDetails.findMany();
  return (
    <>
      <header className="grid">
        <h1 className="text-2xl mb-2">Website Users</h1>
        <Link
          href="/add-user"
          className="border-solid border-2 border-slate-100 rounded-lg p-2 w-fit"
        >
          Add New User
        </Link>
      </header>
      {details.map((x) => (
        <div key={x.id} className="flex p-4 justify-evenly">
          <div className="border-3 border-slate-100">{x.email}</div>
          <div className="border-3 border-slate-100">{x.password}</div>
        </div>
      ))}
    </>
  );
}
