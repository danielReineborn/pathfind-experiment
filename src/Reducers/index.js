import {
  makeGrid
} from "../Utils";

export default function reducer(state, action) {
  let newGrid = [...state.grid];
  switch (action.type) {
    case "newStart":
      newGrid[state.start].start = false;
      newGrid[action.newStart].start = true;
      return {
        ...state, grid: newGrid, start: action.newStart
      };

    case "newEnd":
      /* let newGrid = [...state.grid]; */
      newGrid[state.end].end = false;
      newGrid[action.newEnd].end = true;
      return {
        ...state, grid: newGrid, end: action.newEnd
      };

    case "updateGrid":
      return {
        ...state, grid: action.updateGrid
      };

    case "wall":
      if (newGrid[action.wallNode].start || newGrid[action.wallNode].end || newGrid[action.wallNode].wall) return state; //Needs better solution.
      newGrid[action.wallNode].wall = true;
      newGrid[action.wallNode].color = "black";
      return {
        ...state, grid: newGrid
      };

    case "erase":
      if (newGrid[action.wallNode].start || newGrid[action.wallNode].end) return state; //Needs better solution.
      newGrid[action.wallNode].wall = false;
      newGrid[action.wallNode].color = "#E5EEDC";
      return {
        ...state, grid: newGrid
      };

    case "eraseWall":
      return {
        ...state, eraseWall: action.eraseWall
      }

      case "wallPaint":
        console.log("WALL", action.wallPaint)
        return {
          ...state, wallPaint: action.wallPaint
        };

      case "mousePress":
        return {
          ...state, mousePress: action.mousePress
        };

      case "reset":
        return {
          ...state, grid: makeGrid(30, 20), start: 154, end: 160, wallPaint: false, mousePress: false
        }



        default:
          return state;
  }
}