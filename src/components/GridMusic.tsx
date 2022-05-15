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
  // const { loading, lyrics, bio } = useLyrics({
  //   artist: 'Kevin Kaarl',
  //   song: 'San Lucas',
  // })

  // if (loading) return <div>Loading...</div>

  return (
    <main className={styles.wrapper}>
      {/* {JSON.stringify(lyrics, null, 3)}
      {JSON.stringify(bio, null, 3)} */}
    </main>
  )
}
