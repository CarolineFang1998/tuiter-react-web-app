import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitsItem from "./tuits-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector((state) => tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
        </ul>
    );
};
export default TuitsList;