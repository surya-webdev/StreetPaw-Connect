import SignInButton from "../components/SignInButton";

function page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">Sign in to access your Acc ount</h2>
      <SignInButton />
    </div>
  );
}

export default page;
