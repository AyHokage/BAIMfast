import Footer from '../Footer/Footer2'
import NavBar from '../NavBar/NavBar'
import NumbersIncrement from '../NumbersIncrement/NumbersIncrement'
import styles from './PositionRelative.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PositionRelative = ({children}: any) => {

  return (
    <div>
      
      <div className={styles.relative}>
        {children}
        <Footer />
      </div>
      <NavBar />
    </div>
  )
}

export default PositionRelative