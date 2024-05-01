import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import CardsCarousel from "@/components/CardsCarousel/CardsCarousel";
import Card from "@/components/Card/Card";
import styles from './Partners.module.css'

const Partners = () => {
    const images = ['/bakinity.png','/qarabag.png', '/mobis.png', '/chint.jpg', '/cpm.jpg', '/ceo.jpg' ];

    return (
      <PositionRelative>
        <div className={styles.horizontal}>
          <h1 className={styles.heading}>Наши партнёры:</h1>
        </div>
        <div className={styles.cardsContainer}>
        {images.map((img, i) => <Card type='partner' key={i} image={img} />)}
        </div>
    </PositionRelative>
    )
}

export default Partners