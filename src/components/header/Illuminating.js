import "./Illuminating.css";
import window from "../image-sources/window.svg";

const Illuminating = () => {
  return (
    <div className="illuminating">
      <div className="illuminating-div1">
        <h1>Illuminating dark data</h1>
        <p>
          Dark data is the 60% of unanalyzed data companies possess. At HotKup
          we transform unused data into valuable business insights.
        </p>
      </div>
      <div className="illuminating-div2">
        <img src={window} alt="window-img" />
      </div>
      <div className="illuminating-div3">
        <p>
          Join dozens of global teams using HotKup to unite their workforce and
          get things done.
        </p>
      </div>
    </div>
  );
};

export default Illuminating;
