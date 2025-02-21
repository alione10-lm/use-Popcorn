import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander
        expandButtonText="Show more"
        buttonColor="dodgerblue"
        className="box"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        collapsedNumWords={20}
        className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        expandButtonText="Show more"
        buttonColor="green"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className,
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText,
  collapseButtonText = "Show less",
  buttonColor,
}) {
  const [isExpanded, setisExpanded] = useState(expanded);
  const DisplayedText = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  function handleClick() {
    setisExpanded(!isExpanded);
  }

  const ButtonStyle = {
    background: "transparent",
    border: "none",
    color: { buttonColor },
    fontSize: "16px",
    cursor: "grabbing",
    font: "inherit",
    marginLeft: "5px",
  };
  return (
    <div className={className}>
      <span>{DisplayedText}</span>
      <button style={ButtonStyle} onClick={handleClick}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
