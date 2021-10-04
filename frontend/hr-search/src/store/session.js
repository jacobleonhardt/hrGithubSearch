import { Octokit } from "@octokit/core";

const GITTOKEN = process.env.TOKEN

const octokit = new Octokit({
    auth: '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',
    // baseUrl: 'https://api.github.com/',
});

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
    const { data } = await octokit.request("GET /users")
    // const result = await request.json()

    dispatch(getInitial(data))
    return data
    // if(request.ok) {
    //     dispatch(getInitial(request))
    //     return request
    // }
}

export const searchContent = (searchTerm) => async(dispatch) => {
    let request;
    let arr = []

    // Part One: Find User's Login Based on SearchTerm
    console.log('@@@@@@@@', searchTerm)
    if(searchTerm.includes('@')){
        request = await octokit.request("GET /users", {
            email: `${searchTerm}`
        })
    } else {
        const term = searchTerm.split()
        const query = term.join('+')
        request = await fetch(`https://api.github.com/search/users?q=${query}`)
    }

    const result = await request.json()

    // Part Two: Use User's Login to Find User's Profile Info
    result.items.forEach( async(item) => {
        const find = await fetch(`https://api.github.com/users/${item.login}`)
        const profile = await find.json()
        arr.push(profile)
    });

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
