import styles from './Card.module.css'
import Image from 'next/image' 
import Link from 'next/link'

const Card = ({type, image}: any) => {
  return (
    <div className={`${styles.horizontal}`}>    
        <Image
          className={styles.imgContainer} 
          src={image}
          alt="Product image" 
          width={280}
          height={220}
        /> 
 
      <div className={styles.productContent}>
        <div className={styles.productTitle}>
          <h2 className={styles.title}>Company name</h2>
        </div>
        {type === 'client' ?
        <>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora enim optio, officia animi officiis eum ex. Consectetur quae asperiores maxime velit delectus. Exercitationem unde hic quam quis, voluptas architecto...</p>
          <Link className={styles.link} href='/clients/1'>Подробнее</Link>
        </> : 
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora enim optio, officia animi officiis eum ex. Consectetur quae asperiores maxime velit delectus. Exercitationem unde hic quam quis, voluptas architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero ipsum veniam reiciendis doloremque, pariatur eum odio, harum fugit dolorum illo totam! Numquam reprehenderit voluptatum voluptas saepe accusamus illo corporis?</p>}
      </div> 
    </div>
  )
}

export default Card