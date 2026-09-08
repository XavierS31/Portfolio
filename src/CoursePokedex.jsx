import { useCallback, useEffect, useState } from 'react'
import { usePokedexNavigation } from './EventManager'
import { RenderEngine } from './RenderEngine'
import { experienceEntries } from './portfolioEntries'
import { ExperienceMap, PokedexSprite, PokeballMark } from './UIComponents'
import decidueye from './pokedex/decidueye-cutout.png'
import gardevoir from './pokedex/gardevoir-cutout.png'
import lugia from './pokedex/lucario.png'
import metagross from './pokedex/metagross-cutout.png'
import rayquaza from './pokedex/rayquaza-cutout.png'
import sceptile from './pokedex/sceptile-cutout.png'
import dimelcoExample from './assets/Experience/dimelco.png'
import freelanceExample1 from './assets/Experience/freelance1.png'
import freelanceExample2 from './assets/Experience/freelance2.png'
import freelanceExample3 from './assets/Experience/freelance3.png'

const experienceSprites = [
  { src: sceptile, name: 'Sceptile' },
  { src: rayquaza, name: 'Rayquaza' },
  { src: gardevoir, name: 'Gardevoir' },
  { src: metagross, name: 'Metagross' },
  { src: lugia, name: 'Lugia' },
  { src: decidueye, name: 'Decidueye' },
]

const experienceExamples = {
  '001': [{ src: dimelcoExample, alt: 'Dimelco website example' }],
  '002': [
    { src: freelanceExample1, alt: 'Freelance software engineering work example 1' },
    { src: freelanceExample2, alt: 'Freelance software engineering work example 2' },
    { src: freelanceExample3, alt: 'Freelance software engineering work example 3' },
  ],
}

const experienceLinks = {
  '001': [{ label: 'Check the website here:', href: 'https://www.dimelcosas.com/' }],
  '002': [{
    label: 'Check some of my freelancer work:',
    hrefs: ['https://www.partyszonanorte.com/', 'https://ivesportfolio.vercel.app/'],
  }],
}

