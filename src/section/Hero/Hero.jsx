import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
   <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} src={heroImg} 
        alt="Profile picutre" />
        <img 
        className={styles.colorMode} 
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
        <h1>Upama <br/> Shrestha</h1>
        <h2>Frontend Designer</h2>
        <span>
            <a href="https://facebook.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" /></a>
            <a href="https://github.com/UpamaShretha" target="_blank">
            <img src={githubIcon} alt="Github icon" /></a>
            <a href="https://www.linkedin.com/in/upama-shrestha-7985752a5/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" /></a>
        </span>
        <p className={styles.description}>
            Wtih a passion for designing React web apps for commercial business
        </p>
        <a href={CV} >
            <button className='hover' download>Resume</button>
        </a>
    </div>
   </section>
  )
}

export default Hero;
