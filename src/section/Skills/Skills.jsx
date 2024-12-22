import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='HTML' />
      <SkillList src={checkMarkIcon} skill='CSS' />
      <SkillList src={checkMarkIcon} skill='JavaScript' />
      <SkillList src={checkMarkIcon} skill='Node' />
      <SkillList src={checkMarkIcon} skill='React' />
    </div>
    <hr />
    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill='Java' />
    <SkillList src={checkMarkIcon} skill='DOM Manipulation' />
    <SkillList src={checkMarkIcon} skill='OOAD' />
    </div>
    <hr />
    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
    <SkillList src={checkMarkIcon} skill='Bootstrap' />
    <SkillList src={checkMarkIcon} skill='Git' />
    
    </div>
   </section>
  )
}

export default Skills