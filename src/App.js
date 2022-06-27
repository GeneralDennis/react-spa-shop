import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

const history = createMemoryHistory()

function App() {
  return (
    <>
      <Router location={history.location} navigator={history}>
        <Header/>
          <main className="container content">
              <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/contacts" element={ <Contacts/> }/>
                <Route path="/category/:name" element={ <Category/> }/>
                <Route path="/recipe/:id" element={ <Recipe/> }/>
                <Route path="*" element={ <NotFound/> }/>
              </Routes>
          </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
