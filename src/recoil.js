import { atom, selector } from 'recoil'
import { API_KEY } from './config'

export const sortDropdownState = atom({
    key: 'sortDropdownState',
    default: false
})

export const headlineDropdownState = atom({
    key: 'headlineDropdownState',
    default: false
})
export const searchTypeState = atom({
    key: 'searchTypeState',
    default: 'everything'
})

export const sortByState = atom({
    key: 'sortByState',
    default: 'publishedAt'
})

export const categoryState = atom({
    key: 'categoryState',
    default: ''
})

export const qStringState = atom({
    key: 'qStringState',
    default: 'bitcoin'
})

export const allNewsQuery = selector({
    key: 'allnewsQuery',
    get: async ({ get }) => {
        const endpoint = 'https://newsapi.org/v2/'
        const q = get(qStringState)
        const sortBy = get(sortByState)
        const category = get(categoryState)
        const searchType = get(searchTypeState)
        let url;

        switch (searchType) {
            case 'everything':
                url = `${endpoint}everything?q=${q}&apiKey=${API_KEY}&sortBy=${sortBy}`
                break;
            case 'top-headlines':
                url = `${endpoint}top-headlines?q=${q}&apiKey=${API_KEY}&sortBy=${sortBy}&category=${category}`
                break;
            default:
                url = `${endpoint}everything?q=${q}&apiKey=${API_KEY}&sortBy=${sortBy}`
                break;
        }
        const response = await
            fetch(`${url}`)
        return response.json()
    }
})