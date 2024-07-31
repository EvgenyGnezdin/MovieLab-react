import { useCallback } from "react"
import { useHttp } from "../hooks/useHttp"
export const useMovie = () => {

    const { request } = useHttp();

    const getTopMovie = useCallback( async (page = 1) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${page}`)
        return response.items
        // eslint-disable-next-line
    },[])

    const getMovieId = useCallback( async (id) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${+id}`)
        return response
        // eslint-disable-next-line
    },[])


    const getImagesId = useCallback(async (id) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${+id}/images?type=POSTER&page=1`)
        return response.items[0].imageUrl
        // eslint-disable-next-line
    },[])

    const getTrailer = useCallback( async (id) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`)
        return response.items[0].url
        // eslint-disable-next-line
    },[])

    const getSearchId = useCallback( async (text) => {
        const response = await request(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}&page=1`)
        return response.films
        // eslint-disable-next-line
    },[])


    return { getTopMovie, getMovieId, getImagesId, getTrailer, getSearchId };
}