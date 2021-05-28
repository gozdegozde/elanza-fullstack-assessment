import React, {useState, useEffect } from "react";
import DatePicker from "react-datepicker";

export default function HomePage() {
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div>
            <h1>OPEN REQUESTS</h1>
            <h3>Please choose a day and see all requests</h3>
             <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
      />
        </div>
    )

}