import styles from './ProjectFeedback.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket as rocket } from '@fortawesome/free-solid-svg-icons';
import Feedback from '../Feedback/Feedback';

const ProjectFeedback = () => {
  return (
    <div className={styles.desc}> 
      <div className={styles.header}>
        <FontAwesomeIcon className={styles.ico} icon={rocket} />
        <h2 className={styles.heading}>{`Project's rating :`}</h2>
      </div>
        <Feedback />
    </div>
  )
}

export default ProjectFeedback