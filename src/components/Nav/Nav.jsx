import { Link } from "react-router-dom";
import Redes from "./Redes";
import Styles from '../Nav/Nav.module.css';
import inicio from '../../assets/Inicio.svg'
import proyectos from '../../assets/proyectos.svg'
import sobremi from '../../assets/sobremi.svg'



const Nav = () => {


  
    return(
        <header className={Styles.header}> 
            
            <span className={Styles.logo}>Javier Hernández</span> 

          <nav className={Styles.nav}>
            <Link to='/portafolio/'><span>H</span>ome</Link>
            <Link to='/portafolio/proyectos'><span>P</span>rojects</Link>
            <Link to='/portafolio/sobremi'><span>A</span>bout<span>-</span>Me</Link>
          </nav>

          <nav className={Styles.nav_mobile}>
            <Link to='/portafolio/'>
              <img src={inicio} alt="logo del inicio" />
            </Link>
            <Link to='/portafolio/proyectos'>
              <img src={proyectos} alt="" />
            </Link>
            <Link to='/portafolio/sobremi'>
            <img src={sobremi} alt="" />
            </Link>
          </nav>

            <Redes/>

        </header>
    )
}

export default Nav;
