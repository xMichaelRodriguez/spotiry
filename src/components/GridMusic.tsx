import { CardMusic } from './CardMusic'
import { useLyrics } from '../hooks/useLyrics'

import styles from '../styles/components/gridMusic.module.css'

interface IResponse {
  [key: string]: [
    {
      index: string
      result: {
        annotation_account: number
        api_path: string
        artist_names: string
        full_title: string
        header_image_thumbnail_url: string
        header_image_url: string
        id: number
        lyrics_owner_id: number
        lyrics_state: string
        path: string
        primary_artist: {
          api_path: string
          header_image_url: string
          id: number
          image_url: string
          name: string
          url: string
        }
        song_art_image_thumbnail_url: string
        song_art_image_url: string
        title: string
        title_with_featured: string
        url: string
      }
    }
  ]
}

export const GridMusic = () => {
  const { data, loading, error } = useLyrics({ artist: 'Kevin Kaarl', song: 'San Lucas' })
  console.log(data)
  if (loading) return <div>Loading...</div>

  if (error) return <code>{JSON.stringify(error, null, 2)}</code>

  return (
    <main className={styles.wrapper}>
      {data && data.response.hits.map((hit: any) => <CardMusic key={hit.result.id} {...hit} />)}
    </main>
  )
}
