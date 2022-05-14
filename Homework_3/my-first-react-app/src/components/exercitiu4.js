import ProdusAlimentar from "./produs_alimentar";

const Exercitiu4 = () => {
  return (
    <div className="example">
      <ProdusAlimentar withLoading={true} culoareCategorie="orange" nume="Fanta" categorie="Suc" pret="5 lei" />
    </div>
  );
};

export default Exercitiu4;