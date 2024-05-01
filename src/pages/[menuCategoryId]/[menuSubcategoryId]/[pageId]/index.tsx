import Article from "@/components/Article/Article"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout"
import { useEffect, useState } from "react"
import { productTypes } from "../../../../../lib/data"
import NoInfo from "@/components/NoInfo/NoInfo"
import Error from "@/components/ErrorPage/ErrorPage"

 
const Page = ({category, subcategory, page, news}: any) => {
  const [item, setItem] = useState({})
  const [isLoaded, setIsLoaded] = useState(true);
  const types = productTypes.map(p => p.name)

  // const getItem = (arr: any) => {
  //   const filtered = arr.filter((a: any) => a.name ? a.name === page : a.title === page)
  //   return filtered
  // }
 
  const fetchProduct = async() => {
    try {
    const response = await fetch(`https://localhost:7164/Product/ById/${page}`);
    const res = await response.json();
    setItem(res)
    console.log(res)
    } catch (err){
      console.error(err)
    }
    // if (res.length ===0){setIsLoaded(false)}
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  
  return ( 
    <>
      {isLoaded ?
      <PositionRelative>
          {
            item ? 
            <>
            <Article product={item} /></>
            : <NoInfo />
          }
      </PositionRelative> :
      <Error />
      }
    </>
  )
}

export default Page


export async function getServerSideProps(context: any) {
    const {params} = context

    // const getItem = (arr: any) => {
    //   const filtered = arr.filter((a: any) => a.name ? a.name === params.pageId : a.title === params.pageId)
    //   return filtered
    // }

    // const response = await fetch('http://localhost:3000/api/news');
    // const res = await response.json();
    // const filtered = getItem(res)

    return {
        props: {
            category: params.menuCategoryId,
            subcategory: params.menuSubcategoryId,
            page: params.pageId
        }
    }
}