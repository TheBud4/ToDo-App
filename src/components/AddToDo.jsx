import plusIcon from "../assets/plus_icon.svg";
import { useState, useEffect } from "react";

function YourComponent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const Background = document.getElementById("bg");
      Background.addEventListener("click", closeAdd);
    } else {
      const Background = document.getElementById("bg");
      Background.removeEventListener("click", closeAdd);
    }

    return () => {
      const Background = document.getElementById("bg");
      Background.removeEventListener("click", closeAdd);
    };
  }, [open]);

  const openAdd = () => {
    setOpen(true);
  };

  function closeAdd() {
    setOpen(false);
  }

  return (
    <>
      <button className="addToDo" onClick={openAdd}>
        <img src={plusIcon} alt="Add" />
      </button>
      {open ? (
        <div className="Background" id="bg">
          <div className="modalToDo">
            <form>{/* Your form content here */}</form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default YourComponent;
