import { Octokit } from "@octokit/core";

const GITTOKEN = process.env.TOKEN
const GITUSER = process.env.USERNAME

const octokit = new Octokit({ auth: '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' });

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
    console.log('$$$$$', GITTOKEN)


    if(searchTerm.includes('@')){
        request = await octokit.request("GET /users", {
            email: `${searchTerm}`
        })
    } else {
        request = await octokit.request("GET /users", {
            name: `${searchTerm}`
        })
        console.log('&&&&&', request)
    }

    const result = await request.json()
    console.log('@@@@@', result)
    dispatch(getBySearch(result))
    return result

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
