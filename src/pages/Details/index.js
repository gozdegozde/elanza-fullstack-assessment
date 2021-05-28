import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOneRequest } from "../../store/oneRequest/actions";
import { selectOneRequest } from "../../store/oneRequest/selectors";


export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const request = useSelector(selectOneRequest);


  useEffect(() => {
    dispatch(fetchOneRequest(id));
  }, [id]);

  return (
    <div>
      <h1>Request Details</h1>
    
     Client Name{request.clientName}
    </div>
  );
}