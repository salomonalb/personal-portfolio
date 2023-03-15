import About from "./components/About"
import Hero from "./components/Hero"
import { userData } from "./data"

function App() {

  return (
    <div className="App">
      <Hero name={userData.name} photo={userData.profilePicture} />
      <About text={userData.description} />
    </div>
  )
}

export default App
