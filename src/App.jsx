import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Cleans out other components
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
