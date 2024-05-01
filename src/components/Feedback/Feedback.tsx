import React, { useEffect, useState } from 'react';
import styles from './feedback.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile as happy } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam as veryHappy } from '@fortawesome/free-solid-svg-icons';
import { faFaceMeh as neutral } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrownOpen as kindaSad } from '@fortawesome/free-solid-svg-icons';
import { faFaceTired as sad } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {

    const [rating, setRating] = useState('very happy');

    useEffect(() => {
        console.log(rating)
    }, [rating])
 
    return (
        <div className={styles.rating}>
            <form className={styles.ratingForm}>
                <label htmlFor="sad" className="lb">
	                <input onChange={() => setRating('sad')} type="radio" name="rating" className={`${styles.sad} ${styles.input}`} id="sad" value="sad" />
	                <FontAwesomeIcon className={rating==='sad' ? styles.selected : styles.svg} icon={sad} />
                </label>

                <label htmlFor="kindaSad" className="lb">
	                <input onChange={() => setRating('kindaSad')} type="radio" name="rating" className={`${styles.kindaSad} ${styles.input}`} id="kindaSad" value="kindaSad" />
	                <FontAwesomeIcon className={rating==='kindaSad' ? styles.selected : styles.svg} icon={kindaSad} />
                </label>

                <label htmlFor="neutral" className="lb">
	                <input onChange={() => setRating('neutral')} type="radio" name="rating" className={`${styles.neutral} ${styles.input}`} id="neutral" value="neutral" />
	                <FontAwesomeIcon className={rating==='neutral' ? styles.selected : styles.svg} icon={neutral} />
                
                </label>

                <label htmlFor="happy" className="lb">
	                <input onChange={() => setRating('happy')} type="radio" name="rating" className={`${styles.superHappy} ${styles.input}`} id="happy" value="happy" />
	                <FontAwesomeIcon className={rating==='happy' ? styles.selected : styles.svg} icon={happy} />
                </label>
            
                <label htmlFor="veryHappy" className="lb">
	                <input onChange={() => setRating('very happy')} type="radio" name="rating" className={`${styles.superHappy} ${styles.input}`} id="veryHappy" value="veryHappy" />
	                <FontAwesomeIcon className={rating==='very happy' ? styles.selected : styles.svg} icon={veryHappy} />
                </label>
                
                
            </form>
        </div>
    );
}

export default Feedback;
  
