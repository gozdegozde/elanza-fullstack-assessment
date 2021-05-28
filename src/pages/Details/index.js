import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOneRequest, updateStatus } from "../../store/oneRequest/actions";
import { selectOneRequest } from "../../store/oneRequest/selectors";
import moment from "moment";


export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const request = useSelector(selectOneRequest);


  useEffect(() => {
    dispatch(fetchOneRequest(id));
  }, [id]);

  return (
 <div style = {{border: "solid 1px gray", padding: "30%"}}>
          <h1> REQUEST DETAILS</h1> 
            Type : {request.careType} <br/>
            
            Name : {request.clientName} <br/>
            Start Date : {moment(request.startDate).format("DD-MM-YYYY")} <br/>
            End Date :  {moment(request.endDate).format("DD-MM-YYYY")} <br/>
            Extra Information : {request.extraInfo} <br/>
            Status : {request.status ? "Open" : "Closed"} <br/>
            {request.status === true ? 
            <button onClick={(e) => {
                    e.preventDefault();

                    dispatch(updateStatus(request.id, request.status));
             }} >Apply </button> : 
            <button onClick={(e) => {
                    e.preventDefault();

                    dispatch(updateStatus(request.id, request.status));
             }}>Reopen </button>}

    </div>
  );
}