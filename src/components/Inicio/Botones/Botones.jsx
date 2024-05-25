import styles from '../Botones/botones.module.css';

const Botones = () => {
    return(
      <div className={styles.Botones}>
       <button><a className={styles.a} target='_blank' href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTNHSCmLGXmjRjlthDCCdvbBSmkQjcKJvmPrTdvGPvPLLBFVWrVqnfjrSLNvfPWGXSvMZL">GMAIL</a></button>
       <button><a className={styles.a} target='_blank'  href="https://drive.google.com/file/d/1fsLDnhIrlZqY1i3r2WeER9PSeKB9sj5X/view?usp=sharing">CV</a></button>
      </div> 
    )
}
 
export default Botones; 
