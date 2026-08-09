import greninja from './assets/greninja.png'

export function PokeballMark() {
  return <span className="course-pokeball" aria-hidden="true"><i /></span>
}

export function CourseSprite({ courseName }) {
  return <figure className="course-sprite-frame">
    <img className="pixel-art course-greninja" src={greninja} alt={`Pixel-art Greninja mascot for ${courseName}`} />
  </figure>
}

export function CourseMap({ courseIndex, totalCourses }) {
  const markerPosition = ((courseIndex * 5) % 12) + 1

  return (
    <div className="course-map" aria-label={`Course map marker ${courseIndex + 1} of ${totalCourses}`}>
      <span className="course-map-land land-one" /><span className="course-map-land land-two" />
      <span className="course-map-land land-three" /><span className="course-map-land land-four" />
      <span className="course-map-cursor" style={{ gridArea: `${Math.ceil(markerPosition / 4)} / ${((markerPosition - 1) % 4) + 1}` }} />
    </div>
  )
}
