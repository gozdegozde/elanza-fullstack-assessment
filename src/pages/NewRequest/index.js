import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { newRequest } from "../../store/oneRequest/actions";

export default function NewRequest() {
    const dispatch = useDispatch();
  const [careType, setCareType] = useState("");
  const [clientName, setClientName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [extraInformation, setExtraInformation] = useState("");
  
   function submitForm(event) {
    event.preventDefault();
    dispatch(
      newRequest({
        careType,
        startDate,
        endDate,
        clientName,
        extraInformation,
      })
    );
    setCareType("");
    setClientName("");
    setStartDate("");
    setEndDate("");
    setEndDate("");
    setExtraInformation("");
    alert("Request created");
  }
    return (
    <div>
      <h1>New Request</h1>
      
        <form>
       
            <label>Care Type :</label>  &nbsp;
            <select
              onChange={(e) => {
                setCareType(e.target.value);
              }}
            >
             <option ></option>
              <option value={"medical"}>medical</option>
              <option value={"household"}>household</option>
            </select>
         
<br/>
         <br/>
             <label> Start Date : </label> 
             <br/>
            <input
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              type="datetime-local"
            />
         
         <br/>
         <br/>
            <label>End date : </label><br/>
            <input
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              type="datetime-local"
            />
        <br/>
        <br/>
            <label> Name :</label> <br/>
            <input
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              type="text"
              required
            />
         <br/>
          <br/>
            <label>Extra information :</label> <br/>
         
            <input
              value={extraInformation}
              onChange={(event) => setExtraInformation(event.target.value)}
              type="text"
              required
            />
         <br/>
         <br/>
          <button type="submit" onClick={submitForm} >
            Create New Request
          </button>
        </form>
      
    </div>
    )
}