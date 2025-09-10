import Navigation from "@/components/layout/Navigation";
import Header from "@/components/layout/Header";
import Display from "@/components/layout/Display";

export default function Home() {
  return (
    <main className="w-screen h-fit bg-neutral-900 flex gap-5 flex-col">
      <Navigation />
      <Header />
      <section>
        <div>
          <Display />
        </div>
      </section>
    </main>
  );
}
