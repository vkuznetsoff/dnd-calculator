import { useSelector } from "react-redux";
import Block from "./Block";
import "./Constructor.css";

const Constructor = () => {
  
  const dragElements = useSelector((state) => state.dragElements)

  return (
      
    <div className="constructorContainer">
      {dragElements.map((block) => {
        return (
          <div key={block.id} className="itemContainer">
            <Block  block={block} />
          </div>
        );
      })}

    </div>
  );
};

export default Constructor;
