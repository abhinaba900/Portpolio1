import "./App.css";
import ReactRouter from "./Router/ReactRouter";
import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skill from "./components/skills/skill";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
//home , about, skill, project, contact, resume
export default App;
