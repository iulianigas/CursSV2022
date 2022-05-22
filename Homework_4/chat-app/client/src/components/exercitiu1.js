import ProdusAlimentar from "./produs_alimentar";

const Exercitiu1 = () => {
  return (
    <div className="example">
      <ProdusAlimentar
        nume="Banane"
        pret="20 lei/kg"
        culoareCategorie="#ffff00"
        categorie="Fructe"
      />

      <ProdusAlimentar
        nume="Căpșuni"
        categorie="Fructe"
      />
      
      <ProdusAlimentar
      nume="Ciocolată"
      pret="10 lei/buc"
      categorie="Dulciuri"
      culoareCategorie="#A52A2A"
      />
    </div>
  );
};

export default Exercitiu1;