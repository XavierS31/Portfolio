export function RenderEngine({ children }) {
  return (
    <div className="course-crt" aria-label="CRT display frame">
      <div className="course-crt-bezel">
        <div className="course-crt-glass">
          <div className="course-scanlines" aria-hidden="true" />
          {children}
        </div>
      </div>
      <div className="course-crt-label" aria-hidden="true">POKE-GEAR // CRT-1999</div>
    </div>
  )
}
