import { createContext } from 'react'
import { dataMeals } from '../data/dataMeals'

export const addRecipeContext = createContext([...dataMeals])
