import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditShirtModal from './EditShirtModal'
import { deleteShirt } from '../../api/shirts'

const ShowShirt = (props) => {
    // destructure some props
    const { shirt, sneaker, user, msgAlert, triggerRefresh } = props

    // here's where we'll put a hook to open the edit shirt modal when we get there
    const [editModalShow, setEditModalShow] = useState(false)

    // this will set a color depending on the shirt's condition
    const setBgCondition = (cond) => {
        if (cond === 'Hoodie') {
            return ({ width: '18rem', backgroundColor: '#a557t4' })
        } else if (cond === 'used') {
            return ({ width: '18rem', backgroundColor: '#ffdac1' })
        } else {
            return ({ width: '18rem', backgroundColor: '#ff9aa2' })
        }
    }

    // calls this to destroy a shirt
    const destroyShirt = () => {
        deleteShirt(user, sneaker._id, shirt._id)
            .then(() =>
                msgAlert({
                    heading: 'Shirt Deleted',
                    message: 'Bye bye shirt!',
                    variant: 'success'
                }))
            .then(() => triggerRefresh())
            .catch(() =>
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                }))
    }

    return (
        <>
            <Card className="m-2" style={setBgCondition(shirt.description)}>
                <Card.Header>{shirt.color}</Card.Header>
                <Card.Body>
                    <small>${shirt.price}</small><br />
                    <small>
                        {shirt.graphic ? 'Designer' : 'plain'}
                    </small>
                </Card.Body>
                <Card.Footer>
                    <small>Description: {shirt.description}</small><br />
                    {
                        user && user._id === sneaker.owner
                            ?
                            <>
                                <Button
                                    variant="warning"
                                    onClick={() => setEditModalShow(true)}
                                >
                                    Edit Shirt
                                </Button>
                                <Button
                                    onClick={() => destroyShirt()}
                                    variant="danger"
                                >
                                    Delete Shirt
                                </Button>
                            </>
                            :
                            null
                    }
                </Card.Footer>
            </Card>
            <EditShirtModal
                user={user}
                sneaker={sneaker}
                shirt={shirt}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowShirt