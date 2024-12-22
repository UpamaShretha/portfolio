import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard 
           src={Viberr} link= "https://github.com/"
           h3='Viberr' 
           p="Streming app"
           />

           <ProjectCard 
           src={freshBurger} link= "https://github.com/"
           h3='Fresh Burger' 
           p="Hamburger resturant"
           />  
              
          <ProjectCard 
           src={hipsster} link= "https://github.com/"
           h3='Hipsster' 
           p="Glass shop"
           />      
        </div>
    </section>
  );
   
}

export default Projects
