import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Router basename="/react-spa-shop">
        <Header/>
          <main className="container content">
              <Routes>
                <Route path="/" exact element={ <Home/> }/>
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
