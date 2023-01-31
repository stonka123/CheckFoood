import { useContext } from "react";
import PropTypes from "prop-types";
import Meal from "./Meal/Meal";
import styles from "./Meals.module.css";
import ThemeContext from "../../context/ThemeContext";
import { addRecipe } from "../../pages/Profile/Recipes/MyRecipes/AddRecipe/AddRecipe";
import { addRecipeContext, RecipeContext } from "../../context/RecipeContext";

function Meals(props) {
  const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext);
  const meals = useContext(RecipeContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerMeals}>
        <p
          className={styles.text}
          style={{
            color: isDarkMode
              ? themeDark.colors.textColor
              : themeLight.colors.textColor,
          }}
        >
          Przepisy:
        </p>
        {props.state.meals.map((meal) => (
          <li key={meal.id}>
            <Meal {...meal} state={props.state} theme={props.theme} />
          </li>
        ))}

        <p>{props.state.namek}</p>
      </div>
    </div>
  );
}

export default Meals;
