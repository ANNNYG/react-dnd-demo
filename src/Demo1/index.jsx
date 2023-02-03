import React, { useState } from "react";

import Box from "./Box";
import Bucket from "./Bucket";

const Demo1 = () => {
  const [position, setPosition] = useState({ top: 100, left: 10 });

  // 用于处理Drop放置后的回调
  // item为上一次位置
  const handleDrop = (item, monitor) => {
    const { x, y } = monitor.getDifferenceFromInitialOffset();
    setPosition((pre) => ({
      top: pre.top + y,
      left: pre.left + x,
    }));
  };

  return (
    <div>
      <Bucket handleDrop={handleDrop}>
        <Box position={position} />
      </Bucket>
    </div>
  );
};

export default Demo1;
