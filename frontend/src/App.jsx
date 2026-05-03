import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return window.location.pathname === "/contact" ? <Contact /> : <Home />;
}

export default App;