import { useState } from "react";

const AdaugareCuloare = (props) => {
  const [nume, setName] = useState("");
  const [culoareCategorie, setCuloareCategorie] = useState("#ffffff");

  const handleClick = () => {
    props.handleClick({ culoareCategorie, nume });
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="d-flex">
      <input className="input-text" type="text" value={nume} onChange={updateName}></input>
      <input
        className="input-color"
        type="color"
        value={culoareCategorie}
        onChange={(e) => setCuloareCategorie(e.target.value)}
      ></input>
      <button className="button" onClick={handleClick}>Add</button>
      </div>
      
    </>
  );
};

export default AdaugareCuloare;