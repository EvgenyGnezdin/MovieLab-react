import { useState } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const request = async (url, method = 'GET', body = null, headers = {
        'X-API-KEY': 'b10dc333-0cae-4f08-a1bd-109a38ce85d3', 'Content-Type': 'application/json'}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }
            const data = await response.json();
            setLoading(false)
            return data;
        } catch(e) {
            setLoading(false)
            setError(true)
            throw e
        }
    }
    return { request, loading, error };
}