import { useState } from 'react'

import SneakerForm from '../shared/SneakerForm'

const CreateSneaker = (props) => {
    const [sneaker, setSneaker] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false
    })

    const handleChange = (e) => {
        setSneaker(prevSneaker => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedSneaker = {
                [updatedName]: updatedValue
            }
            return {
                ...prevSneaker,
                ...updatedSneaker
            }
        })
    }

    return <SneakerForm sneaker={ sneaker } handleChange={ handleChange } />
}

export default CreateSneaker