import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerThunk } from "../../redux/reducer";
import { StartPage } from "./StartPage";

function ContainerStartPage() {
  const dispatch = useDispatch();
  const { banners, downloadedBooks } = useSelector((state) => state.infoBookReducer);

  useEffect(() => {
    dispatch(getBannerThunk());
  }, [dispatch]);

  return (
    <StartPage banners={banners} books={downloadedBooks} />
  );
}

export default ContainerStartPage;
