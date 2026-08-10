import { useState } from 'react'
import headshot from './assets/headshot.png'
import umbreon from './assets/umbreon-clean-v2.png'
import charizard from './assets/charizard.png'
import greninja from './assets/greninja.png' // clean-v3
import CoursePokedex from './CoursePokedex'
import { courseCatalog } from './portfolioEntries'

const projects = [
  {
    title: 'HERMES',
    category: 'AI & SYSTEMS',
    date: '24-Hour Hackathon | March 2026',
    types: ['AI','Python','Flask','Gemini LLM','Google ADK', 'React','JavaScript', 'HTML', 'CSS',],
    color: 'bg-purple-300',
    // Add real project screenshots and destinations here as they become available.
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/hermes',
    liveUrl: null,
    details: [
      'Engineered a hurricane simulation and evacuation testing platform for Tampa Bay using React and Python.',
      'Built AI agent-to-agent orchestration with Gemini LLM and Google ADK to direct civilian evacuation.',
      'Simulated 100+ autonomous AI civilian agents with custom behavioral logic via RESTful APIs.',
    ],
  },
  {
    title: 'SEE ME SAFE',
    category: 'EMBEDDED',
    date: '24-Hour Hackathon | April 2026',
    types: ['HARDWsiARE/EMBEDDED', 'C++', 'PYTHON', 'POSTGRESQL', 'REACT'],
    color: 'bg-rose-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/Hackabull1',
    liveUrl: null,
    details: [
      'Developed an integrated hardware-software safety environment for elderly individuals using C++ microcontrollers and React.',
      'Architected a real-time video streaming pipeline via Python Flask and PostgreSQL.',
      'Processed live safety context with Gemini LLM for dynamic hazard detection.',
    ],
  },
  {
    title: 'KNIGHT LIFE',
    category: 'FULL STACK',
    date: 'Knight Hacks Semester Hackathon | Jan 2026 - Apr 2026',
    types: ['FULL-STACK', 'REACT', 'TYPESCRIPT', 'SQL', 'BEAUTIFULSOUP'],
    color: 'bg-cyan-400',
    pictures: [],
    githubUrl: null,
    liveUrl: null,
    details: [
      'Built an event aggregation ecosystem serving 700+ Registered Student Organizations at UCF.',
      'Engineered a daily automated web-scraping pipeline using Python BeautifulSoup.',
      'Stored event data in a SQL database and exposed it through REST APIs.',
    ],
  },
  {
    title: 'KNIGHT LAB',
    category: 'FULL STACK',
    date: 'March 2026 - April 2026',
    types: ['WEB PLATFORM', 'TYPESCRIPT', 'EXPRESS', 'MONGODB'],
    color: 'bg-emerald-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/COP-4331-Large-Project',
    liveUrl: null,
    details: [
      'Developed a university research-matching platform connecting UCF undergraduates with faculty lab opportunities.',
      'Secured user access with Express RESTful authentication.',
      'Designed the platform data layer around a MongoDB architecture.',
    ],
  },
  {
    title: 'KNIGHT FINDER',
    category: 'AI & SYSTEMS',
    date: '3rd Place @ Knight Hacks | Jan 2026 - Apr 2026',
    types: ['CHROME EXTENSION', 'RAG AI', 'GEMINI LLM', 'MYSQL'],
    color: 'bg-amber-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/Knight-Finder',
    liveUrl: null,
    details: [
      'Built a browser extension that helps UCF students navigate university portals and resolve direct queries.',
      'Implemented a RAG-based AI assistant powered by Gemini LLM and Flask.',
      'Added MySQL query logging to make support interactions measurable and auditable.',
    ],
  },
]

