import React, {useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { fetchTodayRequest } from "../../store/todayRequest/actions";
import { selectTodayRequest } from "../../store/todayRequest/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Request from "../../components/Request";
import moment from "moment"

export default function HomePage() {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const todayRequest = useSelector(selectTodayRequest);
    const date = moment(startDate).format("YYYY-MM-DD");


    useEffect(()=> {
        dispatch(fetchTodayRequest(date))
    },[date])
    return(
        <div>
            <h1>OPEN REQUESTS</h1>
            <h3>Please choose a day and see all requests</h3>
             <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        />
        
        {!todayRequest ? (
            <>There is no requests </>
        ) : (
            todayRequest.map((request)=> {
                return(
                    <div>
                        <Request request={request}/>
                    </div>
                )
            })
        )}

        <Link to ="./newrequest">
            <button>New Request</button>
        </Link>
      
        </div>
    )

}