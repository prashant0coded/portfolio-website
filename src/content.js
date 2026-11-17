// Edit your text here. Links with an empty url are hidden automatically.
export const site = {
  name: 'Prashant Rajput',
  role: 'Full-Stack & GenAI Developer',
  email: 'prashantrajput01234@gmail.com',
  tagline: 'I build full-stack and GenAI applications, from the database to the interface, and test them end to end before they ship.',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/prashantrajput01234/' },
    { label: 'GitHub', url: 'https://github.com/prashant0coded' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/PrashantRajput01234/' },
  ],
}

export const about = [
  "I'm a B.Tech student in Computer Science and Engineering (Data Science) at JSS Academy of Technical Education, Noida. I like taking a project from requirements to a containerized deployment: a GenAI app, a machine learning model, a full-stack product.",
  'Alongside my studies I moderate a 300,000+ member Web3 community, which has taught me how to run operations, communicate clearly and keep a team aligned under pressure.',
]

export const projects = [
  {
    title: 'AI Resume Analyzer & Interview Assistant',
    dates: 'Apr 2026 to Jun 2026',
    stack: 'React.js, Node.js, Express.js, MongoDB, Gemini API',
    points: [
      'Matches a resume to a job description with the Gemini API, refining the prompts and scoring logic to improve output quality.',
      'Extracts text from uploaded PDFs with Multer and pdf-parse, and secures access with JWT cookies and proper session invalidation.',
    ],
    repo: '', // TODO: GitHub repo URL
  },
  {
    title: 'Reels-Style Food App',
    dates: 'Feb 2026 to Mar 2026',
    stack: 'MongoDB, Express.js, React.js, Node.js, ImageKit',
    points: [
      'A short-video food platform with a scrollable feed, built on a Node.js/Express backend using the MVC pattern.',
      'REST APIs for the video feed, likes, saves and food partner interactions, with ImageKit handling video upload and delivery.',
    ],
    repo: '',
  },
  {
    title: 'Crop Recommendation System',
    dates: '',
    stack: 'Python, Machine Learning, Flask, Docker',
    points: [
      'Recommends crops from soil nutrients (N, P, K), pH, rainfall, temperature and humidity, after comparing several ML models for accuracy.',
      'Serves predictions through a Flask REST API, containerized with Docker for reproducible deployment.',
    ],
    repo: '',
  },
]

export const experience = [
  {
    role: 'Senior Community Moderator',
    org: 'Teneo Protocol, Web3 Discord community',
    dates: 'Oct 2024 to present',
    points: [
      'Moderate and scale a 300,000+ member community, covering daily operations, sentiment and user support across multiple channels.',
      "Designed a Mod Ops system from scratch on Discord's forum infrastructure, with issue tracking, tiered escalation and consistent status workflows.",
      'Run the collaboration and partnership pipeline with the Head of Marketing, including cross-community AMAs and integration proposals.',
      'Act as the bridge between members and the core team: escalating bugs, tracking them to closure and keeping communication open during pivots.',
    ],
  },
]

export const skills = [
  ['Languages', 'Python, JavaScript, Java, C++, C'],
  ['Web', 'React.js, Node.js, Express.js, REST APIs, JWT'],
  ['AI and ML', 'LLM APIs (Gemini), Generative AI, Prompt Engineering, Machine Learning'],
  ['Data and tools', 'SQL, MySQL, MongoDB, Flask, Docker, Git, GitHub'],
]

export const education = [
  { school: 'JSS Academy of Technical Education, Noida', detail: 'B.Tech in Computer Science and Engineering (Data Science). CGPA 7.8/10', dates: 'Oct 2023 to present' },
  { school: 'Holy Public School, Agra', detail: 'Intermediate (C.B.S.E.), 83.5%', dates: '2022' },
  { school: 'Holy Public School, Agra', detail: 'Matriculation (C.B.S.E.), 86.5%', dates: '2020' },
]
export const coursework = 'Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Cybersecurity'
export const highlights = [
  'Delivered several end-to-end projects, from requirements to containerized deployment.',
  'Took part in university hackathons, prototyping and shipping working solutions in teams under tight deadlines.',
  'Keep learning through Machine Learning, Python and Data Science courses on Coursera and Udemy.',
]
