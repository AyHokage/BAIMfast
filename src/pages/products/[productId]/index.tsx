import Article from "@/components/Article/Article"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout"
import { useEffect, useState } from "react"
import NoInfo from "@/components/NoInfo/NoInfo"
import Error from "@/components/ErrorPage/ErrorPage"

 
const Page = ({id}: any) => {
  const [item, setItem] = useState({})
  const [isLoaded, setIsLoaded] = useState(true);
 
  const fetchProduct = async() => {
    try {
    const response = await fetch(`https://localhost:7164/Product/ById/${id}`);
    const res = await response.json();
    setItem(res)
    console.log(res)
    } catch (err){
      console.error(err)
    }
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

    return {
        props: {
            id: params.productId,
        }
    }
}