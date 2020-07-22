import React, { useState } from "react";

import { makeGrid } from "../Utils";
import Grid from "./Grid";


export default function DataLayer() {

  const grid = makeGrid(50, 20);


  return (
    <Grid grid={grid} />
  )
}