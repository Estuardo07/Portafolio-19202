import { Link } from "react-router-dom";
import Redes from "./Redes";
import Styles from '../Nav/Nav.module.css';
import inicio from '../../assets/Inicio.svg'
import proyectos from '../../assets/proyectos.svg'
import sobremi from '../../assets/sobremi.svg'



const Nav = () => {


  
    return(
        <header className={Styles.header}> 
            
            <span className={Styles.logo}>Javi</span> 

          <nav className={Styles.nav}>
            <Link to='/portafolio/'><span>I</span>nicio</Link>
            <Link to='/portafolio/proyectos'><span>P</span>royectos</Link>
            <Link to='/portafolio/sobremi'><span>S</span>obre <span>M</span>i</Link>
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
