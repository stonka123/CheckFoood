import { useParams } from 'react-router-dom'

function Search(props) {
	const { term } = useParams()
	const searchHandler = term => {
		// 	// 	const newMeals = [...dataMeals].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
		// 	// 	setMeals(newMeals)
	}
	return <div>wyniki wyszukiwa dla "{term}"</div>
}

export default Search
