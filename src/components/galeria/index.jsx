import { useState } from "react";
import Tag from "components/tag";
import fotos from "common/fotos.json";
import Cards from "components/cards";

import styles from "./galeria.module.scss";

const Galeria = () => {
  const [itens, setItens] = useState(fotos);

  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => foto.tag === tag);
    setItens(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tag tags={tags} filtarFotos={filtarFotos} setItens={setItens} />
      <ul className={styles.galeria__cards}>
        {itens.map((foto) => (
          <Cards key={foto.id} styles={styles} itens={foto} />
        ))}
      </ul>
    </section>
  );
};

export default Galeria;
