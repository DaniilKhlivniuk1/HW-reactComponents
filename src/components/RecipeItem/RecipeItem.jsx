import {
  Item,
  Title,
  ParamItem,
  ParamList,
  ParamSpan,
  ParamText,
  DifficultyTitle,
  DifficultyItem,
  DifficultyList,
  DifficultyBox,
} from "../RecipeItem/RecipeItem";

export const RecipeItem = ({ title, time, servings, calories, difficulty }) => {
  return (
    <Item $difficulty={difficulty}>
      <Title>{title}</Title>
      <ParamList>
        <ParamItem>
          <ParamText>
            ⏰ <ParamSpan>{time}</ParamSpan> min
          </ParamText>
        </ParamItem>
        <ParamItem>
          <ParamText>
            🧾 <ParamSpan>{servings}</ParamSpan> servings
          </ParamText>
        </ParamItem>
        <ParamItem>
          <ParamText>
            📊 <ParamSpan>{calories}</ParamSpan> calories
          </ParamText>
        </ParamItem>
      </ParamList>
      <DifficultyBox>
        <DifficultyTitle>Difficulty</DifficultyTitle>
        <DifficultyList>
          <DifficultyItem>Easy</DifficultyItem>
          <DifficultyItem>Medium</DifficultyItem>
          <DifficultyItem>Hard</DifficultyItem>
        </DifficultyList>
      </DifficultyBox>
    </Item>
  );
};
