import { useState } from "react";
import ProdusAlimentar from "../components/produs_alimentar"
import AdaugareCuloare from "./adaugare_culoare";

const Exercitiu3 = () => {
  const [produse_alimentare, setProduse] = useState([
    { id: 0, nume: "Piersică", pret: "15 lei/kg", categorie: "Fructe", culoareCategorie: "green" },
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

  return (
    <div className="form">
      <AdaugareCuloare handleClick={adaugareProdus} />
        <div className="d-flex">
          {produse_alimentare.map((produs_alimentar) => (
            <ProdusAlimentar key={produs_alimentar.id} {...produs_alimentar} handleRemove={removeProdus} />
          ))}
        </div>
    </div>
  );
};

export default Exercitiu3;