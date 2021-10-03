import {createSlice} from "@reduxjs/toolkit";
import {statisticsMockData} from "../mock/statisticsMockData";

const statisticsSlice = createSlice({
    name: "statistics",
    initialState: statisticsMockData,
    reducers: {}
})

export default statisticsSlice.reducer