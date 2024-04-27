import { Products } from "../../../lib/data";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import ProductType from "@/components/ProductType/ProductType";
import styles from "./ProductPage.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import { productTypes } from "../../../lib/data";
import { useRouter } from 'next/router';

const nunito = Nunito({subsets: ["latin"]});

const Services = () => {

  const [data, setData] = useState([]);


  const filterProducts = (arr: any) => {
    return arr.filter((p: any) => p.productType === 'Услуги') 
  }
 
  const fetchData = async () => {
    try {
      let response;
      
      response = await fetch('https://localhost:7164/Product');
      const res = await response.json();
      
      setData(filterProducts(res))
      
      
    } catch (error: any) {
      console.error(error)
    }
  };

  useEffect(() => { 
    fetchData()
  }, [data]) 


  return (

    <div className={`${styles.container} ${nunito.className}`}>
      <PositionRelative>

        {data.map((p:any) => <Product category='services' key={p.id} product={p} />)}
         
      </PositionRelative>
    </div>
  )
}

export default Services


