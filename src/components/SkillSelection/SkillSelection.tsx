import { useState } from 'react'
import styles from './SkillSelection.module.scss'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/Arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import type { Skill } from '../../types/Skill'

const skills: Skill[] = [
	{ id: 1, label: 'Skill1_goal1', emoji: '🙌🏻' },
	{ id: 2, label: 'Skill2_goal1', emoji: '🥹' },
	{ id: 3, label: 'Skill3_goal1', emoji: '⚡' },
	{ id: 4, label: 'Skill4_goal1', emoji: '😌' },
	{ id: 5, label: 'Skill5_goal1', emoji: '👍' },
]

const currentStep = 1
const totalSteps = 34

export const SkillSelectionStep = () => {
	const [selectedIds, setSelectedIds] = useState<number[]>([])
	const navigate = useNavigate()

	const toggleSelection = (id: number) => {
		setSelectedIds(prev =>
			prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
		)
	}

	const handleContinue = () => {
		navigate('/email')
	}

	return (
		<div className={styles.skillsForm}>
			<div className={styles.skillsForm__header}>
				<div className={styles.skillsForm__progressBar}>
					<div className={styles.skillsForm__progressBarFill}></div>
				</div>

				<div className={styles.skillsForm__topBar}>
					<Link to='/'>
						<div className={styles.skillsForm__arrowBorder}>
							<img src={arrow} alt='home' />
						</div>
					</Link>
					<img src={logo} alt='Affemity' className={styles.skillsForm__logo} />
					<span className={styles.skillsForm__stepIndicator}>
						<span className={styles.skillsForm__currentStep}>
							{currentStep}
						</span>
						/{totalSteps}
					</span>
				</div>

				<div className={styles.skillsForm__info}>
					<h1 className={styles.skillsForm__title}>
						What would you like
						<br />
						to learn?
					</h1>
					<p className={styles.skillsForm__description}>
						Select all that apply
					</p>
				</div>
			</div>

			<ul className={styles.skillsForm__list}>
				{skills.map(skill => (
					<li
						key={skill.id}
						className={`${styles.skillsForm__item} ${
							selectedIds.includes(skill.id)
								? styles['skillsForm__item--selected']
								: ''
						}`}
						onClick={() => toggleSelection(skill.id)}
					>
						<span className={styles.skillsForm__label}>
							<span className={styles.skillsForm__emoji}>{skill.emoji}</span>
							{skill.label}
						</span>
						<input
							className={styles.skillsForm__checkbox}
							type='checkbox'
							checked={selectedIds.includes(skill.id)}
							readOnly
						/>
					</li>
				))}
			</ul>

			<button
				className={styles.skillsForm__continueButton}
				disabled={selectedIds.length === 0}
				onClick={handleContinue}
			>
				Continue
			</button>
		</div>
	)
}
