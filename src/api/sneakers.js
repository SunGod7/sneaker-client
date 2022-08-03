import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllSneakers = () => {
    return axios(`${apiUrl}/sneakers`)
}

// READ => SHOW
export const getOneSneaker = (id) => {
    return axios(`${apiUrl}/sneakers/${id}`)
}

// CREATE
export const createSneaker = (user, newSneaker) => {
   
    return axios({
        url: apiUrl + '/sneakers',
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { sneaker: newSneaker }
    })
}

// UPDATE
export const updateSneaker = (user, updatedSneaker) => {
    
    console.log('this is updatedSneaker', updatedSneaker)
    return axios({
        url: `${apiUrl}/sneakers/${updatedSneaker.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { sneaker: updatedSneaker }
    })
}

// DELETE
export const removeSneaker = (user, sneakerId) => {
    return axios({
        url: `${apiUrl}/sneakers/${sneakerId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}