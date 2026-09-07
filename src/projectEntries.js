import knightFinder1 from './projects_images/knightfinder/kf1.jpg'

const projectAssets = import.meta.glob('./assets/Projects/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const gallery = (title, folder) => Object.entries(projectAssets)
  .filter(([path]) => path.includes(`/Projects/${folder}/`))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src], index) => ({
    src,
    alt: `${title} project screenshot ${index + 1}`,
    caption: `${title} // ${path.split('/').pop().replace(/\.[^.]+$/, '')}`,
  }))
export const projects = [
  {
    title: 'POWERTRAIN',
    category: ['EMBEDDED','AI & SYSTEMS'],
    date: '1ST Place at UCF SHPE FALL 2026 Competition | August 2025 - November 2025',
    types: ['EMBEDDED', 'HARDWARE','C++','ESP32', 'PYTHON','PYTORCH','PANDAS','SENSORS', 'SOLDERING'],
    color: 'bg-emerald-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/PowerTrain-AI',
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7401747250278039552/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_86EEBE4Qm2lxlEZ5YDFsyaVqGS-w7azc',
    details: [
      'Led a cross-functional team of 6 engineering students to develop a ESP32 RC autonomous car while implementing feedback, suggestions, and direct criticism from competition coordinators',
      'Developed C and C++ firmware for real-time multi-sensor data acquisition, interfacing with peripherals and sensors via I2C and SPI to ensure data collection in a RTOS environment.',
      'Engineered a custom Python neural network using PyTorch to categorize autonomous driving behaviors, resulting in reduced battery wear, which extended driving times by 2-3x with 90% accuracy.',
      'Troubleshooted hardwareâ€“software integration of our custom schematics, using oscilloscopes and multimeters, resolvingcircuit stability and improving sensor data reading, which were reported to GitHub teamâ€™s repository.',
    ],
  },

  {
    title: 'HERMES',
    category: ['AI & SYSTEMS','FULL STACK'],
    date: '24-Hour Hackathon | March 2026',
    types: ['AI','Python','Flask','Gemini LLM','Google ADK', 'React','JavaScript', 'HTML', 'CSS',],
    color: 'bg-purple-300',
    // Add real project screenshots and destinations here as they become available.
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/hermes',
    liveUrl: null,
    details: [
      'Built an hurricane simulation and testing platform for Tampa Bay, FL using React, JavaScript, HTML, CSS to test AI capabilities in evacuation procedures withing a team of 3 people.',
      'Engineered and AI agent to agent orchestration using Gemini LLM through Python, Flask, and Google ADK with the task of saving as many civilians from simulated custom hurricane scenarios.',
      'Developed more than 100+ AI agents to simulate the civilians for the cities, acting with their own behaviors and receiving instructions from agentic orchestration through RESTful APIs.',
    ],
  },

  {
    title: 'SCUDERIA SHPE',
    category: ['EMBEDDED','AI & SYSTEMS'],
    date: '1ST AI Racer Grand Prix at UCF | January 2026 - April 2026',
    types: ['Lidar','Embedded','Hardware','Raspberry Pi','C++','Linux', 'ROS','Ubuntu', 'Python',],
    color: 'bg-purple-300',
    // Add real project screenshots and destinations here as they become available.
    pictures: [],
    githubUrl: null,
    liveUrl: 'https://www.linkedin.com/posts/johan-soto-baron-214230386_ucf-mechanicalengineering-solidworks-ugcPost-7459790785119498240-PfIX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_86EEBE4Qm2lxlEZ5YDFsyaVqGS-w7azc',
    details: [
      'Led the development of a Lidar autonomous driving racing car within a cross-functional team, in which we implemented weekly criticism and direction for faster driving from project stakeholders.',
      'Engineered C and C++ Firmware for car motors and Python autonomous driving algorithms with real time Lidar data within a Linux, Ubuntu, and ROS environment for a Raspberry Pi on the vehicle.',
      'Debugged hardware and software issues with oscilloscopes and multimeters, ensuring correct hardware and circuit implementation for car motors, motor controllers, custom PCB, Lidar, and Raspberry Pi.',
      'Managed project budget through MS Office Excel and project development with Git, GitHub, and MS Office Word, resulting in the lowest budget with a complete project execution for the race competition',
    ],
  },

  {
    title: 'SEE ME SAFE',
    category: ['EMBEDDED','AI & SYSTEMS','FULL STACK'],
    date: '24-Hour Hackathon | April 2026',
    types: ['HARDWARE', 'EMBEDDED', 'C++', 'ESP32','PYTHON','FLASK','POSTGRESQL', 'REACT','JAVASCRIPT','HTML','CSS'],
    color: 'bg-rose-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/Hackabull1',
    liveUrl: null,
    details: [
      'Developed a hardware-software environment for elder people using React, TypeScript, Python and embedded C++ with the goal of taking care of disabilities, danger scenarios and overall wellness.',
      'Architected an application video data pipeline using Python Flask RESTful APIs, to store recorded footage on a PostgreSQL database after getting processed by Gemini LLM for more video details.',
      'Developed a hardware-software environment for elderly people using two ESP32 with I2C, UART, and SPI sensors with Embedded C and C++ firmware in an RTOS environment, tracking their disability issues and reporting their behavior',
      'Led the development of a group of 4 students during 24 hours, in which we had coding sprints followed by peer reviewand criticism for improvement and debugging using Git and GitHub.',
    ],
  },
  {
    title: 'KNIGHT LIFE',
    category: 'FULL STACK',
    date: 'Knight Hacks Semester Hackathon | Jan 2026 - Apr 2026',
    types: ['FULL-STACK', 'REACT', 'TYPESCRIPT', 'SQL','PYTHON','BEAUTIFULSOUP'],
    color: 'bg-cyan-400',
    pictures: [],
    githubUrl: 'https://github.com/SimonOcampo/knightlife',
    liveUrl: 'https://knightlifeucf.vercel.app/',
    details: [
      'Built an ecosystem platform for all Registered Social Organizations (RSO) at UCF using React, TypeScript, HTML, CSS resulting in positive peer student and RSO feedback.',
      'Engineered a daily scraping pipeline for Instagram and Facebook, using Python BeautfulSoup, Saving the RSOâ€™s event and information data through RESTful APIs on a SQL Database.',
      'Stored event data in a SQL database and exposed it through REST APIs.',
      'Attended Biweekly tracking sessions with project stakeholders to receive direction and feedback in the process of developing our app, resulting in more efficient team merging code processes',
    ],
  },
  {
    title: 'KNIGHT LAB',
    category: 'FULL STACK',
    date: 'March 2026 - April 2026',
    types: ['FULL STACK', 'MOBILE DEV','TYPESCRIPT', 'HTML','CSS','EXPRESS','NoSQL', 'MONGODB'],
    color: 'bg-emerald-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/COP-4331-Large-Project',
    liveUrl: null,
    details: [
      'Develop university research platform and research jobs using TypeScript, HTML, CSS, React for connecting University of Central Florida (UCF) students with Faculty for Research lab opportunities.',
      'Protected platform activities only for UCF Students through Express RESTful APIs saving their profiles and actions on a NoSQL MongoDB for anticipated rapid user growth.',
      'Designed the platform data layer around a NoSQL MongoDB architecture for faculty members postings and jobs and students.',
      'Protected platform activities only for UCF Students through Express RESTful APIs saving their rofiles and actions on a NoSQL MongoDB for anticipated rapid user growth.',
    ],
  },
  {
    title: 'KNIGHT FINDER',
    category: ['AI & SYSTEMS','FULL STACK'],
    date: '3rd Place @ Knight Hacks Semester long Competition| Jan 2025 - Apr 2025',
    types: ['CHROME EXTENSION', 'FULL STACK','AGENTIC AI', 'PYTHON','GEMINI LLM', 'MYSQL','JAVASCRIPT','HTML','CSS','TAILWIND CSS'],
    color: 'bg-amber-400',
    pictures: [],
    githubUrl: 'https://github.com/XavierS31/Knight-Finder',
    liveUrl: null,
    details: [
      'Developed a chrome extension using JavaScript, HTML, CSS to help students at the University of Central Florida to navigate the student portal with less queries.',
      'Engineered an AI agent using Gemini LLM through Python and Flask to guide students, saving their queries on a MySQL database, resulting in faster portal activity resulting in faster navigation from 6 to 3 clicks.',
      'Received monthly team checkpoints with project stakeholders in which they will give us feedback and criticism for better project development and team dynamics.',
    ],
  },
]


projects.find(project => project.title === 'POWERTRAIN').pictures = gallery('POWERTRAIN', 'PowerTrainAI')
projects.find(project => project.title === 'HERMES').pictures = gallery('HERMES', 'Hermes')
projects.find(project => project.title === 'SCUDERIA SHPE').pictures = gallery('SCUDERIA SHPE', 'ScuderiaSHPE')
projects.find(project => project.title === 'SEE ME SAFE').pictures = gallery('SEE ME SAFE', 'SeeMeSafe')
projects.find(project => project.title === 'KNIGHT LIFE').pictures = gallery('KNIGHT LIFE', 'KnightLife')
projects.find(project => project.title === 'KNIGHT FINDER').pictures = [{ src: knightFinder1, alt: 'KNIGHT FINDER project screenshot 1', caption: 'KNIGHT FINDER // SCREEN 01' }]
