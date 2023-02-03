import React, { useRef } from "react";

import { useDrag, useDrop } from "react-dnd";

const Item = ({ id, index, changePosition, children }) => {
  const ref = useRef(null);

  // 放置钩子
  const [, drop] = useDrop({
    accept: "DragDropBox",
    hover: (item) => {
      if (!ref.current) return;
      console.log(item, index);
      let dragIndex = item.index;
      let hoverIndex = index;
      if (dragIndex === hoverIndex) return; // 如果回到自己的坑，那就什么都不做
      changePosition(dragIndex, hoverIndex); // 调用传入的方法完成交换
      console.log("====");
      item.index = hoverIndex; // 将当前当前移动到Box的index赋值给当前拖动的box，不然会出现两个盒子疯狂抖动！
    },
  });

  // 移动钩子
  const [{ isDragging }, drag] = useDrag({
    type: "DragDropBox",
    item: {
      type: "DragDropBox",
      id,
      index,
      text: children,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // 是否正在进行拖动操作
    }),
  });

  const style = {
    height: 40,
    border: "3px green solid",
    borderRadius: "5px",
    margin: "10px 10px 0 10px",
    textAlign: "center",
    lineHeight: "40px",
  };

  // 使组件拥有拖拽和接受放置能力
  const itemRef = drag(drop(ref));

  return (
    <div style={{ ...style, opacity: isDragging ? 0.3 : 1 }} ref={itemRef}>
      {children}
    </div>
  );
};

export default Item;
