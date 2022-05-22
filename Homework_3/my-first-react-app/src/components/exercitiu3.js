import { useState } from "react";
import ProdusAlimentar from "../components/produs_alimentar"
import AdaugareCuloare from "./adaugare_culoare";

const Exercitiu3 = () => {
  const [produse_alimentare, setProduse] = useState([
    { id: 0, nume: "Piersică", pret: "15 lei/kg", categorie: "Fructe", culoareCategorie: "#ffffff" },
  ]);

  const adaugareProdus = (produs_alimentar) => {
    const newProduse = [...produse_alimentare];
    produs_alimentar.id = produse_alimentare.length;
    newProduse.push(produs_alimentar);
    setProduse(newProduse);
  };

  const removeProdus = (id) => {
    const newProduse = produse_alimentare.filter((produs_alimentar) => produs_alimentar.id !== id);
    setProduse(newProduse);
  };

  const setGradientColor = () => {
    const newProduse = produse_alimentare
      .map((produs_alimentar) => produs_alimentar.culoareCategorie)
      .toString();
    switch (produse_alimentare.length) {
      case 0:
        return "#ffffff";
      case 1:
        return newProduse;
      default:
        return `linear-gradient(${newProduse})`;
    }
  };

  return (
    <div className="form">
      <p>Alegeti numele si culoarea</p>
      <AdaugareCuloare handleClick={adaugareProdus} />
  
      <div
        className="gradient-box"
        style={{ background: `${setGradientColor()}` }}
      ></div>
        
      <div className="d-flex">
        {produse_alimentare.map((produs_alimentar) => (
          <ProdusAlimentar key={produs_alimentar.id} {...produs_alimentar} handleRemove={removeProdus} />
        ))}
      </div>
    </div>
  );
};

export default Exercitiu3;