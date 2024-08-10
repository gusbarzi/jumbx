import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "../routes/routes";
import { ContainerApp } from "../styles/GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <ContainerApp>
          <AppRouter />
        </ContainerApp>
      </Router>
    </>
  );
}

export default App;
