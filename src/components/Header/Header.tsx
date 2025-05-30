import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt='Affemity' className={styles.header__logoImage} />
			<h1 className={styles.header__title}>
				Change your{' '}
				<span className={styles.header__title__loveLifePart}>love life</span>
			</h1>
			<p className={styles.header__description}>
				with easy-to-use practical tips that you can <br /> apply in any
				situation
			</p>
		</header>
	)
}

export default Header
