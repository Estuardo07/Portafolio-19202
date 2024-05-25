import styles from "../Proyectos/Proyectos.module.css";
import img1 from "../../assets/html.png";
import img2 from "../../assets/css.png";
import img3 from "../../assets/js.png";



const Proyectos = () => {
  const tarjetas = [
    {
      image: [img1],
      name: "Lab 3: HTML Only",
      descrip: "Proyecto hecho solo con html.",
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com",
    },
    
    {
      image: [img2],
      name: "Lab 4: CSS Only",
      descrip: "Proyecto hecho solo con css.",
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com",
    },

    {
      image: [img3],
      name: "Lab 5: JavaScript Only",
      descrip: "Proyecto hecho solo con javascript.",
      url: "https://arpanetos.lol",
      urlGithub: "https://github.com",
    },
  ];

  return (
    <section className={styles.Proyectos}>
      <div className={styles.servicios}>
        <h2>Technologies</h2>
        <div className={styles.habi}>
          <div>
            <img src={logo2} alt="logo html" />
            <h5>HTML</h5>
          </div>

          <div>
            <img src={logo5} alt="logo css" />
            <h5>CSS</h5>
          </div>

          <div>
            <img src={logo4} alt="logo js" />
            <h5>JAVASCRIPT</h5>
          </div>

          <div>
            <img src={logo7} alt="logo node" />
            <h5>NODE</h5>
          </div>

          <div>
            <img src={logo1} alt="logo react" />
            <h5>REACT</h5>
          </div>

          <div>
            <img src={logo8} alt="logo" />
            <h5>PostgreSQL</h5>
          </div>
        </div>

        <div>
          <h2 className={styles.h2S}>Services</h2>
          <div className={styles.metodo}>
            <div>
              <img src={code} alt="imagen code" />
              <p>
                Development of specific solutions for your modern web
                applications.
              </p>
            </div>

            <div>
              <img src={web} alt="imagen web" />
              <p>Technological projects adapted to your needs.</p>
            </div>

            <div>
              <img src={desing} alt="imagen desing" />
              <p>Responsive design for all devices</p>
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
