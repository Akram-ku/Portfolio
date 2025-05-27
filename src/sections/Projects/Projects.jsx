import styles from './ProjectsStyles.module.css';
import dashboard from '../../assets/dashboard.png';
import memoryGame from '../../assets/memory.png';
import payment from '../../assets/payment.png';
import Kido from '../../assets/kido.png';
import bytelabs from '../../assets/bytelabs.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dashboard}
          link="https://github.com/Akram-ku/MobioTrip-admin-dashboard"
          h3="Admin dash"
          p=" Modern Admin dashboard"
        />
        <ProjectCard
          src={memoryGame}
          link="https://github.com/Akram-ku/Memory-game"
          h3="Memory Game"
          p="Highly responisve Game"
        />
        <ProjectCard
          src={Kido}
          link="https://github.com/Akram-ku/social-media-platform-for-kids"
          h3="KidoConnect"
          p="Social media platform for kids"
        />
        <ProjectCard
          src={payment}
          link="https://github.com/Akram-ku/MobioTrip-payment-dashboard"
          h3="Payment Dash"
          p="Modern Payment Dashboard"
        />
        <ProjectCard
          src={bytelabs}
          link="https://byte-labs-seven.vercel.app/"
          h3="ByteLabs"
          p="independent small scale company"
        />
      </div>
    </section>
  );
}

export default Projects;
