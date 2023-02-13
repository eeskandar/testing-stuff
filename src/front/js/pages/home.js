import React, { useContext } from "react";
import { Context } from "../store/appContext";
import catImg from "../../img/crying-cat-home.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello, mate!</h1>
      <h3 className="my-4">
        This site is an attempt to put in order some of the knowledge I have
        about this cursed game in a desperate cry for help
      </h3>
      <p>
        <img src={catImg} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
    </div>
  );
};
