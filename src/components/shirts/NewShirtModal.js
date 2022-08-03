import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ShirtForm from '../shared/ShirtForm'
import { createShirt } from '../../api/shirts'


const NewShirtModal = (props) => {
    const {
        user, sneaker, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [shirt, setShirt] = useState({})

    console.log('sneaker in edit modal', sneaker)

    const handleChange = (e) => {
        setShirt(prevShirt => {
            let value = e.target.value
            const name = e.target.name

            console.log('this is the input type', e.target.type)

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

        createShirt(user, sneaker._id, shirt)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Great shirt!!',
                    message: ' Have a nice day!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'ERROR!',
                    message: 'not able to process, please try again',
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
                    heading="Get matching shirt!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewShirtModal