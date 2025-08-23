import { PageBoard } from "../src/components/PageBoard/PageBoard.jsx";
import recipe from "./data/recipes.json"
import { GlobalStyle } from "./GlobalStyle.js";

function App() {
  return (
    <> 
    <GlobalStyle />
    <PageBoard recipe={recipe} />
    </>
  );
}

export default App;
