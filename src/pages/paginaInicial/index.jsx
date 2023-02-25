import styles from "./paginaInicial.module.scss";

import Cabecalho from "components/cabecalho";
import Menu from "components/menu";
import Banner from "components/Banner";
import Footer from "components/footer";
import Galeria from "components/galeria";
import Populares from "components/Populares";

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PaginaInicial;
