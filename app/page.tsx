import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-background.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  )
}
