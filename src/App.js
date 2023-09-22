import './App.css';
import getBaits from './tools/getBaits';
import fish from './fish.json'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const onDragEnd = (result) => {
  console.log(result);
};

const handleClick = () => {
  console.log(getBaits(fish.slice(0, 3), fish.slice(4, 5)))
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={onDragEnd}>
          All drag-and-drop functionality happens inside this context
          <Droppable droppableId="fish">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {
                  fish.map((thisFish, index) => (
                    <Draggable key={thisFish.name} draggableId={thisFish.name} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div>{thisFish.name}</div>
                        </div>
                      )}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>¸
        </DragDropContext>
        <button onClick={handleClick}>Get Fish</button>
      </header>
    </div>
  );
}

export default App;
