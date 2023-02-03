import React from "react";
import { useDrop } from "react-dnd";

const Bucket = ({ children, handleDrop }) => {
  // 放置容器钩子
  const [, drop] = useDrop(() => ({
    accept: "BOX", // 用于接受Drop的type
    // item为偏移量，对应useDrag的item
    drop: (item, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const style = {
    height: "300px",
    border: "2px pink solid",
    borderRadius: "9px",
    position: "relative",
  };

  return (
    <div ref={drop} style={style}>
      {children}
    </div>
  );
};

export default Bucket;
