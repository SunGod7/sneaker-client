import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSneaker, updateSneaker, removeSneaker } from '../../api/sneakers'
import messages from '../shared/AutoDismissAlert/messages'
import EditSneakerModal from './EditSneakerModal'
import NewShirtModal from '../shirts/NewShirtModal'
import ShowShirt from '../shirts/ShowShirt'

// We need to get the sneaker's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

// we'll use a style object to lay out the shirt cards
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowSneaker = (props) => {
    const [sneaker, setSneaker] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [shirtModalShow, setShirtModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props
    console.log('user in props', user)
    console.log('the sneaker in showSneaker', sneaker)
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
    }, [updated])

    // here we'll declare a function that runs which will remove the sneaker
    // this function's promise chain should send a message, and then go somewhere
    const removeTheSneaker = () => {
        removeSneaker(user, sneaker.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeSneakerSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => { navigate('/') })
            // on failure send a failure message
            .catch(err => {
                msgAlert({
                    heading: 'Error removing sneaker',
                    message: messages.removeSneakerFailure,
                    variant: 'danger'
                })
            })
    }
    let shirtCards
    if (sneaker) {
        if (sneaker.shirts.length > 0) {
            shirtCards = sneaker.shirts.map(shirt => (
                <ShowShirt
                    key={shirt._id}
                    shirt={shirt}
                    sneaker={sneaker}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
    }

    if (!sneaker) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{sneaker.fullTitle}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Price: {sneaker.price}</small></div>
                            {/* <div><small>Type: {sneaker.type}</small></div> */}
                            <div><small>
                            High Fashion: {sneaker.highFashion ? 'yes' : 'no'}
                            </small></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setShirtModalShow(true)}
                            className="m-2" variant="info"
                        >
                            Give {sneaker.name} a shirt!
                        </Button>
                        {
                            sneaker.owner && user && sneaker.owner._id === user._id
                                ?
                                <>
                                    <Button onClick={() => setEditModalShow(true)}
                                        className="m-2"
                                        variant="warning"
                                    >
                                        Edit Sneaker
                                    </Button>
                                    <Button onClick={() => removeTheSneaker()}
                                        className="m-2"
                                        variant="danger"
                                    >
                                        Set {sneaker.name} Free
                                    </Button>
                                </>
                                :
                                null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <Container style={cardContainerLayout}>
                {shirtCards}
            </Container>
            <EditSneakerModal
                user={user}
                sneaker={sneaker}
                show={editModalShow}
                updateSneaker={updateSneaker}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
            <NewShirtModal
                sneaker={sneaker}
                show={shirtModalShow}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setShirtModalShow(false)}
            />
        </>
    )
}

export default ShowSneaker