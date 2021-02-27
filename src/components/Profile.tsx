import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext((ChallengesContext))
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/academicodan.png" alt="Daniel Ribeiro"/>
    <div>
      <strong>Daniel Ribeiro</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>
        Level { level }
      </p>
    </div>
    </div>
  )
}