const moveSets = [
  { type: 'WATER / GRASS', color: 'bg-cyan-400', title: 'Programming & Cloud', moves: ['Python','Java','React', 'TypeScript', 'JavaScript', 'Next.js','Vite.js', 'Node.js', 'Express', 'HTML','CSS', 'AWS', 'Vercel'] },
  { type: 'STEEL / ELECTRIC', color: 'bg-amber-400', title: 'LOW-LEVEL & SYSTEMS', moves: ['C', 'C++', 'Embedded C++', 'Low-Latency Execution', 'Data Structures & Algorithms', 'Computer Architecture', 'Concurrency', 'Multithreading'] },
  { type: 'PSYCHIC', color: 'bg-purple-300', title: 'AI & MACHINE LEARNING', moves: ['PyTorch','Gemini LLM / Google ADK', 'Multi-Agent Orchestration', 'Scikit-Learn', 'Pandas', 'NumPy','MatPlotLib', 'RAG Architectures'] },
  { type: 'GROUND / ROCK', color: 'bg-emerald-400', title: 'DATABASES & DEVOPS', moves: ['SQL', 'NoSQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'SupaBase','RESTful APIs', 'Flask', 'GitHub Actions CI/CD', 'AWS'] },
]

const hardButton = 'border-4 border-slate-900 shadow-[4px_4px_0px_0px_#38405f] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all'
const projectCategories = ['ALL', 'AI & SYSTEMS', 'EMBEDDED', 'FULL STACK']
const pokemonParty = [
  { name: 'UMBREON', asset: umbreon, tint: 'bg-[#c8e7f6]', imageClass: '' },
  { name: 'CHARIZARD', asset: charizard, tint: 'bg-slate-50', imageClass: 'sprite-charizard' },
  { name: 'GRENINJA', asset: greninja, tint: 'bg-[#f3c6d0]', imageClass: '' },
]

function PixelAvatar() {
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden border-4 border-slate-900 bg-cyan-300 p-4 shadow-[6px_6px_0px_0px_#38405f] sm:p-5">
      <div className="absolute inset-0 pixel-grid opacity-40" />
      <div className="relative z-10 self-start font-pixel text-[14px]">TRAINER SPRITE</div>
      <img className="relative z-10 h-64 w-48 border-4 border-slate-900 bg-slate-50 object-cover object-top shadow-[4px_4px_0px_0px_#38405f]" src={headshot} alt="Pixel-art portrait of Xavier Soto Baron" />
      <div className="relative z-10 w-full space-y-2 font-pixel text-[12px] leading-relaxed">
        <div className="border-2 border-slate-900 bg-slate-50 px-2 py-1.5">STATUS: BUILDING LOW lATENCY SYSTEMS + AI</div>
        <div className="flex items-center gap-2 border-2 border-slate-900 bg-slate-900 px-2 py-1.5 text-slate-50"><span>HP</span><span className="h-2 flex-1 border border-slate-50 bg-emerald-400" />100/100</div>
      </div>
    </div>
  )
}

function PokemonParty() {
  return <aside className="border-4 border-slate-900 bg-slate-50 p-3 shadow-[5px_5px_0px_0px_#38405f]" aria-label="Xavier's Pokémon companion party">
    <div className="mb-3 flex items-center justify-between font-pixel text-[9px]"><span>COMPANION PARTY</span><span className="text-slate-600">03 / 03</span></div>
    <div className="grid grid-cols-3 gap-2">{pokemonParty.map(pokemon => <div key={pokemon.name} className={`${pokemon.tint} group overflow-hidden border-2 border-slate-900 p-1`}><img className={`pixel-art h-20 w-full object-contain transition-transform duration-200 group-hover:-translate-y-1 ${pokemon.imageClass}`} src={pokemon.asset} alt={`${pokemon.name} pixel-art companion`} /><p className="border-t-2 border-slate-900 bg-slate-50 py-1 text-center font-pixel text-[7px] text-slate-900">{pokemon.name}</p></div>)}</div>
  </aside>
}

function ContactLink({ label, value, href, tint = 'bg-slate-50' }) {
  return <a className={`${hardButton} ${tint} flex min-w-0 items-center gap-2 px-3 py-3 font-pixel text-[9px] leading-relaxed`} href={href}><span className="shrink-0 text-slate-900">{label}</span><span className="truncate font-body text-sm font-bold">{value}</span></a>
}

function CornerBalls() {
  return <><i className="pixel-ball pixel-ball-master ball-corner ball-corner-top-right" aria-hidden="true" /><i className="pixel-ball pixel-ball-great ball-corner ball-corner-bottom-left" aria-hidden="true" /><i className="pixel-ball pixel-ball-ultra ball-corner ball-corner-bottom-right" aria-hidden="true" /></>
}

function TrainerCard() {
  return <section className="mx-auto max-w-7xl px-4 pb-14 pt-5 sm:px-6 lg:px-8" aria-labelledby="hero-title">
    <div className="relative overflow-hidden border-4 border-slate-900 bg-slate-50 p-4 shadow-[8px_8px_0px_0px_#38405f] sm:p-6">
      <CornerBalls />
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b-4 border-slate-900 pb-4 font-pixel text-[18px]">
        <span className="bg-amber-400 px-5 py-1.5">TRAINER ID // 00031</span><span>POKE-GEAR: ONLINE</span>
      </div>
      <div className="grid gap-7 lg:grid-cols-[minmax(290px,.85fr)_1.5fr]">
        <div className="space-y-5"><PixelAvatar /><PokemonParty /></div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-3 font-pixel text-[10px] text-slate-600">CLASS: COMPUTER SCIENCE TRAINING</p>
            <h1 id="hero-title" className="font-pixel text-3xl leading-[1.35] text-slate-900 sm:text-4xl lg:text-5xl">XAVIER SOTO BARON</h1>
            <p className="mt-5 max-w-3xl border-l-4 border-slate-900 bg-purple-50 px-4 py-3 font-pixel text-sm leading-loose sm:text-base">Software Engineer  |  Embedded Systems  |  Quant Dev  |  AI Engineer</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border-4 border-slate-900 bg-sky-100 p-4"><p className="font-pixel text-[11px] text-slate-600">EDUCATION</p><p className="mt-2 font-body text-base font-bold">B.S.  Computer Science<br />University of Central Florida</p></div>
              <div className="border-4 border-slate-900 bg-emerald-400 p-4"><p className="font-pixel text-[11px]">NEXT MILESTONE</p><p className="mt-2 font-body text-base font-bold">Graduating<br />Spring 2027</p></div>
              <div className="border-4 border-slate-900 bg-purple-300 p-4"><p className="font-pixel text-[11px]">LANGUAGES</p><p className="mt-2 font-body text-base font-bold">Bilingual<br />English &amp; Spanish</p></div>
              <div className="border-4 border-slate-900 bg-amber-400 p-4"><p className="font-pixel text-[11px]">HONORS</p><p className="mt-2 font-body text-base font-bold">Tau Beta Pi<br />Honor Society Member</p></div>
            </div>

          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <ContactLink label="EMAIL" value="xaviersotoba31@gmail.com" href="mailto:xaviersotoba31@gmail.com" tint="bg-amber-400" />
            <ContactLink label="LINKEDIN" value="linkedin.com/in/xavier-soto-baron" href="https://linkedin.com/in/xavier-soto-baron" tint="bg-cyan-400" />
            <ContactLink label="GITHUB" value="github.com/XavierS31" href="https://github.com/XavierS31" tint="bg-emerald-400" />
            <ContactLink label="RESUME" value="View Resume" href="/Xavier-Soto-Baron-Resume.pdf" target="_blank" rel="noreferrer" tint="bg-purple-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
}

function SectionTitle({ children, kicker }) { return <div className="section-title mb-7 flex flex-wrap items-end justify-between gap-3"><div><p className="font-pixel text-[10px] text-slate-600">{kicker}</p><h2 className="mt-2 font-pixel text-2xl leading-relaxed sm:text-3xl">{children}</h2></div><span className="hidden h-3 w-24 border-2 border-slate-900 bg-amber-400 sm:block" /></div> }

function Profile() {
  return <section id="profile" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><SectionTitle kicker="[SECTION 01]">TRAINER SUMMARY</SectionTitle><div className="grid gap-6 lg:grid-cols-2">
    <article className="border-4 border-slate-900 bg-slate-50 p-5 shadow-[6px_6px_0px_0px_#0f172a] sm:p-7"><h3 className="font-pixel text-base leading-loose">WHO IS XAVIER SOTO?</h3><p className="mt-5 font-body text-base leading-7">A multi-disciplinary builder working at the intersection of full-stack development, multi-agent AI orchestration, embedded hardware and firmware, and low-latency algorithmic logic. Xavier turns complex systems into practical tools, whether that means coordinating autonomous agents, shipping polished web products, or optimizing the software that talks directly to hardware.</p><div className="mt-6 grid grid-cols-2 gap-3 font-pixel text-[14px]"><span className="border-2 border-slate-900 bg-cyan-400 p-2">SOFTWARE ENGINEER</span><span className="border-2 border-slate-900 bg-purple-300 p-2">AI ENGINEER</span><span className="border-2 border-slate-900 bg-amber-400 p-2">EMBEDDED</span><span className="border-2 border-slate-900 bg-emerald-400 p-2">QUANT DEV</span></div></article>
    <article className="border-4 border-slate-900 bg-slate-100 p-5 shadow-[6px_6px_0px_0px_#0f172a] sm:p-7"><h3 className="font-pixel text-base leading-loose">KEY METRICS & ACCOMPLISHMENTS</h3><div className="mt-5 border-4 border-slate-900 bg-amber-400 p-4"><p className="font-pixel text-lg">LEVEL UP!</p><p className="mt-2 font-body font-bold">XP gained through mentorship, leadership, and high-speed prototyping.</p></div><ul className="mt-5 space-y-4 font-body text-base leading-6"><li className="border-l-4 border-cyan-400 pl-3"><strong>UCF Teaching Assistant:</strong> Mentoring 200+ students in Data Structures, Algorithms & OOP (C/Java).</li><li className="border-l-4 border-purple-300 pl-3"><strong>Tau Beta Pi:</strong> Graduate Student Admissions Operations.</li><li className="border-l-4 border-rose-400 pl-3"><strong>Hackathon Champion:</strong> Innovation builder for fast-moving, full-stack teams.</li></ul></article>
  </div></section>
}

function LegacyPokedexCard() {
  const [active, setActive] = useState(0)
  const project = projects[active]
  return <section id="projects" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><SectionTitle kicker="[SECTION 02]">POKÉDEX PROJECT SHOWCASE</SectionTitle><div className="border-4 border-slate-900 bg-rose-400 p-3 shadow-[8px_8px_0px_0px_#0f172a] sm:p-5"><div className="grid gap-5 lg:grid-cols-[230px_1fr]">
    <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1" aria-label="Project selector">{projects.map((item, index) => <button key={item.title} onClick={() => setActive(index)} className={`${hardButton} px-3 py-3 text-left font-pixel text-[9px] ${active === index ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}`}><span className="mr-2 text-amber-400">{String(index + 1).padStart(2, '0')}</span>{item.title}</button>)}</nav>
    <article className="min-h-[375px] border-4 border-slate-900 bg-slate-50 p-5 sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4 border-b-4 border-slate-900 pb-5"><div><p className="font-pixel text-[9px] text-slate-600">ENTRY_{String(active + 1).padStart(3, '0')}</p><h3 className="mt-2 font-pixel text-2xl leading-relaxed sm:text-3xl">{project.title}</h3><p className="mt-2 font-body font-bold">{project.date}</p></div><div className="pokedex-orb shrink-0" aria-hidden="true" /></div><div className="mt-5 flex flex-wrap gap-2">{project.types.map(type => <span key={type} className={`border-2 border-slate-900 ${project.color} px-2 py-1 font-pixel text-[8px]`}>{type}</span>)}</div><ul className="mt-7 space-y-4 font-body text-base leading-7">{project.details.map(detail => <li key={detail} className="flex gap-3"><span className="mt-2 h-3 w-3 shrink-0 border-2 border-slate-900 bg-slate-900" />{detail}</li>)}</ul></article>
  </div></div></section>
}

function PokedexCard() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activeTitle, setActiveTitle] = useState(projects[0].title)
  const [isExpanded, setIsExpanded] = useState(false)
  const filteredProjects = activeCategory === 'ALL' ? projects : projects.filter(project => project.category === activeCategory)
  const project = filteredProjects.find(item => item.title === activeTitle) ?? filteredProjects[0]
  const projectNumber = projects.findIndex(item => item.title === project.title) + 1

  function selectCategory(category) {
    const nextProjects = category === 'ALL' ? projects : projects.filter(project => project.category === category)
    setActiveCategory(category)
    setActiveTitle(nextProjects[0].title)
    setIsExpanded(false)
  }

  function selectProject(title) {
    setActiveTitle(title)
    setIsExpanded(false)
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionTitle kicker="[SECTION 04]">PROJECT SHOWCASE</SectionTitle>
      <div className="border-4 border-slate-900 bg-rose-400 p-3 shadow-[8px_8px_0px_0px_#0f172a] sm:p-5">
        <div className="mb-5 border-4 border-slate-900 bg-slate-50 p-3">
          <p className="font-pixel text-[9px] text-slate-600">FILTER BY CATEGORY</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectCategories.map(category => <button key={category} onClick={() => selectCategory(category)} aria-pressed={activeCategory === category} className={`${hardButton} px-3 py-2 font-pixel text-[8px] ${activeCategory === category ? 'bg-slate-900 text-slate-50' : 'bg-sky-100 text-slate-900'}`}>{category}</button>)}
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-[230px_1fr]">
          <nav className="project-selector grid grid-cols-2 gap-2 lg:grid-cols-1" aria-label="Project selector">
            {filteredProjects.map(item => <button key={item.title} onClick={() => selectProject(item.title)} aria-current={project.title === item.title ? 'true' : undefined} className={`${hardButton} min-h-14 px-3 py-3 text-left font-pixel text-[9px] ${project.title === item.title ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}`}><span className="mr-2 text-amber-400">{String(projects.findIndex(project => project.title === item.title) + 1).padStart(2, '0')}</span>{item.title}</button>)}
          </nav>
          <article id="project-details" className={`${isExpanded ? 'min-h-[590px] sm:p-8' : 'min-h-[375px]'} border-4 border-slate-900 bg-slate-50 p-5 transition-[min-height,padding] duration-300 sm:p-7`}>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-4 border-slate-900 pb-5"><div><p className="font-pixel text-[9px] text-slate-600">ENTRY_{String(projectNumber).padStart(3, '0')} | {project.category}</p>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-pixel text-2xl leading-relaxed underline decoration-4 underline-offset-4 transition-colors hover:text-[#505775] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:text-3xl">{project.title}<span aria-hidden="true">↗</span></a> : <h3 className="mt-2 font-pixel text-2xl leading-relaxed sm:text-3xl">{project.title}</h3>}<p className="mt-2 font-body font-bold">{project.date}</p></div><div className="pokedex-orb shrink-0" aria-hidden="true" /></div>
            <div className="mt-5 flex flex-wrap gap-2">{project.types.map(type => <span key={type} className={`border-2 border-slate-900 ${project.color} px-2 py-1 font-pixel text-[11px]`}>{type}</span>)}</div>
            <ul className="mt-7 space-y-4 font-body text-base leading-7">{project.details.map(detail => <li key={detail} className="flex gap-3"><span className="mt-2 h-3 w-3 shrink-0 border-2 border-slate-900 bg-slate-900" />{detail}</li>)}</ul>
            <div className="mt-7 flex flex-wrap gap-3 border-t-4 border-slate-900 pt-5"><button type="button" onClick={() => setIsExpanded(expanded => !expanded)} aria-expanded={isExpanded} aria-controls="project-media" className={`${hardButton} bg-amber-400 px-4 py-3 font-pixel text-[10px] text-slate-900`}>{isExpanded ? 'CLOSE DETAILS' : 'READ MORE'}</button>{project.githubUrl ? <a className={`${hardButton} bg-slate-900 px-4 py-3 font-pixel text-[10px] text-slate-50`} href={project.githubUrl} target="_blank" rel="noreferrer">GITHUB</a> : <span className="border-4 border-slate-900 bg-slate-100 px-4 py-3 font-pixel text-[10px] text-slate-600" title="Add a githubUrl to this project to enable the repository link" aria-disabled="true">GITHUB LINK PENDING</span>}</div>
            {isExpanded && <div id="project-media" className="mt-7 border-t-4 border-slate-900 pt-6"><p className="font-pixel text-[10px] text-slate-600">PROJECT GALLERY</p>{project.pictures.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2">{project.pictures.map((picture, index) => <figure key={`${picture.src}-${index}`} className="overflow-hidden border-4 border-slate-900 bg-slate-100"><img className="aspect-[16/10] w-full object-cover" src={picture.src} alt={picture.alt} /><figcaption className="border-t-2 border-slate-900 bg-slate-50 px-3 py-2 font-body text-sm font-bold">{picture.caption}</figcaption></figure>)}</div> : <p className="mt-4 border-2 border-dashed border-slate-900 bg-sky-100 p-4 font-body text-sm leading-6">Screenshots will appear here when picture objects are added to this project.</p>}</div>}
          </article>
        </div>
      </div>
    </section>
  )
}

