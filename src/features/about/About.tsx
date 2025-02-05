import { Header } from '../../layouts/features'
import HeroSection from '../../components'
import styles from './About.module.scss'

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <Header>
          <HeroSection>
            <h1>Main purpose: help people discover artists, bands, and talents in their local music scene.</h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Description:</span> The user will log in and by default appear
              on the charts page, which will display the top trending artists / bands in their selected area. Users
              will be able to set their area or explore the map and see the local artists that are trending in that
              area. Users will have their own profile, and will be able to upload music tracks for everyone's
              listening pleasure. You can think of it like soundcloud, but the songs and artists that appear are
              based on the local area. <br />
              <br /> Users will be able to gain numbers in the charts by collecting streams through their music
              profile. The app will have some of the following features:
              <br />
              <br />
              <ul>
                <li>
                  authentication and a user profile Charts page that shows the highest ranking artist within a
                  selected area A community tab
                </li>
                <li>A timeline of local artist announcements / track releases</li>
              </ul>
              <p style={{ fontWeight: 'bold' }}>Possible features:</p>
              <ul>
                <li>
                  Integration with spotify API - allowing users to automatically rank based on their spotify
                  popularity score.
                </li>
                <li>A world wide feature</li>
              </ul>
            </p>
          </HeroSection>
        </Header>
      </div>
    </>
  )
}

export default About
