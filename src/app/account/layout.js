import Sidebar from "@/app/components/Sidebar";
import Logo from "../components/Logo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="grid grid-cols-[12rem_1fr]">
          <div className="flex h-screen">
            <Sidebar className="flex-1 bg-slate-50" />
          </div>
          <div className="container p-10">{children}</div>
        </section>
      </body>
    </html>
  );
}
