import React, { FC } from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <h1> Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus
        reiciendis ullam accusantium quae expedita ab praesentium delectus
        repellat rem architecto numquam vero, fugiat minima quas reprehenderit
        necessitatibus adipisci explicabo.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        {" "}
        Back to todos
      </button>
    </>
  );
};
