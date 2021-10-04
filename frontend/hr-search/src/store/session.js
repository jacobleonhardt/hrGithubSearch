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
    const request = await fetch('https://api.github.com/users/jacobleonhardt')
    const result = await request.json()

    if(request.ok) {
        dispatch(getInitial(result))
        return result
    } else {
        throw request.error
    }
}

// Reducer

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_INITIAL:
            return [{...action.payload}]
        case GET_BY_SEARCH:
            return [{...action.payload}]
        default:
            return state
    }
}
