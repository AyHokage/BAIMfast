import CardsCarousel from "@/components/CardsCarousel/CardsCarousel"
import PositionRelative from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import Image from "next/image";
import styles from "./Clients.module.css"
import ProjectsCarousel from "@/components/ProjectsCarousel/ProjectsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareFacebook as fb} from '@fortawesome/free-brands-svg-icons'
import {faInstagram as insta} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin as linkedin} from '@fortawesome/free-brands-svg-icons'
import {faYoutube as youtube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp as wa} from '@fortawesome/free-brands-svg-icons'
import Employees from "@/components/Employees/Employees";
import ProjectDesc from "@/components/ProjectDesc/ProjectDesc";
import ProjectFeedback from "@/components/ProjectFeedback/ProjectFeedback";
import Footer from "@/components/Footer/Footer2";

const Clients = () => {
  const images = [
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
    {
      title: 'Project Title',
      miniDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam dolorum esse nisi optio eius ea magni. Placeat minus, excepturi pariatur veniam dolorem natus velit provident eligendi laborum quisquam quam.'
    },
  ];

  return ( 
    <PositionRelative>
      <div> 
        <div className={styles.desc}> 
          <Image className={styles.logo} src="/qarabag.png" alt="qarabag" width={300} height={200} />
          <div className={styles.text}>
            <h1 className={styles.heading}>Company name</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut velit nostrum fugiat itaque, laudantium corporis quae voluptatem fuga molestias quasi optio dolorum esse neque suscipit est repudiandae. Illo, nam minus.</p>
          </div>
          <div className={styles.contacts}>
              <h3 className={styles.heading}>Контакты:</h3>
              <a><FontAwesomeIcon className="fa-brands fa-square-facebook" icon={fb} /> Facebook</a><br />
              <a><FontAwesomeIcon className="fa-brands fa-instagram" icon={insta} /> Instagram</a><br />
              <a><FontAwesomeIcon className="fa-brands fa-linkedin" icon={linkedin} /> Linkedin</a><br />
              <a><FontAwesomeIcon className="fa-brands fa-youtube" icon={youtube} /> Youtube</a><br />
              <a><FontAwesomeIcon className="fa-brands fa-whatsapp" icon={wa} /> Whatsapp</a>
            </div>
        </div>

        <ProjectsCarousel imagesArr={images} />

        <ProjectDesc />

        <Employees />

      </div>
    </PositionRelative>
  )
} 

export default Clients 