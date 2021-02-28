import { atom, selector } from 'recoil'
import { API_KEY } from './config'


export const sortDropdownState = atom({
    key: 'sortDropdownState',
    default: false
})

export const pageState = atom({
    key: 'pageState',
    default: 1
})

export const headlineDropdownState = atom({
    key: 'headlineDropdownState',
    default: false
})

export const sortByState = atom({
    key: 'sortByState',
    default: 'publishedAt'
})

export const qStringState = atom({
    key: 'qStringState',
    default: ''
})

export const pageNumberSelector = selector({
    key: 'pageNumberState',
    get: ({ get }) => (get(pageState)),
    set: ({ set }, newVal) => set(pageState, newVal)
})

export const allNewsQuery = selector({
    key: 'allnewsQuery',
    get: async ({ get }) => {
        const endpoint = 'https://newsapi.org/v2/'
        const q = get(qStringState)
        const sortBy = get(sortByState)
        const page = get(pageState)
        const url = `${endpoint}everything?q=${q}&apiKey=${API_KEY}&sortBy=${sortBy}&page=${page}`;

        const response = await fetch(`${url}`)
        return response.json()
    }
})