import { useCallback, useState } from 'react'
import { usePokedexNavigation } from './EventManager'
import { RenderEngine } from './RenderEngine'
import { experienceEntries } from './portfolioEntries'
import { ExperienceMap, PokedexSprite, PokeballMark } from './UIComponents'

export default function CoursePokedex() {
  const [activeIndex, setActiveIndex] = useState(0)
  const experience = experienceEntries[activeIndex]

  const previousEntry = useCallback(() => setActiveIndex(index => (index - 1 + experienceEntries.length) % experienceEntries.length), [])
  const nextEntry = useCallback(() => setActiveIndex(index => (index + 1) % experienceEntries.length), [])

  usePokedexNavigation({ previousEntry, nextEntry })

  return (
    <section id="experience-pokedex" className="course-pokedex-section mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="experience-pokedex-title">
      <div className="section-title mb-7 flex flex-wrap items-end justify-between gap-3">
        <div><p className="font-pixel text-[12px] text-slate-600">[SECTION 05]</p><h2 id="experience-pokedex-title" className="mt-2 font-pixel text-3xl leading-relaxed sm:text-4xl">EXPERIENCE POKÉDEX</h2></div>
        <span className="hidden h-3 w-24 border-2 border-slate-900 bg-rose-400 sm:block" />
      </div>
      <RenderEngine>
        <div className="course-pokedex-machine">
          <article className="course-data-screen" aria-live="polite">
            <header className="course-screen-header"><PokeballMark /><span>POKÉDEX</span><span className="course-screen-status">EXPERIENCE ARCHIVE</span></header>
            <div className="course-entry-name"><span>No. {experience.number}</span><strong>{experience.title}</strong></div>
            <div className="course-core-data">
              <PokedexSprite entryName={experience.title} />
              <div className="course-stats-panel">
                <div className="course-type-row">{experience.types.map(type => <span key={type}>{type}</span>)}</div>
                <dl>
                  <div><dt>TERM:</dt><dd>{experience.duration}</dd></div>
                  <div><dt>BASE:</dt><dd>{experience.location}</dd></div>
                  <div><dt>ROLE:</dt><dd>{experience.organization}</dd></div>
                </dl>
              </div>
            </div>
            <p className="course-description">{experience.description}</p>
            <footer className="course-screen-footer">PRESS <button type="button" onClick={nextEntry} className="course-a-button" aria-label={`Show next experience after ${experience.title}`}>A</button> FOR NEXT EXPERIENCE / PAGE {activeIndex + 1}</footer>
          </article>
          <aside className="course-side-panel" aria-label="Experience navigation panel">
            <div className="course-side-heading"><span>CAREER MAP</span><span>{String(activeIndex + 1).padStart(2, '0')} / {String(experienceEntries.length).padStart(2, '0')}</span></div>
            <ExperienceMap entryIndex={activeIndex} totalEntries={experienceEntries.length} />
            <p className="course-map-copy">CAREER PATH // ACTIVE ENTRY</p>
            <div className="course-controls" aria-label="Experience navigation controls">
              <button type="button" className="course-dpad" onClick={previousEntry} aria-label="Previous experience">◀</button>
              <button type="button" className="course-dpad" onClick={nextEntry} aria-label="Next experience">▶</button>
            </div>
          </aside>
        </div>
      </RenderEngine>
    </section>
  )
}
