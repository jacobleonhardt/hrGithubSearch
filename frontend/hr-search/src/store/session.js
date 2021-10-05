
// const TOKEN = process.env.REACT_APP_CLIENT_ID
// const SECRTET = process.env.REACT_APP_CLIENT_SECRET

// Constants

const GET_INITIAL = 'session/GET_INITIAL'
const GET_BY_SEARCH = 'session/GET_BY_SEARCH'

// Action Creator

const getInitial = (data) => ({
    type: GET_INITIAL,
    payload: data
})

const getBySearch = (data) => ({
    type: GET_BY_SEARCH,
    payload: data
})

// Thunks

export const initialContent = () => async(dispatch) => {


}

export const searchContent = (searchTerm) => async(dispatch) => {
    let request;
    let arr = []

    // Part One: Find User's Login Based on SearchTerm
    if(searchTerm.includes('@')){
        request = await fetch(`https://api.github.com/search/users?q=${searchTerm}`)
    } else {
        const term = searchTerm.split()
        const query = term.join('+')
        request = await fetch(`https://api.github.com/search/users?q=${query}`)
    }

    const result = await request.json()
    console.log('############', result)

    // Part Two: Use User's Login to Find User's Profile Info
    result.items.forEach( async(item) => {
        const find = await fetch(`https://api.github.com/users/${item.login}`)
        const profile = await find.json()
        if(arr.length < 10) {
            arr.push(profile)
        }
    });

    console.log('>>>>>>>>>', arr)
    if(request.message) {
        throw new Error(request.message)
    }

    setTimeout(() => {
        dispatch(getBySearch(arr))
    }, 1000);
    return arr

}

// Reducer

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_INITIAL:
            return [...action.payload]
        case GET_BY_SEARCH:
            return [...action.payload]
        default:
            return state
    }
}
