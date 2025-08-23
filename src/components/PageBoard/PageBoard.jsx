import { RecipeList } from "../RecipeList/RecipeList.jsx";
import { RecipeSection } from "./PageBoard.js";
export const PageBoard = ({ recipe }) => {
  return (
    <RecipeSection>
      <RecipeList recipe={recipe} />
    </RecipeSection>
  );
};