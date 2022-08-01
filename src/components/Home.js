import SneakersIndex from "./sneakers/sneakersIndex"
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
const { msgAlert } = {}
	return (
		<>
			<h2>See The Sneakers</h2>
			<SneakersIndex />
		</>
	)
}

export default Home

