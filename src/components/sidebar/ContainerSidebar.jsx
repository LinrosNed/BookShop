import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresThunk } from "../../redux/reducer";
import Sidebar from "./Sidebar";

function ContainerSidebar() {

  const dispatch = useDispatch();

  const { genres } = useSelector((state) => state.infoBookReducer);

  useEffect(() => {
    dispatch(getGenresThunk());
  }, [dispatch]);

  return ( <Sidebar genres={genres} /> );
};


export default ContainerSidebar;