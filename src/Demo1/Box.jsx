import React from "react";
import { useDrag } from "react-dnd"; //拖动组件钩子

const Box = ({ position }) => {
  // 返回值
  const [collected, drag, dragPreview] = useDrag(
    () => ({
      type: "BOX",
      item: position,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(), // 是否正在进行拖动操作
      }),
    }),
    [position]
  );

  const style = {
    top: position.top,
    left: position.left,
    position: "absolute",
    height: 50,
    width: 50,
    border: "1px green solid",
    textAlign: "center",
  };

  // 拖动时候隐藏组件
  return collected.isDragging ? (
    <div ref={dragPreview}></div>
  ) : (
    <div ref={drag} style={style}>
      drag
    </div>
  );
};

export default Box;
