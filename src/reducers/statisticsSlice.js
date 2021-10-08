import {createSlice} from "@reduxjs/toolkit";
import {statisticsMockData} from "../mock/statisticsMockData";

const statisticsSlice = createSlice({
    name: "statistics",
    initialState: statisticsMockData,
    reducers: {}
})

export default statisticsSlice.reducer


export const getStatisticsId = state => state.statistics.id