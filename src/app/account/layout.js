import Sidebar from "@/app/components/Sidebar";
import { auth } from "../_lib/auth";

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <section className="grid grid-cols-[12rem_1fr]">
          <div className="flex h-screen">
            <Sidebar user={session?.user} className="flex-1 bg-slate-50" />
          </div>
          <div className="container p-10">{children}</div>
        </section>
      </body>
    </html>
  );
}
