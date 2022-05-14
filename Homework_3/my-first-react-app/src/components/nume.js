import { useState } from "react";

const Nume = () => {
  const [culoare, setColor] = useState(false);

  const onClickHandler = () => {
    setColor(!culoare);
  };

  return (
    <div className="d-flex">
      <p className={culoare ? "culoare-preferata" : undefined} onClick={onClickHandler}>
        Igaș Iulian
      </p>
      {culoare ? <p> Numele de alături este colorat!</p> : undefined}
    </div>
  );
};

export default Nume;
