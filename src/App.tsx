import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { userData } from "./data";

function App() {
  return (
    <main className="App">
      <Hero name={userData.name} photo={userData.profilePicture} />
      <About text={userData.description} />
      <Skills skills={userData.skills} />
      <Projects projects={userData.projects} />
      <Contact contacts={userData.contactMethods} />
    </main>
  );
}

export default App;
