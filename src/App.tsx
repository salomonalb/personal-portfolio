import About from "./components/About"
import Hero from "./components/Hero"
import Projects from "./components/projects"
import Skills from "./components/Skills"
import { userData } from "./data"

function App() {

  return (
    <div className="App">
      <Hero name={userData.name} photo={userData.profilePicture} />
      <About text={userData.description} />
      <Skills skills={userData.skills} />
      <Projects projects={userData.projects} />
    </div>
  )
}

export default App
