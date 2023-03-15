import Hero from "./components/Hero"
import { userData } from "./data"

function App() {

  return (
    <div className="App">
      <Hero name={userData.name} photo={userData.profilePicture} />
    </div>
  )
}

export default App
