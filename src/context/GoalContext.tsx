import { createContext } from 'react'

export const GoalContext = createContext<{
	goal: 'goal1' | 'goal2' | null
	setGoal: (goal: 'goal1' | 'goal2') => void
}>({
	goal: null,
	setGoal: () => {},
})
