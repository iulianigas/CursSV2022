import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProdusAlimentar = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  const onRemoveProdusClick = () => {
    props.handleRemove(props.id);
  };

  if (props.withLoading && !loaded) return <div>Loading, please wait!</div>;

  return (
    <div className="produs-alimentar">
      <div className="categorie" style={{ backgroundColor: props.culoareCategorie }}>{props.categorie}</div>
      <div className="nume">{props.nume}</div>
      <div className="pret">{props.pret}</div>
      {props.handleRemove && (
        <div onClick={onRemoveProdusClick} className="remove-produs">
          X
        </div>
      )}
    </div>
  );
};

ProdusAlimentar.propTypes = {
  categorie: PropTypes.string,
  nume: PropTypes.string,
  pret: PropTypes.string
};

ProdusAlimentar.defaultProps = {
  culoareCategorie: "red",
  categorie: "Preț inexistent",
  nume: "Preț inexistent",
  pret: "Preț inexistent",
};

export default ProdusAlimentar;