import greninja from './assets/greninja.png'

export function PokeballMark() {
  return <span className="course-pokeball" aria-hidden="true"><i /></span>
}

export function PokedexSprite({ entryName }) {
  return <figure className="course-sprite-frame">
    <img className="pixel-art course-greninja" src={greninja} alt={`Pixel-art Greninja mascot for ${entryName}`} />
  </figure>
}

export function ExperienceMap({ entryIndex, totalEntries }) {
  const markerPosition = ((entryIndex * 5) % 12) + 1

  return (
    <div className="course-map" aria-label={`Experience map marker ${entryIndex + 1} of ${totalEntries}`}>
      <span className="course-map-land land-one" /><span className="course-map-land land-two" />
      <span className="course-map-land land-three" /><span className="course-map-land land-four" />
      <span className="course-map-cursor" style={{ gridArea: `${Math.ceil(markerPosition / 4)} / ${((markerPosition - 1) % 4) + 1}` }} />
    </div>
  )
}
