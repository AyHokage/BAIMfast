import { Products } from "../../../lib/data";
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import ProductType from "@/components/ProductType/ProductType";
import styles from "./ProductPage.module.css" 
import { Nunito } from "next/font/google";
import Product from "@/components/Product/Product"; 
import { useEffect, useState } from "react";
import { productTypes } from "../../../lib/data";
import { useRouter } from 'next/router';
import Image from "next/image";

const nunito = Nunito({subsets: ["latin"]});

const Services = () => { 

  useEffect(() => {
    const reveal = () => { 
      const reveals = document.querySelectorAll(".a");

      for (var i = 0; i < reveals.length; i++) {   
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
 

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); 

return (
<PositionRelative>

  <div className={styles.article}>

    <div className={styles.mainContainer}>
      <h1  className={styles.heading}>Наши услуги</h1>

      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
    </div>

    <div className={styles.grayBlock}>
      <div className={`${styles.mainContainer} ${styles.flex}`}>
        <Image className={`${styles.img} a fade-left`} src='/abonent.png' alt='img' width={200} height={200} />
        <div className={`${styles.sideText} a fade-right `}>
          <h2 className={styles.heading}>Абонентское обслуживание</h2>
          <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem cum doloremque incidunt ea magnam maiores excepturi animi labore dolores necessitatibus ad esse hic vitae ab ex ut, magni optio.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eligendi rem. Totam voluptas neque suscipit quia, ea dolores nemo obcaecati corporis inventore ut. Odit culpa at harum obcaecati. Ab.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.whiteBlock}>
      <div className={`${styles.mainContainer} ${styles.flex}`}>
        <div className={`${styles.sideText} a fade-left `}>
          <h2 className={styles.heading}>Абонентское обслуживание</h2>
          <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem cum doloremque incidunt ea magnam maiores excepturi animi labore dolores necessitatibus ad esse hic vitae ab ex ut, magni optio.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eligendi rem. Totam voluptas neque suscipit quia, ea dolores nemo obcaecati corporis inventore ut. Odit culpa at harum obcaecati. Ab.
          </p>
        </div>
        <Image className={`${styles.img} a fade-right`} src='/deploy.jpg' alt='img' width={200} height={200} />
      </div>
    </div>

    <div className={styles.grayBlock}>
      <div className={`${styles.mainContainer} ${styles.flex}`}>
        <Image className={`${styles.img} a fade-left`} src='/webdev.png' alt='img' width={200} height={200} />
        <div className={`${styles.sideText} a fade-right `}>
          <h2 className={styles.heading}>Абонентское обслуживание</h2>
          <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem cum doloremque incidunt ea magnam maiores excepturi animi labore dolores necessitatibus ad esse hic vitae ab ex ut, magni optio.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eligendi rem. Totam voluptas neque suscipit quia, ea dolores nemo obcaecati corporis inventore ut. Odit culpa at harum obcaecati. Ab.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.mainContainer}>
      <h2  className={styles.heading}>Подзаголовок</h2>

      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
    </div>

    <div className={styles.mainContainer}>
      <h2  className={styles.heading}>Подзаголовок</h2>

      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
    </div>

    <div className={styles.grayBlock}>
      <div className={styles.mainContainer}>
        <Image className={styles.bigImg} src='/business.jpg' alt='erp' width={500} height={500} />

        <h2  className={styles.heading}>Подзаголовок</h2>

        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
        </p>
        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
        </p>
      </div>
    </div>

    <div className={styles.mainContainer}>
      <h2  className={styles.heading}>Подзаголовок</h2>

      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
      </p>
    </div>

  </div>
   
</PositionRelative>
)
}

export default Services


