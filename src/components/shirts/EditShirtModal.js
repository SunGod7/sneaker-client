import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ShirtForm from '../shared/ShirtForm'
import { updateShirt } from '../../api/shirts'


const EditShirtModal = (props) => {
    const {
        user, sneaker, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [shirt, setShirt] = useState(props.shirt)

    const handleChange = (e) => {
        setShirt(prevShirt => {
            let value = e.target.value
            const name = e.target.name

            // console.log('this is the input type', e.target.type)
            // this handles the checkbox, changing on to true etc
            if (name === "graphic" && e.target.checked) {
                value = true
            } else if (name === "graphic" && !e.target.checked) {
                value = false
            }

            const updatedShirt = {
                [name]: value
            }
            return {
                ...prevShirt,
                ...updatedShirt
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateShirt(user, sneaker._id, shirt)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Great! The shirt is better than ever!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ShirtForm
                    shirt={shirt}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update this shirt!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditShirtModal