import openIcon from "assets/open.png";
import FavIcon from "assets/favorito.png";

const Cards = ({ itens, styles }) => {
  return (
    <li key={itens.id} className={styles.galeria__card}>
      <img
        src={itens.imagem}
        alt={itens.titulo}
        className={styles.galeria__imagem}
      />
      <p className={styles.galeria__descricao}>{itens.titulo}</p>
      <div>
        <p>{itens.creditos}</p>
        <span>
          <img src={FavIcon} alt="icone coração de curtir" />
          <img src={openIcon} alt="icone de abrir modal" />
        </span>
      </div>
    </li>
  );
};

export default Cards;
