import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [baby, setBaby] = useState(null);
  const [spouse, setSpouse] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("man");

  const fetchAll = async (e) => {
    e.preventDefault();
    const babyUrl = "https://source.unsplash.com/featured/?baby,face";
    const spouseUrl = `https://source.unsplash.com/featured/?${gender}`;

    const babyResponse = await fetch(babyUrl);
    const spouseResponse = await fetch(spouseUrl);

    setBaby(babyResponse.url);
    setSpouse(spouseResponse.url);
  };

  return (
    <Fragment>
      <div className="container">
        <form onSubmit={fetchAll}>
          <div>Choose the gender of your spouse</div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={gender}
                checked={gender === "man"}
                onChange={() => setGender("man")}
              />
              Man
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={gender}
                checked={gender === "woman"}
                onChange={() => setGender("woman")}
              />
              Woman
            </label>
          </div>
          <button className="btn" type="submit">
            show my future {gender === "woman" ? "wife" : "husband"} and child
          </button>
        </form>

        <div className="gallery">
          <div className="image-box first-image">
            <img src={baby} alt="" />
          </div>
          <div className="image-box second-image">
            <img src={spouse} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
