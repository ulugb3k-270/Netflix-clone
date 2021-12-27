import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/description" exact>
            <Description />
          </Route>
          <Route path="/" exact>
            <Navbar />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchAction} />
            <Row title="Comedy" fetchUrl={requests.fetchComedy} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Horror" fetchUrl={requests.fetchHorror} />
            <Row title="Romance" fetchUrl={requests.fetchRomance} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
