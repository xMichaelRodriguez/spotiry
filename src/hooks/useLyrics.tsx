import { useEffect, useRef, useState } from 'react'

const { VITE_API_KEY } = import.meta.env

const baseUrl = 'https://api.genius.com/'

interface IProps {
  song?: string
  artist?: string
}
export const useLyrics = ({ artist }: IProps) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(`https://api.genius.com/search?q=${artist}&access_token=${VITE_API_KEY}`, {
      //   method: 'GET',
      //   mode: 'no-cors',
      //   headers: {
      //     'User-Agent': 'CompuServe Classic/1.22',
      //     Authorization: `Bearer ${VITE_API_KEY} `,
      //     'Access-Control-Allow-Origin': '*',
      //     Accept: 'application/json',
      //     Host: 'api.genius.com',
      //   },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data: data,
        })
      })
      .catch((error) => {
        setState({
          loading: false,
          error,
          data: null,
        })
      })
  }, [])

  const { loading, data, error } = state
  return {
    loading,
    data,
    error,
  }
}