function MoveSet() { return <section id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><SectionTitle kicker="[SECTION 04]">MOVE-SET & STATS</SectionTitle><div className="grid gap-5 md:grid-cols-2">{moveSets.map((set, index) => <article key={set.title} className="border-4 border-slate-900 bg-slate-50 shadow-[5px_5px_0px_0px_#0f172a]"><div className={`${set.color} border-b-4 border-slate-900 p-4`}><div className="flex items-center justify-between gap-2"><h3 className="font-pixel text-sm leading-relaxed">{set.title}</h3><span className="border-2 border-slate-900 bg-slate-50 px-2 py-1 font-pixel text-[8px]">{set.type}</span></div></div><div className="p-4"><p className="mb-3 font-pixel text-[9px] text-slate-600">MOVE BANK_{String(index + 1).padStart(2, '0')}</p><div className="flex flex-wrap gap-2">{set.moves.map(move => <span key={move} className="border-2 border-slate-900 bg-slate-100 px-2 py-1.5 font-body text-sm font-bold transition-transform hover:-translate-y-0.5">{move}</span>)}</div></div></article>)}</div></section> }

function QuestLog() { const [active, setActive] = useState(0); const quest = quests[active]; return <section id="quests" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><SectionTitle kicker="[SECTION 04]">Trainer's Experience</SectionTitle><div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]"><div className="space-y-3">{quests.map((item, index) => <button key={item.org} onClick={() => setActive(index)} className={`${hardButton} w-full p-4 text-left ${active === index ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}`}><p className="font-pixel text-[11px]">QUEST_{String(index + 1).padStart(2, '0')}</p><p className="mt-2 font-pixel text-md leading-relaxed">{item.title}</p><p className="mt-1 font-body text-sm font-bold">@ {item.org}</p></button>)}</div><article className="border-4 border-slate-900 bg-slate-50 p-5 shadow-[6px_6px_0px_0px_#0f172a] sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-pixel text-[11px] text-slate-600">ACTIVE QUEST</p><h3 className="mt-2 font-pixel text-xl leading-relaxed">{quest.title}</h3><p className="mt-2 font-body font-bold">{quest.org} · {quest.location}</p></div><span className={`${quest.color} border-4 border-slate-900 px-3 py-2 font-pixel text-[8px]`}>REWARD: {quest.reward}</span></div><div className="mt-6 border-y-4 border-slate-900 py-3 font-pixel text-14px]">DURATION: {quest.duration}</div><ul className="mt-6 space-y-4 font-body text-base leading-7">{quest.details.map(detail => <li key={detail} className="flex gap-3"><span className="mt-2 h-3 w-3 shrink-0 border-2 border-slate-900 bg-amber-400" />{detail}</li>)}</ul></article></div></section> }

function CourseQuestLog() {
  const [active, setActive] = useState(0)
  const course = courseCatalog[active]

  return <section id="courses" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><SectionTitle kicker="[SECTION 05]">CS COURSE QUEST LOG</SectionTitle><div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]"><nav className="course-quest-selector space-y-3" aria-label="Course selector">{courseCatalog.map((item, index) => <button key={item.number} onClick={() => setActive(index)} aria-current={active === index ? 'true' : undefined} className={`${hardButton} lg:h-[5.75rem] w-full overflow-hidden p-4 text-left ${active === index ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}`}><p className="font-pixel text-[11px]">COURSE_{item.number}</p><p className="mt-2 truncate font-pixel text-sm leading-relaxed">{item.title}</p><p className="mt-1 truncate font-body text-sm font-bold">@ {item.category}</p></button>)}</nav><article className="border-4 border-slate-900 bg-slate-50 p-5 shadow-[6px_6px_0px_0px_#0f172a] sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-pixel text-[11px] text-slate-600">ACTIVE COURSE</p><h3 className="mt-2 font-pixel text-xl leading-relaxed">{course.title}</h3><p className="mt-2 font-body font-bold">{course.category} · {course.level}</p></div><span className={`${course.color} border-4 border-slate-900 px-3 py-2 font-pixel text-[8px]`}>TRACK: {course.types.join(' / ')}</span></div><div className="mt-6 border-y-4 border-slate-900 py-3 font-pixel text-[11px]">CREDITS: {course.credits}</div><p className="mt-6 border-l-4 border-slate-900 pl-4 font-body text-base leading-7">{course.description}</p></article></div></section>
}

function Footer() {
  return <footer id="contact" className="mt-14 border-t-4 border-slate-900 bg-slate-900 px-4 py-14 text-slate-50 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="border-4 border-slate-50 bg-slate-800 p-5 shadow-[6px_6px_0px_0px_#f8fafc] sm:p-8"><p className="max-w-4xl font-pixel text-base leading-loose sm:text-xl">LET'S BUILD SOMETHING USEFUL.</p><div className="mt-7 flex flex-wrap gap-4"><a className={`${hardButton} bg-amber-400 px-4 py-3 font-pixel text-[10px] text-slate-900`} href="mailto:xaviersotoba31@gmail.com">SEND MESSAGE</a><a className={`${hardButton} bg-cyan-400 px-4 py-3 font-pixel text-[10px] text-slate-900`} href="/Xavier-Soto-Baron-Resume.pdf" target="_blank" rel="noreferrer">VIEW RESUME</a><a className={`${hardButton} bg-purple-300 px-4 py-3 font-pixel text-[10px] text-slate-900`} href="https://linkedin.com/in/xavier-soto-baron" target="_blank" rel="noreferrer">LINKEDIN</a><a className={`${hardButton} bg-emerald-400 px-4 py-3 font-pixel text-[10px] text-slate-900`} href="https://github.com/XavierS31" target="_blank" rel="noreferrer">GITHUB</a></div></div><p className="mt-10 text-center font-pixel text-[8px] leading-loose text-slate-300">@XavierS31 | ALL RIGHTS RESERVED</p></div></footer>
}

function PixelSkyline() {
  return (
    <div className="pixel-skyline" aria-hidden="true">
      <div className="pixel-moon" />
      <div className="pixel-stars" />
      <div className="pixel-street"><i className="pixel-car pixel-car-red" /><i className="pixel-car pixel-car-yellow" /><i className="pixel-car pixel-car-blue" /></div>
      <div className="skyline-shore">
        <i className="skyline-building b1" /><i className="skyline-building b12" /><i className="skyline-building b2" /><i className="skyline-building b13" /><i className="skyline-building b3" />
        <i className="skyline-building b4 chrysler-building" /><i className="skyline-building b14" /><i className="skyline-building b5 one-world-trade" /><i className="skyline-building b6" />
        <i className="skyline-building b7 empire-state" /><i className="skyline-building b15" /><i className="skyline-building b8" /><i className="skyline-building b9" /><i className="skyline-building b16" />
        <i className="skyline-building b10" /><i className="skyline-building b11" />
      </div>
    </div>
  )
}

function App() {
  return <main className="city-main min-h-screen overflow-x-hidden text-slate-900"><PixelSkyline /><div className="site-content relative z-10"><header className="border-b-4 border-slate-900 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 font-pixel text-[14px] sm:px-6 lg:px-8"><span className="border-2 border-slate-900 bg-purple-300 px-2 py-1.5">Xavier's Portfolio</span><span>LVL 2027 <i className="mx-2 not-italic text-amber-500">|</i> ORLANDO, FL</span></div></header><TrainerCard /><Profile /><CoursePokedex /><PokedexCard /><MoveSet /><CourseQuestLog /><Footer /></div></main>
}

export default App
