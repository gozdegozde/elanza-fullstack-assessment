import React, {useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { fetchTodayRequest } from "../../store/todayRequest/actions";
import { selectTodayRequest } from "../../store/todayRequest/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function HomePage() {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const todayRequest = useSelector(selectTodayRequest);

    useEffect(()=> {
        dispatch(fetchTodayRequest(startDate))
    },[startDate])
    return(
        <div>
            <h1>OPEN REQUESTS</h1>
            <h3>Please choose a day and see all requests</h3>
             <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        />
        {console.log("Request",todayRequest)}
        {!todayRequest ? (
            <>There is no requests </>
        ) : (
            todayRequest.map((r)=> {
                return(
                    <div>
                         Requests :{r}
                    </div>
                )
            })
        )}

        <Link to ="./request">
            <button>New Request</button>
        </Link>
      
        </div>
    )

}