import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectSection } from "./components/ProjectSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full px-6 md:px-18 py-12">
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}
