import Image from "next/image"
import styles from './Product.module.css'
import { useRouter } from "next/router"
import Link from "next/link"

interface Props {
    name: string,
    desc: string
    img: string
} 

export default function ProductType({category, productType}: any) {
  const router = useRouter()

  return (
    <div className={styles.horizontal}>                
        <Image
          className={styles.imgContainer}
          src={productType.img}
          alt="Product image"
          width={280}
          height={220}
        />
 
      <div className={styles.productContent}>
        <div className={styles.productTitle}>
          <h2 className={styles.title}>{productType.name}</h2>
        </div>

        <p className={styles.desc}>
          {productType.desc} 
        </p>
        {category !== "services" ? <button className={styles.link} onClick={() => router.push(`/${category}/${productType.name}`)}>Подробнее</button>  : <></>}
      </div>
    </div>
  )
}
