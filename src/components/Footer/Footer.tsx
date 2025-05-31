import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer_text}>
        By continuing, you agree to our Terms of Service | Privacy Policy <br />
        2024 © All Rights Reserved.{' '}
      </p>
    </div>
  )
}

export default Footer
