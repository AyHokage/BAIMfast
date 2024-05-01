import { Products } from "../../../lib/data";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import ProductType from "@/components/ProductType/ProductType";
import styles from "./ProductPage.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import { productTypes } from "../../../lib/data";
import { useRouter } from 'next/router';
import ProductFilters from "@/components/ProductFilters/ProductFilters";

const nunito = Nunito({subsets: ["latin"]});

const MenuCategoryDetails = () => {
  const [url, setUrl] = useState('https://localhost:7164/Product?Filters=productType%3D%3DФлагманские%20продукты')
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products, url]);

  return (

    <div className={`${styles.container} ${nunito.className}`}>
      <PositionRelative>
        <div className={styles.horizontal}>
          <h1 className={styles.heading}>Наши продукты:</h1>
          <ProductFilters admin={false} setUrl={setUrl} />
        </div>
        {products.length > 0 ? 
        <div className={styles.cardsContainer}>{products.map((p: any, i: number) => <Product category='products' subcategory='sub' key={p.id} product={p} />)}</div> :
        <div className={styles.containerNone}>
          <p className={styles.noProductsText}>No products yet ƪ(˘⌣˘)ʃ</p>
        </div>}
         
      </PositionRelative>
    </div>
  )
}  

export default MenuCategoryDetails



