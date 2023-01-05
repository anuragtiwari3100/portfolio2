import { useState, useContext, useEffect } from "react";
import "./Jumbotron.scss";
import Animate from "./Animate";
import { modeContext } from "../../../providers/ModeProvider";

function Jumbotron() {
  const { modeStyle } = useContext(modeContext);
  const [ballColor, setBallColor] = useState({
    full: "#ff7b00",
    medium: "#bfd200",
    low: "#ffff3f",
  });

  useEffect(() => {
    if (modeStyle === "light") {
      setBallColor({
        full: "#072ac8",
        medium: "#ffba08",
        low: "#07a0c3",
      });
    }
  }, [modeStyle]);

  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="jumbotron">
      <section className="intro">
        <p>Hello, I am Sneha.</p>
        <h2>Your next creative web developer.</h2>
        <div id="arrow-clicker" onClick={() => handleScroll()}>
          <p>about</p>
          <i className="down-arrow"></i>
        </div>
      </section>
      {Array(550)
        .fill(true)
        .map((_, i) => (
          <Animate
            key={i}
            ballColor={ballColor}
          />
        ))}
    </div>
  );
}

export default Jumbotron;
