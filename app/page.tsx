import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"

export default function Home() {
  return (
    // <main className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-purple-900 md:bg-fixed md:bg-cover md:bg-center md:bg-[url('/images/home-background.jpg')]">
    //   <div className="bg-black/50 min-h-screen">
    //     <Hero />
    //     <About />
    //     <Experience />
    //     <Projects />
    //   </div>
    // </main>

  <main className="min-h-screen md:bg-fixed md:bg-cover md:bg-center md:bg-[url('/images/home-background.jpg')]">
      <div className="md:bg-black/50 min-h-screen">
        <Hero />
        <div className="bg-gradient-to-br from-slate-900 via-amber-900 to-purple-900 md:bg-none">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>


  )
}
