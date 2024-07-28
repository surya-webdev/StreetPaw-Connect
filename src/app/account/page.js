import { getIssues } from "../_lib/data-service";

async function page() {
  const data = await getIssues();
  console.log(data);
  return (
    <section className="container">
      <p>account</p>
    </section>
  );
}

export default page;
