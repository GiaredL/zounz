import { Header } from '../../layouts/features'
import styles from './Home.module.scss'
import HeroSection from '../../components/HeroSection'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Header>
          <HeroSection
            title="Hey, welcome to ZounZ, the place to discover local artists!"
            description="Check back soon! In the meantime, try the about page."
          />
        </Header>
      </div>
    </>
  )
}

export default Home
