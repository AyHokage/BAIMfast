import NavMenu from "../NavMenu/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone as phone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass as magnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser as user } from "@fortawesome/free-solid-svg-icons";
import { faBars as bars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
import Phone from "../Phone/Phone";
import WaveAnimation from "../WaveAnimation/WaveAnimation";

const nunito = Nunito({subsets: ["latin"]});

function NavBar() {
  const router = useRouter()
  return (
    <div className={`${styles.banner} ${nunito.className}`}>
      <div className={styles.wave}> 
        {/* <div className={`${styles.center} ${styles.circle}`}></div> */}
        <div className={styles.smooth}></div>
        {/* <button title="+994-55-529-29-66" className={`${styles.btn} ${styles.circle}`}>
          <FontAwesomeIcon
            style={{ fontSize: "1rem" }}
            className="fa-solid fa-phone m"
            icon={phone}
          />
        </button> */}
        
        {/* <WaveAnimation /> */}
        <Phone />

      </div> 

      <div className={styles.pcAndTablet}>
        <div className={styles.row}>
          <div className={styles.column}> 
              <Image
                className={styles.logo}
                width={300}
                height={150} 
                alt="BAIM logo" 
                src="/logo.jpg"
              /> 
            <NavMenu /> 
          </div>
          <div className={styles.row}>
            
            <button onClick={() => router.push('/login')} className={`${styles.cabinet}`}>
              Личный кабинет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
