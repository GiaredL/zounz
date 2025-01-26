import React, { FC } from 'react'
import styles from './HeroSection.module.scss'
import { morpho } from '../assets'

interface HeroSectionProps {
  title?: string
  subheading?: string
  description?: string
  children?: React.ReactNode
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, subheading, children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hello}>
        <img src={morpho} alt="morpho" />
        <div className={styles.headlines}>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <p>{subheading}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
