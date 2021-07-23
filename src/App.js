import { Fragment, useState } from "react";
import "./App.css";
// import spinner from "./images/spinner.gif";

function App() {
  const [baby, setBaby] = useState(null);
  const [spouse, setSpouse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("man");

  const fetchAll = async (e) => {
    e.preventDefault();
    setLoading(true);
    const babyUrl = "https://source.unsplash.com/featured/?baby,face";
    const spouseUrl = `https://source.unsplash.com/featured/?${gender}`;

    const babyResponse = await fetch(babyUrl);
    const spouseResponse = await fetch(spouseUrl);

    setBaby(babyResponse.url);
    setSpouse(spouseResponse.url);
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="container">
        <form onSubmit={fetchAll}>
          <div className="wrapper">
            <div className="text-box">Choose the gender of your spouse</div>
            <div className="radio-btns">
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
            </div>
          </div>
          <button className="btn" type="submit">
            {loading ? (
              <div class="loader-container">
                <div class="loader"></div>
              </div>
            ) : (
              `show my future ${
                gender === "woman" ? "wife" : "husband"
              } and child`
            )}
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
