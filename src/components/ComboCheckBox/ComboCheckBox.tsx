import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ComboCheckBox.module.css';

const ComboCheckBox = ({selectedItems, setSelectedItems, handleItemClick}: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
            <div className={styles.selectBtn} onClick={toggleOpen}>
                <span className={styles.btnText}>Вид деятельности</span>
                <span className={styles.arrowDwn}>
                    {isOpen ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                </span>
            </div>
            <ul className={isOpen ? styles.listItems : styles.listItemsOpen}>
                <li onClick={() => handleItemClick('Такси')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Такси') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Такси</span>
                </li>
                <li onClick={() => handleItemClick('Косметика')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Косметика') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Косметика</span>
                </li>
                <li onClick={() => handleItemClick('IT')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('IT') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>IT</span>
                </li>
            </ul>
        </div>
 );
};

export default ComboCheckBox;
