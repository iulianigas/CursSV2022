import { useState } from "react";

const AdaugareCuloare = (props) => {
  const [nume, setPret] = useState("");
  const [categorie, setcategorie] = useState("#ffffff");

  const handleClick = () => {
    props.handleClick({ categorie, nume });
  };

  const updatePret = (event) => {
    setPret(event.target.value);
  };

  return (
    <>
      <input className="input-text" type="text" value={nume} onChange={updatePret}></input>
      <input
        className="input-color"
        type="color"
        value={categorie}
        onChange={(e) => setcategorie(e.target.value)}
      ></input>
      <button className="button" onClick={handleClick}>Add</button>
    </>
  );
};

export default AdaugareCuloare;