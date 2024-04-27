import React, { useState } from 'react';
import styles from './test.module.css'

const Test = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleAnimationClick}>Click me</button>
      <div className={isAnimating ? styles.animatedObject : ""}></div>
    </div>
  );
}

export default Test;