import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createShirt = (user, sneakerId, newShirt) => {
    console.log('the user in createShirt', user)
    console.log('the newv in createShirt', newShirt)
    return axios({
        url: `${apiUrl}/shirts/${sneakerId}`,
        method: 'POST',
        data: { shirt: newShirt }
    })
}

// UPDATE shirt
export const updateShirt = (user, sneakerId, updatedShirt) => {
    console.log('this is updatedSneaker', updatedShirt)
    return axios({
        url: `${apiUrl}/shirts/${sneakerId}/${updatedShirt._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { shirt: updatedShirt }
    })
}

// DELETE shirt
export const deleteShirt = (user, sneakerId, shirtId) => {
    return axios({
        url: `${apiUrl}/shirts/${sneakerId}/${shirtId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}