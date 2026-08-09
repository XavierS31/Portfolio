import { useCallback, useState } from 'react'
import { usePokedexNavigation } from './EventManager'
import { RenderEngine } from './RenderEngine'
import { CourseMap, CourseSprite, PokeballMark } from './UIComponents'

const courses = [
  { number: '201', title: 'DATA STRUCTURES', types: ['LOGIC', 'SYSTEMS'], credits: '3 UNITS', level: 'CORE', category: 'ALGORITHM COURSE', description: 'TRAINS THE MIND TO ORGANIZE DATA, ANALYZE COMPLEXITY, AND CHOOSE THE RIGHT STRUCTURE FOR THE JOB.' },
  { number: '202', title: 'OBJECT-ORIENTED PROGRAMMING', types: ['JAVA', 'DESIGN'], credits: '3 UNITS', level: 'CORE', category: 'PROGRAMMING COURSE', description: 'BUILDS REUSABLE SOFTWARE THROUGH ABSTRACTION, ENCAPSULATION, INHERITANCE, AND CLEAR INTERFACES.' },
  { number: '203', title: 'COMPUTER ARCHITECTURE', types: ['HARDWARE', 'SYSTEMS'], credits: '3 UNITS', level: 'CORE', category: 'SYSTEMS COURSE', description: 'EXAMINES THE PATH FROM INSTRUCTIONS TO HARDWARE, INCLUDING MEMORY, PROCESSORS, AND LOW-LEVEL EXECUTION.' },
  { number: '204', title: 'CONCURRENCY', types: ['SYSTEMS', 'C++'], credits: '3 UNITS', level: 'ADVANCED', category: 'SYSTEMS COURSE', description: 'STUDIES COORDINATION BETWEEN EXECUTING TASKS, WITH CAREFUL ATTENTION TO SHARED STATE, TIMING, AND SAFETY.' },
  { number: '205', title: 'DATABASE SYSTEMS', types: ['SQL', 'DATA'], credits: '3 UNITS', level: 'CORE', category: 'DATA COURSE', description: 'COVERS RELATIONAL DATA MODELING, QUERIES, AND THE RELIABLE STORAGE OF INFORMATION USED BY SOFTWARE.' },
  { number: '206', title: 'WEB SYSTEMS', types: ['REACT', 'WEB'], credits: '3 UNITS', level: 'APPLIED', category: 'APPLICATION COURSE', description: 'CONNECTS USER INTERFACES, SERVER LOGIC, AND DEPLOYMENT INTO PRACTICAL WEB EXPERIENCES.' },
  { number: '207', title: 'MACHINE LEARNING', types: ['PYTHON', 'AI'], credits: '3 UNITS', level: 'APPLIED', category: 'INTELLIGENCE COURSE', description: 'USES DATA, MODELS, AND EVALUATION TO BUILD SOFTWARE THAT CAN RECOGNIZE PATTERNS AND MAKE INFORMED PREDICTIONS.' },
  { number: '208', title: 'EMBEDDED SYSTEMS', types: ['C++', 'HARDWARE'], credits: '3 UNITS', level: 'APPLIED', category: 'HARDWARE COURSE', description: 'BRINGS SOFTWARE TO THE DEVICE LEVEL, WHERE CODE WORKS DIRECTLY WITH SENSORS, TIMING, AND REAL-WORLD SIGNALS.' },
]

export default function CoursePokedex() {
  const [activeIndex, setActiveIndex] = useState(0)
  const course = courses[activeIndex]

  const previousCourse = useCallback(() => setActiveIndex(index => (index - 1 + courses.length) % courses.length), [])
  const nextCourse = useCallback(() => setActiveIndex(index => (index + 1) % courses.length), [])

  usePokedexNavigation({ previousCourse, nextCourse })

  return (
    <section id="courses" className="course-pokedex-section mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="course-pokedex-title">
      <div className="section-title mb-7 flex flex-wrap items-end justify-between gap-3">
        <div><p className="font-pixel text-[10px] text-slate-600">[SECTION 05]</p><h2 id="course-pokedex-title" className="mt-2 font-pixel text-2xl leading-relaxed sm:text-3xl">CS COURSE POKÉDEX</h2></div>
        <span className="hidden h-3 w-24 border-2 border-slate-900 bg-rose-400 sm:block" />
      </div>
      <RenderEngine>
        <div className="course-pokedex-machine">
          <article className="course-data-screen" aria-live="polite">
            <header className="course-screen-header"><PokeballMark /><span>POKÉDEX</span><span className="course-screen-status">CS ARCHIVE</span></header>
            <div className="course-entry-name"><span>No. {course.number}</span><strong>{course.title}</strong></div>
            <div className="course-core-data">
              <CourseSprite courseName={course.title} />
              <div className="course-stats-panel">
                <div className="course-type-row">{course.types.map(type => <span key={type}>{type}</span>)}</div>
                <dl>
                  <div><dt>CR:</dt><dd>{course.credits}</dd></div>
                  <div><dt>LV:</dt><dd>{course.level}</dd></div>
                  <div><dt>TYPE:</dt><dd>{course.category}</dd></div>
                </dl>
              </div>
            </div>
            <p className="course-description">{course.description}</p>
            <footer className="course-screen-footer">PRESS <button type="button" onClick={nextCourse} className="course-a-button" aria-label={`Show next course after ${course.title}`}>A</button> FOR NEXT COURSE / PAGE {activeIndex + 1}</footer>
          </article>
          <aside className="course-side-panel" aria-label="Course navigation panel">
            <div className="course-side-heading"><span>COURSE MAP</span><span>{String(activeIndex + 1).padStart(2, '0')} / {String(courses.length).padStart(2, '0')}</span></div>
            <CourseMap courseIndex={activeIndex} totalCourses={courses.length} />
            <p className="course-map-copy">CS PATH // ACTIVE ENTRY</p>
            <div className="course-controls" aria-label="Course navigation controls">
              <button type="button" className="course-dpad" onClick={previousCourse} aria-label="Previous course">◀</button>
              <button type="button" className="course-dpad" onClick={nextCourse} aria-label="Next course">▶</button>
            </div>
          </aside>
        </div>
      </RenderEngine>
    </section>
  )
}
