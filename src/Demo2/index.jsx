import React, { useState } from "react";

import Item from "./Item";

const ITEM_CONFIG = [
  { text: "item1", id: 1 },
  { text: "item2", id: 2 },
  { text: "item3", id: 3 },
  { text: "item4", id: 4 },
  { text: "item5", id: 5 },
];

const Demo2 = () => {
  const [itemConfig, setItemConfig] = useState([...ITEM_CONFIG]);

  const changePosition = (dataIndex, hoverIndex) => {
    const data = [...itemConfig];
    const temp = data[dataIndex];
    data[dataIndex] = data[hoverIndex];
    data[hoverIndex] = temp;
    setItemConfig(data);
  };

  const style = {
    height: 300,
    marginTop: "30px",
    border: "3px red solid",
    borderRadius: "9px",
  };

  return (
    <div style={style}>
      {itemConfig.map((item, i) => (
        <Item
          index={i}
          id={item.id}
          changePosition={changePosition}
          key={item.id}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
};

export default Demo2;
