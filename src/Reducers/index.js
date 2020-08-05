export default function reducer(state, action) {
  let newGrid = [...state.grid];
  switch (action.type) {
    case "newStart":
      newGrid[state.start].start = false;
      newGrid[action.newStart].start = true;
      return { ...state, grid: newGrid, start: action.newStart };

    case "newEnd":
      /* let newGrid = [...state.grid]; */
      newGrid[state.end].end = false;
      newGrid[action.newEnd].end = true;
      return { ...state, grid: newGrid, end: action.newEnd };
    default:
      return state;
  }
}