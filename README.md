# 使用 react-dnd 实现简单拖放功能

## react-dnd 整体思路

### useDrag

一个钩子函数，为组件添加拖拽能力，返回值有三个

**返回值**

[0]collected:：包含从 collect 函数收集的属性的对象
[1]drag: ref,添加到需要拥有拖拽能力的 dom 组件中
[2]dragPreview:ref 预览功能，可放在 isDragging 渲染出的组件的 ref 中（估计只有我看得懂）

**传参**

一个对象（详情看文档懒得写了反正我知道）

### useDrop

一个钩子函数，为组件添加接收放置的能力，需要对应的上拖拽组件（useDrag）的 type，使用 accept 接收

**demo1 为拖放**
可将 Box 和 Bucket 再进行封装（我实在是懒得写了）
demo1 其实也不应该分那么多文件，全部写在 index 里就可以完成（简单的功能分多个文件可读性还差了，因为 demo1 是边看文档边写的，dnd 的文档写的真烂，我实在是懒得优化了）

**demo2 为拖放排序**
思路为 需要为同个组件添加放置和拖拽的能力，然后在 hover 回调中修改 useState 的排序

后续可能继续更新
