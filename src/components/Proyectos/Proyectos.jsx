import styles from "../Proyectos/Proyectos.module.css";
import img1 from "../../assets/html.png";
import img2 from "../../assets/css.png";
import img3 from "../../assets/js.png";
import img4 from "../../assets/node.png";
import img5 from "../../assets/react.png";
import img6 from "../../assets/mysql.png";
import img7 from "../../assets/code.png";
import img8 from "../../assets/web.png";
import img9 from "../../assets/design.png";
import github from "../../assets/github.svg";
import page from "../../assets/url.svg";
import youtube from "../../assets/youtube.svg";

const Proyectos = () => {
  const tarjetas = [
    {
      image: [img1],
      name: "Lab 3: HTML Only",
      descrip: "Proyecto hecho solo con html.",
      tecno: [img1],
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com/Estuardo07/Lab3-19202.git",
    },
    
    {
      image: [img2],
      name: "Lab 4: CSS Only",
      descrip: "Proyecto hecho solo con css.",
      tecno: [img1, img2],
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com/Estuardo07/Lab4-19202.git",
    },

    {
      image: [img3],
      name: "Lab 5: JavaScript Only",
      descrip: "Proyecto hecho solo con javascript.",
      tecno: [img1, img2, img3],
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com/Estuardo07/Lab5-19202.git",
    },
  ];

  return (
    <section className={styles.Proyectos}>
      <div className={styles.servicios}>
        <h2>Tecnologías</h2>
        <div className={styles.habi}>
          <div>
            <img src={img1} alt="logo html" />
            <h5>HTML</h5>
          </div>

          <div>
            <img src={img2} alt="logo css" />
            <h5>CSS</h5>
          </div>

          <div>
            <img src={img3} alt="logo js" />
            <h5>JavaScript</h5>
          </div>

          <div>
            <img src={img4} alt="logo node" />
            <h5>Node JS</h5>
          </div>

          <div>
            <img src={img5} alt="logo react" />
            <h5>React JS</h5>
          </div>

          <div>
            <img src={img6} alt="logo" />
            <h5>MySQL</h5>
          </div>
        </div>

        <div>
          <h2 className={styles.h2S}>Servicios</h2>
          <div className={styles.metodo}>
            <div>
              <img src={img7} alt="imagen code" />
              <p>
                Desarrollo de soluciones específicas para tus aplicaciones web.
              </p>
            </div>

            <div>
              <img src={img8} alt="imagen web" />
              <p>Proyectos tecnológicos adaptados a tus necesidades.</p>
            </div>

            <div>
              <img src={img9} alt="imagen desing" />
              <p>Diseño responsivo para todos los dispositivos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        {tarjetas.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.image}>
                <img src={card.image[0]} alt={`imagen de ${card.name}`} />
              </div>

              <h3>{card.name}</h3>

              <span className={styles.descrip}>
                <p></p>
                {card.descrip}
              </span>

              <div className={styles.tecno}>
                <img src={card.tecno[0]} />
                <img src={card.tecno[1]} />
                <img src={card.tecno[2]} />
                <img src={card.tecno[3]} />
              </div>

              <div className={styles.btns}>
                <div>
                  <a target="_blank" href={card.urlGithub}>
                    <img src={github} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={card.url}>
                    <img src={page} alt="" />
                  </a>
                </div>

                {card.youtube == true ? (
                  <div>
                    <a target="_black" href={card.youtubeUrl}>
                      <img src={youtube} alt="" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
