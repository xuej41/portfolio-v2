import Hero from "../components/Hero"
import Features from "../components/Features"
import Stats from "../components/Stats"
import CTA from "../components/CTA"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </div>
  )
}

export default Home
