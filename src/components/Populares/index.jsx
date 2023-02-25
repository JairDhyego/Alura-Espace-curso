import fotosPopulares from "./fotos-populares.json";

import styles from "./populares.module.scss";

const Populares = () => {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map((fotoPupular) => (
          <li kye={fotoPupular.id}>
            <img src={fotoPupular.path} alt={fotoPupular.alt} />
          </li>
        ))}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
};

export default Populares;
