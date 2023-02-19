import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages";
import GlobalStyle from "globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
