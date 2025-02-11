import styles from './Container.module.scss'
import { FC } from 'react'
import { Header } from './features'

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Container
