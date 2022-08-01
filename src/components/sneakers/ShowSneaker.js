import { 
    useState,
    useEffect, 
} from 'react'

import { 
    useParams,
    useNavigate 
} from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page
import { 
    Container,
    Card 
} from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSneaker } from '../../api/sneakers'
import messages from '../shared/AutoDismissAlert/messages'

// We need to get the sneaker's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowSneaker = (props) => {
    const [sneaker, setSneaker] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOneSneaker(id)
            .then(res => setSneaker(res.data.sneaker))
            .catch(err => {                   
                msgAlert({
                    heading: 'Error getting sneaker',
                    message: messages.getSneakersFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [])

    if (!sneaker) {
        return <LoadingScreen />
    }

    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{ sneaker.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>Price: { sneaker.price }</small></div>
                        <div><small>Brand: { sneaker.brand }</small></div>
                        <div><small>
                        High Fashion: { sneaker.highFashion ? 'yes' : 'no'}
                        </small></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowSneaker