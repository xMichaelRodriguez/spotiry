export const CardMusic = (hit: any) => {
  return (
    <article>
      <h1>{hit.result.artist_names}</h1>
      <p>{hit.result.title}</p>
    </article>
  )
}
