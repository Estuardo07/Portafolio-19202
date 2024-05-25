import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import styles from "../Nav/Redes.module.css";
const Redes = () => {
  return (
    <div className={styles.Redes}>
      <a
        target="_blank"
        href="https://www.linkedin.com"
      >
        <img src={linkedin} alt="logo de linkedin" />
      </a>

      <a target="_blank" href="https://github.com">
        <img src={github} alt="logo de github" />
      </a>

      <a target="_blank" href="https://www.instagram.com">
        <img src={instagram} alt="logo de instagram" />
      </a>
    </div>
  );
};

export default Redes;
