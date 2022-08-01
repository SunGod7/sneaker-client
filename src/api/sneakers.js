import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSneakers = () => {
    return axios(`${apiUrl}/sneakers`)
}

export const getOneSneaker = (id) => {
    return axios(`${apiUrl}/sneakers/${id}`)
}