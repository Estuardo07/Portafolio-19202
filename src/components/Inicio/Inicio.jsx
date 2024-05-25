import styles from '../Inicio/inicio.module.css'
import Botones from './Botones/Botones';
import FullStack from './FullStack/FullStack'
const Inicio = () => {
    return(
      <section className={styles.Home}>
        <div className={styles.full}>
        <FullStack/> 
        </div> 

        <div className={styles.btnAndName}>
          <span>Javier Hernández</span> 
          <Botones/>
        </div>
      </section>
    )
}

export default Inicio;
