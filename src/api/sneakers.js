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
    // console.log('createSneaker in api was hit')
    // in our createsneaker form, we're building an object
    // when we pass that object into the api createSneaker function,
    // it's going to look like the sneakers in our database
    // we're going to refer to this as newPSneaker
    // console.log('this is user', user)
    // console.log('this is newSneaker', newSneaker)
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
    // console.log('createSneaker in api was hit')
    // in our createsneaker form, we're building an object
    // when we pass that object into the api createSneaker function,
    // it's going to look like the sneakers in our database
    // we're going to refer to this as newSneaker
    // console.log('this is user', user)
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