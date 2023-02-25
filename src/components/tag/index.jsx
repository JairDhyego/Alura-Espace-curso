import styles from "./tag.module.scss";
import fotos from "common/fotos.json";

const Tag = ({ tags, filtarFotos, setItens }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => (
          <li onClick={() => filtarFotos(tag)} key={tag}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tag;
