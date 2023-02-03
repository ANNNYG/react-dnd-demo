import React from "react";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <DndProvider backend={HTML5Backend}>
        {/* 拖拉放置组件 */}
        <Demo1 />
        {/* 拖拉排序组件 */}
        <Demo2 />
      </DndProvider>
    </div>
  );
};

export default App;