export default function CoursePokedex() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showExamples, setShowExamples] = useState(true)
  const [freelanceExampleIndex, setFreelanceExampleIndex] = useState(0)
  const experience = experienceEntries[activeIndex]
  const sprite = experienceSprites[activeIndex]
  const examples = experienceExamples[experience.number]
  const hasExamples = Boolean(examples)
  const descriptionPoints = experience.description.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map(point => point.trim()).filter(Boolean) ?? []

  useEffect(() => {
    setShowExamples(Boolean(experienceExamples[experience.number]))
    setFreelanceExampleIndex(0)
  }, [experience.number])

  useEffect(() => {
    if (experience.number !== '002' || !showExamples) return undefined
    const rotation = window.setInterval(() => setFreelanceExampleIndex(index => (index + 1) % examples.length), 4000)
    return () => window.clearInterval(rotation)
  }, [experience.number, examples, showExamples])

  const previousEntry = useCallback(() => setActiveIndex(index => (index - 1 + experienceEntries.length) % experienceEntries.length), [])
  const nextEntry = useCallback(() => setActiveIndex(index => (index + 1) % experienceEntries.length), [])

  usePokedexNavigation({ previousEntry, nextEntry })

  const visibleExample = hasExamples ? examples[experience.number === '002' ? freelanceExampleIndex : 0] : null

  return (
    <section id="experience-pokedex" className="course-pokedex-section mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="experience-pokedex-title">
      <div className="section-title mb-7 flex flex-wrap items-end justify-between gap-3">
        <div><p className="font-pixel text-[12px] text-slate-600">[SECTION 02]</p><h2 id="experience-pokedex-title" className="mt-2 font-pixel text-3xl leading-relaxed sm:text-4xl">EXPERIENCE Pokedex</h2></div>
        <span className="hidden h-3 w-24 border-2 border-slate-900 bg-rose-400 sm:block" />
      </div>
      <RenderEngine>
        <div className="course-pokedex-machine">
          <article className="course-data-screen" aria-live="polite">
            <header className="course-screen-header"><PokeballMark /><span>Pokedex</span><span className="course-screen-status">EXPERIENCE ARCHIVE</span></header>
            <div className="course-entry-name"><span>No. {experience.number}</span><strong>{experience.title}</strong></div>
            <div className="course-core-data">
              <PokedexSprite entryName={experience.title} sprite={sprite.src} spriteName={sprite.name} spriteClass={sprite.className} />
              <div className="course-stats-panel">
                <div className="course-type-row">{experience.types.map(type => <span key={type}>{type}</span>)}</div>
                <dl>
                  <div><dt>DURATION:</dt><dd>{experience.duration}</dd></div>
                  <div><dt>LOCATION:</dt><dd>{experience.location}</dd></div>
                  <div><dt>COMPANY:</dt><dd>{experience.organization}</dd></div>
                </dl>
              </div>
            </div>
            <ul className="course-description">
              {descriptionPoints.map((point, index) => <li key={`${experience.number}-${index}`}>{point}</li>)}
              {experienceLinks[experience.number]?.map(link => <li key={link.label}><span className="course-link-entry">{link.label} {link.href ? <a href={link.href} target="_blank" rel="noreferrer">{link.href}</a> : link.hrefs.map((href, index) => <a key={href} href={href} target="_blank" rel="noreferrer">{index > 0 ? ` ${href}` : href}</a>)}</span></li>)}
            </ul>
            <footer className="course-screen-footer">PRESS <button type="button" onClick={nextEntry} className="course-a-button" aria-label={`Show next experience after ${experience.title}`}>A</button> FOR NEXT EXPERIENCE / PAGE {activeIndex + 1}</footer>
          </article>
          <aside className="course-side-panel" aria-label="Experience navigation panel">
            <div className="course-side-heading"><span>{showExamples && hasExamples ? 'WORK EXAMPLES' : 'CAREER MAP'}</span><span>{String(activeIndex + 1).padStart(2, '0')} / {String(experienceEntries.length).padStart(2, '0')}</span></div>
            {showExamples && visibleExample ? <div className="course-work-example"><img src={visibleExample.src} alt={visibleExample.alt} /></div> : <div className="course-map-stage"><ExperienceMap entryIndex={activeIndex} totalEntries={experienceEntries.length} /></div>}
            <p className="course-map-copy">{showExamples && experience.number === '002' ? `EXAMPLE OF FREELANCER WORK // ${freelanceExampleIndex + 1} / ${examples.length}` : showExamples && hasExamples ? 'DIMELCO WORK EXAMPLE' : 'CAREER PATH // ACTIVE ENTRY'}</p>
            {hasExamples && <button type="button" className="course-media-toggle" onClick={() => setShowExamples(current => !current)}>{showExamples ? 'SHOW CAREER MAP' : 'SHOW WORK EXAMPLES'}</button>}
            <nav className="course-experience-list" aria-label="Experience entry selector">
              {experienceEntries.map((entry, index) => (
                <button key={entry.number} type="button" onClick={() => setActiveIndex(index)} aria-current={activeIndex === index ? 'true' : undefined} className={activeIndex === index ? 'is-active' : ''}>
                  <span>{entry.number}</span><strong><span>{entry.title}</span><span>@ {entry.organization}</span></strong>
                </button>
              ))}
            </nav>
            <div className="course-controls" aria-label="Experience navigation controls">
              <button type="button" className="course-dpad" onClick={previousEntry} aria-label="Previous experience">{'\u25C0'}</button>
              <button type="button" className="course-dpad" onClick={nextEntry} aria-label="Next experience">{'\u25B6'}</button>
            </div>
          </aside>
        </div>
      </RenderEngine>
    </section>
  )
}