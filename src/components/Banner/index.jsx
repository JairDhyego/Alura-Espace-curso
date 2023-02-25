import banner from "assets/banner.png";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="A imagem da taerra mais vista do espaço" />
    </div>
  );
};

export default Banner;
