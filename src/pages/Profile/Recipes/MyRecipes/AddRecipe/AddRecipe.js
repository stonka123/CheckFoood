import LoadingBar from "../../../../../components/UI/LoadingBar/LoadingBar";
import {
  useState,
  useRef,
  createElement,
  createContext,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddRecipe.module.css";
import {
  RecipeContext,
  RecipeDispatchContext,
} from "../../../../../context/RecipeContext";

function AddRecipe(props) {
  const navigate = useNavigate();
  const imageRef = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(RecipeDispatchContext);

  const [form, setForm] = useState({
    id: 4,
    title: "",
    rating: "",
    calories: "",
    time: "",
    difficulty: "Easy",
    img: null,
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log(dispatch);
    dispatch({
      type: "added-recipe",
      title: form.title,
      id: nextId++,
      title: form.title,
      time: form.time,
      calories: form.calories,
      difficulty: form.difficulty,
      img: form.img,
    });
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerTitle}>
        <h4 className="card-header">Nowy Przepis</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Nazwa</label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Kalorie</label>
              <input
                required
                value={form.calories}
                onChange={(e) => setForm({ ...form, calories: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Czas</label>
              <input
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Skład</label>
              <textarea
                required
                onChange={(e) =>
                  setForm({ ...form, composition: e.target.value })
                }
                value={form.composition}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Poziom trudności</label>
              <select
                onChange={(e) =>
                  setForm({ ...form, difficulty: e.target.value })
                }
                value={form.difficulty}
                className="form-control"
                name=""
                id=""
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="form-group">
              <label>Zdjęcie</label>
              <input
                src={(e) => setForm({ ...form, img: e.target.value })}
                type="text"
                onChange={(e) => setForm({ ...form, img: e.target.value })}
                ref={imageRef}
                className="form-control"
              />
            </div>

            <div className="text-end mt-3">
              <button onClick={submit} className="btn btn-success">
                Dodaj przepis!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
let nextId = 4;
export default AddRecipe;
