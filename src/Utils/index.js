export function makeGrid(x, y) {
  return Array.from({
    length: x * y
  }).map((v, i) => {
    return {
      id: i,
      weight: 1,
      via: i,
      distance: 0,
      candidateCost: null,
      solved: false,
      start: false,
      end: false,
      connected: defineConnected(i, x, y)

    }
  })
}

/* [
  i - x + 1, i - x, i - x - 1,
  i - 1, i + 1,
  i + x - 1, i + x, i + x + 1
] */

export function startEndVertex(x, y, start, end) {
  let grid = makeGrid(x, y);
  if (start) {

    grid[start].start = true;
  }
  if (end) {
    grid[end].end = true;
  }
  return grid;
}


// Göra så att algoritmen faktiskt prioriterar väg. Nu hittar den en väg men finns ingen prio.
// Hanterar värdena fel.
export function findPath(grid, cv) {
  let foundNode = false;
  let rV;

  function innerFindPath(grid, cv) {

    grid[cv].solved = true;

    if (grid[cv].start) {
      grid[cv].distance = 0;

    } else {
      grid[cv].distance += grid[cv].candidateCost;
    }

    if (grid[cv].end) {
      foundNode = true;
      rV = grid[cv].id;
      console.log(rV);
      return rV;


    } else {

      for (let v of grid[cv].connected) {

        if (grid[v].solved) {
          continue;
        } else {

          grid[v].candidateCost = grid[cv].distance + grid[v].weight;
          grid[v].via = grid[cv].id;

          if (!foundNode) innerFindPath(grid, grid[v].id);
        }

      }
    }


  }

  if (!foundNode) innerFindPath(grid, cv);

  return rV;

}
// lägg in hela object o hantera weight.
export function defineConnected(i, x, y) {
  let connections = [
    i - (x + 1), i - x, i - (x - 1),
    i - 1, i + 1,
    i + (x - 1), i + x, i + (x + 1),
  ]
  let rmTop = [i - (x + 1), i - x, i - (x - 1), ];
  let rmRight = [i - (x - 1), i + 1, i + (x + 1)];
  let rmBot = [i + (x - 1), i + x, i + (x + 1)];
  let rmLeft = [i - (x + 1), i - 1, i + (x - 1)];

  // if top wall.
  if (i < x) {
    for (let i = 0; i < connections.length; i++) {
      if (connections[i] === rmTop[0] ||
        connections[i] === rmTop[1] ||
        connections[i] === rmTop[2]) {
        connections.splice(i, 1);
        i--;
      }
    }
  }
  // if right wall
  if (i % x === x - 1) {

    for (let i = 0; i < connections.length; i++) {
      if (connections[i] === rmRight[0] ||
        connections[i] === rmRight[1] ||
        connections[i] === rmRight[2]) {
        connections.splice(i, 1);
        i--;
      }
    }

  }

  // if bot wall
  if (i >= (x * y) - x) {

    for (let i = 0; i < connections.length; i++) {
      if (connections[i] === rmBot[0] ||
        connections[i] === rmBot[1] ||
        connections[i] === rmBot[2]) {
        connections.splice(i, 1);
        i--;
      }
    }
  }

  // if left wall
  if (i % x === 0) {

    for (let i = 0; i < connections.length; i++) {
      if (connections[i] === rmLeft[0] ||
        connections[i] === rmLeft[1] ||
        connections[i] === rmLeft[2]) {
        connections.splice(i, 1);
        i--;
      }
    }
  }
  return connections;
}

export function returnShortestPath(grid, v) {
  let path = [];
  if (grid[v].start === false) {
    path.push(grid[v].via)
    path = path.concat(returnShortestPath(grid, grid[v].via))
  }
  return path;

}