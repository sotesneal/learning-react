import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import profileData from "./profileData";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="ui link cards">
        {profileData.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
