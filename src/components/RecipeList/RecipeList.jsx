import { RecipeItem } from "../RecipeItem/RecipeItem.jsx";
import { List } from "../RecipeList/RecipeList";
export const RecipeList = ({ recipe }) => {
  return (
    <List>
      {recipe.map(({ title, time, servings, calories, difficulty }, index) => {
        return (
          <RecipeItem
            key={index}
            title={title}
            time={time}
            servings={servings}
            calories={calories}
            difficulty={difficulty}
          />
        );
      })}
    </List>
  );
};