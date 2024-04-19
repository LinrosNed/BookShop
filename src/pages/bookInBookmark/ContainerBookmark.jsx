import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bookmark } from "./Bookmark";
import { getBookFavoriteThunk } from "../../redux/reducer";

function ContainerBookmark() {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.infoBookReducer);

  useEffect(() => {
    dispatch(getBookFavoriteThunk());
  }, [dispatch]);

  return (
    <>
      <div className="card-list">
        <Bookmark favorite={favorite} />
      </div>
    </>
  );
}

export default ContainerBookmark;
