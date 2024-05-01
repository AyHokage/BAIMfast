import Card from "@/components/Card/Card";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import styles from './Clients.module.css'
import ComboCheckBox from "@/components/ComboCheckBox/ComboCheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination/Pagination";

const Clients = () => {
  const images = ['/qarabag.png', '/caspian.jpg', '/chint.jpg', '/cpm.jpg', '/ceo.jpg', '/elmanado.jpg' ];

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (item : string) => {
    const isChecked = selectedItems.includes(item);
    const updatedItems = isChecked
      ? selectedItems.filter((selectedItem : any) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedItems);
  };

  const deleteFilter = (item : string) => {
    const updatedItems = selectedItems.filter((selectedItem : any) => selectedItem !== item);

    setSelectedItems(updatedItems);
  };

  const deleteAllFilters = () => {
    setSelectedItems([]);
  }
  
  useEffect(() => {
    console.log(selectedItems)
  }, [selectedItems])

  return (
    <PositionRelative>

        <div className={selectedItems.length == 0 ? styles.none : styles.showFilters}>
          <div onClick={deleteAllFilters} className={styles.deleteAllFilters}>
            <p className={styles.filter}>Очистить</p>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {selectedItems.map((item, i) => 
            <div onClick={() => deleteFilter(item)} key={i} className={styles.deleteFilter}>
              <p className={styles.filter}>{item}</p>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          )}
        </div>

        <div className={styles.horizontal}>
          <h1 className={styles.heading}>Наши клиенты:</h1>
          <div className={styles.filters}>

          <div className={styles.searchContainer}>
                <input
                  type="text" placeholder="Поиск..."
                  className={styles.input}
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              {/* <ComboCheckBox selectedItems={selectedItems} setSelectedItems={setSelectedItems} handleItemClick={handleItemClick} />
              <div className={styles.checkboxContainer}>
                  <div onClick={() => handleItemClick('Государственная')} className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Государственная') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Государственная</span>
                  </div>
              </div> */}
          </div>
        </div>
        <div className={styles.clients}>
          
          <div className={styles.sideFilters}>
              <h2 className={styles.filterHeading}>Фильтры:</h2>
              
              <h3 className={styles.filterHeading}>По виду деятельности:</h3>
              <div onClick={() => handleItemClick('Образование')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Образование') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Образование</span>
                  </div>
              </div>
              <div onClick={() => handleItemClick('Красота')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Красота') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Красота</span>
                  </div>
              </div>
              <div onClick={() => handleItemClick('Такси')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Такси') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Такси</span>
                  </div>
              </div>
              <div onClick={() => handleItemClick('IT')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('IT') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>IT</span>
                  </div>
              </div>
              <div onClick={() => handleItemClick('Кансалтинг')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Кансалтинг') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Кансалтинг</span>
                  </div>
              </div>

              <h3 className={styles.filterHeading}>По организационно-правовой форме:</h3>
              <div onClick={() => handleItemClick('Государственная')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Государственная') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Государственная</span>
                  </div>
              </div>
              <div onClick={() => handleItemClick('Коммерческая')} className={styles.checkboxContainer}>
                  <div className={styles.item}>
                    <span className={styles.checkbox}>
                        {selectedItems.includes('Коммерческая') ? <FontAwesomeIcon icon={faCheck} /> : <></>}
                    </span>
                    <span className={styles.itemText}>Коммерческая</span>
                  </div>
              </div>

              
              
          </div>
          <div >
            {images.map((img, i) => <Card type='client' key={i} image={img} />)}
          </div>
        </div>
    </PositionRelative>
  ) 
}

export default Clients  