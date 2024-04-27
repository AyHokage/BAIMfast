import CardPartner from "@/components/CardPartner/CardPartner"
import CardsCarousel from "@/components/CardsCarousel/CardsCarousel"
import Banner from "@/components/Banner/Banner"
import NavBar from "@/components/NavBar/NavBar"
import Carousel from "@/components/Carousel/Carousel"
import WaveAnimation from "@/components/WaveAnimation/WaveAnimation"
import Phone from "@/components/Phone/Phone"

const BannerTest = () => {
 
  const banner = [['/pc.png', '/folder.png', '/g.gif', '/guy.png', '/plant.png'], '/BA.png', '/BA2.png', '/BA.png']

  return ( 
    <>
      <NavBar />
      <Carousel imagesArr={banner} />
      {/* <Banner images={banner} /> */}
    </> 
  )
}

export default BannerTest