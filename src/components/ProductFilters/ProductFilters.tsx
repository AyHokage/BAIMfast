import React, { useState } from "react";
import styles from "./ProductFilters.module.css";
import FilterBtn from "../FilterBtn/FilterBtn";

interface Props {
  admin: boolean;
  setUrl: any;
}

const ProductFilters = ({ admin,setUrl }: Props) => {
  const [active, setActive] = useState(admin ? "" : "Флагманские продукты");
 
  const filtersLst = [
    "Флагманские продукты",
    "Услуги",
    "Пользовательские лицензии",
    "Серверные лицензии",
    "1С:ИТС",
    "",
  ];

  const filters = [
    "Флагманские продукты",
    "Услуги",
    "Пользовательские лицензии",
    "Серверные лицензии",
    "1С:ИТС"
  ]

  const drawFilters = () => {
    if (admin){
    return filtersLst.map((f, i) => (
      <FilterBtn
        title={f}
        key={i}
        setUrl={setUrl}
        active={active}
        setActive={setActive}
      />
    )); } else {
      return filters.map((f, i) => (
        <FilterBtn
          title={f}
          key={i}
          setUrl={setUrl}
          active={active}
          setActive={setActive}
        />
      ));
    }
  };

  return <div className={styles.containerFilter}>{drawFilters()}</div>;
};

export default ProductFilters;
