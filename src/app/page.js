import Navigation from "@/app/components/Navigation";
import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navigation user={session?.user} />
    </>
  );
}
