import {useSelector} from "react-redux";
import {createTheme} from "@mui/material";
// import {data} from "../theme";
// import {useEffect} from "react";
import {allStyle} from "../reducers/styleSlice";

export const useTheme = () => {

    // todo убрать после тестирования
    // const dispatch = useDispatch()
    // const theme = data
    // useEffect(() => {
    //     dispatch(postAllStyleSuccess(theme.components))
    // })
    //

    const allStyles = useSelector(allStyle)
    return createTheme({components:allStyles})
}
