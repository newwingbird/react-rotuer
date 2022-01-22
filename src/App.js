import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import Blog from "./Blog";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/profile" component={Profile} exact />
        </switch>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}
