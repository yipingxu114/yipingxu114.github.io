export type ProjectStatus = 'Completed work' | 'Work in progress' | 'Proposed / planned'

export type CaseSection = {
  title: string
  eyebrow?: string
  body: string[]
  bullets?: string[]
  note?: string
}

export type Project = {
  number: string
  slug: string
  kind: 'project' | 'research'
  title: string
  shortTitle: string
  category: string
  intro: string
  status: ProjectStatus
  year: string
  role: string
  tags: string[]
  cover: 'map' | 'code' | 'game' | 'schedule' | 'research'
  accent: string
  meta?: { label: string; value: string }[]
  sections: CaseSection[]
  links?: { label: string; href: string; pending?: boolean }[]
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'low-stimulation-navigation',
    kind: 'project',
    title: 'Low-Stimulation Urban Navigation',
    shortTitle: 'Low-Stimulation Navigation',
    category: 'Human-Centered Design / Geospatial Computing / Accessibility',
    intro:
      'Exploring how urban routes could account for sensory conditions—not only distance or time—to better support individual access needs.',
    status: 'Work in progress',
    year: 'Ongoing',
    role: 'Design, research, and development',
    tags: ['Python', 'OSMnx', 'GeoPandas', 'OpenCV', 'MapLibre', 'Graph algorithms'],
    cover: 'map',
    accent: '#de5b39',
    sections: [
      {
        title: 'A different definition of an “optimal” route',
        eyebrow: 'Context & problem',
        body: [
          'Most navigation tools optimize for speed, distance, or traffic. Those measures leave out environmental qualities that can shape whether a route feels usable: visual density, sunlight, greenery, traffic, and spatial complexity.',
          'This project investigates a sensory-aware model of urban wayfinding. The goal is to make route choices more personal and interpretable without claiming that one environment is universally comfortable.',
        ],
      },
      {
        title: 'Model environment, preference, and tradeoffs',
        eyebrow: 'Design goals',
        body: ['The working framework separates environmental observations from a person’s preferences, then makes route tradeoffs visible rather than hiding them behind a single score.'],
        bullets: [
          'Represent multiple environmental dimensions without collapsing their meaning.',
          'Let people express preferences that may change by context or day.',
          'Explain why a route was suggested and what alternatives offer.',
          'Treat accessibility as individual and situational—not a fixed profile.',
        ],
      },
      {
        title: 'From city data to traversable choices',
        eyebrow: 'Technical approach',
        body: [
          'The proposed pipeline combines street-network data with environmental features, scores graph edges across multiple dimensions, and uses weighted pathfinding to generate route alternatives.',
          'Candidate inputs include building density, greenery, sunlight exposure, traffic, and visual complexity. These are active areas of exploration; the final model and interface have not yet been validated.',
        ],
        note: 'Planned: add a technical diagram, map experiments, and data-source notes here.',
      },
      {
        title: 'What I am examining next',
        eyebrow: 'Reflection',
        body: ['The central design question is not simply how to score a street, but how to communicate uncertainty and personal fit. Next steps include refining the feature model, prototyping route comparison, and defining an evaluation plan.'],
      },
    ],
    links: [{ label: 'Repository link to be added', href: '#', pending: true }],
  },
  {
    number: '02',
    slug: 'coding-agent-evaluation',
    kind: 'project',
    title: 'Repository-Scale Code Search & Coding Agent Evaluation Platform',
    shortTitle: 'Coding Agent Evaluation',
    category: 'AI Engineering / Developer Experience / Human–AI Interaction',
    intro:
      'A platform concept for examining how coding agents retrieve context, act across repositories, and expose their reasoning to developers.',
    status: 'Work in progress',
    year: 'Ongoing',
    role: 'System design and engineering',
    tags: ['Python', 'TypeScript', 'AST', 'Embeddings', 'LLM agents', 'Docker'],
    cover: 'code',
    accent: '#7a5ce4',
    sections: [
      {
        title: 'Coding agents need more than a prompt',
        eyebrow: 'Context & problem',
        body: [
          'Repository-scale tasks depend on finding the right files, understanding relationships, choosing actions, and recovering when execution fails. Evaluating only the final answer hides the workflow that produced it.',
          'This project frames agent evaluation as both a systems problem and a developer-experience problem: what should be measured, and how should a person inspect what happened?',
        ],
      },
      {
        title: 'Make agent behavior inspectable',
        eyebrow: 'Design goals',
        body: ['The planned experience connects retrieval, reasoning, tool use, and execution into one trace that a developer can review.'],
        bullets: [
          'Compare context-retrieval strategies on realistic repository tasks.',
          'Run generated changes in isolated, reproducible environments.',
          'Show which evidence influenced each step of an agent workflow.',
          'Support both aggregate evaluation and close inspection of a single run.',
        ],
      },
      {
        title: 'A modular evaluation pipeline',
        eyebrow: 'Technical approach',
        body: [
          'The proposed architecture combines structural code indexing, semantic retrieval, sandboxed execution, and event-level tracing. Candidate components include Python services, TypeScript interfaces, AST analysis, embeddings, Docker, Redis, and PostgreSQL.',
          'These technologies describe the working direction, not a claim that every service is production-complete.',
        ],
        note: 'Editable placeholder: add architecture, trace screenshots, benchmark design, and verified implementation details.',
      },
      {
        title: 'Evaluation is an interface problem, too',
        eyebrow: 'Reflection',
        body: ['Good metrics help compare systems; good traces help people understand them. The design challenge is deciding what to reveal at each level without overwhelming the developer or creating false certainty.'],
      },
    ],
    links: [{ label: 'Demo link to be added', href: '#', pending: true }],
  },
  {
    number: '03',
    slug: 'interactive-narrative-game',
    kind: 'project',
    title: 'Interactive Narrative Game',
    shortTitle: 'Interactive Narrative Game',
    category: 'Interaction Design / Narrative UX / Creative Technology',
    intro:
      'A 2D Unity experience using movement, symbolism, and environmental storytelling to examine love, protection, control, and autonomy.',
    status: 'Work in progress',
    year: 'Ongoing',
    role: 'Game design, visual design, and development',
    tags: ['Unity', 'C#', 'Game UI', 'Narrative design', 'Prototyping'],
    cover: 'game',
    accent: '#237c73',
    sections: [
      {
        title: 'When care begins to constrain',
        eyebrow: 'Narrative premise',
        body: [
          'The game explores the ambiguity between protection and control through symbolic characters and spaces. Rather than explain the theme directly, the interaction asks the player to feel how boundaries shift over time.',
          'The project is being developed as an interactive narrative, with story, mechanics, and visual direction evolving together.',
        ],
      },
      {
        title: 'Let mechanics carry meaning',
        eyebrow: 'Interaction design',
        body: ['Movement and environmental interaction form the core vocabulary of the experience. Each mechanic is considered for both usability and narrative consequence.'],
        bullets: [
          'Use space and movement to express changing agency.',
          'Build recurring visual motifs through characters and environments.',
          'Keep controls legible while allowing emotional ambiguity.',
          'Iterate on pacing through playtesting and observation.',
        ],
      },
      {
        title: 'Prototype, play, adjust',
        eyebrow: 'Implementation',
        body: [
          'The working implementation uses Unity and C# for player movement, interaction systems, scene logic, and interface behavior. Art direction and environmental storytelling are developed alongside these systems.',
          'Verified screenshots, testing notes, and iteration outcomes can be added here as development progresses.',
        ],
        note: 'Media placeholder: gameplay capture, environment studies, and an interaction-flow diagram.',
      },
      {
        title: 'Designing for interpretation',
        eyebrow: 'Reflection',
        body: ['The work asks how much meaning an interaction can carry without becoming obscure. Future documentation will compare intended readings with observed player interpretations rather than presenting one “correct” experience.'],
      },
    ],
    links: [{ label: 'Playable build to be added', href: '#', pending: true }],
  },
  {
    number: '04',
    slug: 'dsps',
    kind: 'project',
    title: 'DSPS — Personalized Scheduling & Adaptive Planning System',
    shortTitle: 'DSPS',
    category: 'Product Design / Full-Stack Engineering / Adaptive Interfaces',
    intro:
      'An adaptive planning concept focused on prioritization, cognitive load, and helping people understand why their schedule changes.',
    status: 'Work in progress',
    year: 'Ongoing',
    role: 'Product design and development',
    tags: ['React', 'TypeScript', 'Figma', 'REST APIs', 'Scheduling algorithms'],
    cover: 'schedule',
    accent: '#be762e',
    sections: [
      {
        title: 'Plans change. Most planners do not.',
        eyebrow: 'Context & problem',
        body: [
          'Scheduling tools are often good at storing tasks but less helpful when priorities conflict, capacity changes, or a day goes off-plan. The burden of recomputing the schedule stays with the person.',
          'DSPS explores how an adaptive interface might support this work while keeping the user in control of tradeoffs.',
        ],
      },
      {
        title: 'Reduce effort without removing agency',
        eyebrow: 'Design goals',
        body: ['The concept treats explainability and override controls as core product behavior rather than secondary settings.'],
        bullets: [
          'Turn priorities and constraints into a readable daily plan.',
          'Adapt when tasks change without silently rearranging commitments.',
          'Surface the reason behind each scheduling suggestion.',
          'Design responsive workflows for both quick edits and deeper planning.',
        ],
      },
      {
        title: 'Connect planning logic to interface behavior',
        eyebrow: 'Technical approach',
        body: [
          'The proposed system combines a React and TypeScript interface with scheduling logic and service APIs. Figma prototypes define task entry, timeline editing, recommendation, and explanation states before implementation.',
          'Specific algorithms and completed integrations will be documented only after they are verified.',
        ],
        note: 'Editable placeholder: add prototype frames, system flow, component inventory, and implementation notes.',
      },
      {
        title: 'Adaptation must stay understandable',
        eyebrow: 'Reflection',
        body: ['Automation can reduce cognitive load only when people can predict and correct it. The next design phase focuses on how suggestions are explained, dismissed, and revised over time.'],
      },
    ],
    links: [{ label: 'Figma prototype to be added', href: '#', pending: true }],
  },
]

export const research: Project = {
  number: 'R·01',
  slug: 'tmj-chewing-capability',
  kind: 'research',
  title: 'Multimodal Assistive Technology for TMJ-Related Chewing Capability',
  shortTitle: 'TMJ Chewing Capability',
  category: 'HCI Research / Assistive Technology / Accessibility',
  intro:
    'Ongoing human-centered research exploring how fluctuating chewing capability might be represented and supported through adaptive food recommendations.',
  status: 'Work in progress',
  year: 'Ongoing',
  role: 'Student Principal Investigator (PI)',
  tags: ['Human-centered research', 'Figma', 'Assistive technology', 'Accessibility'],
  cover: 'research',
  accent: '#b74e64',
  meta: [
    { label: 'Institution', value: 'University of Pittsburgh' },
    { label: 'Faculty advisor', value: 'Dr. Jessica FitzPatrick' },
    { label: 'Research collaborator', value: 'Wei Deng' },
  ],
  sections: [
    {
      title: 'Capability can change from day to day',
      eyebrow: 'Research context',
      body: [
        'For people with temporomandibular joint (TMJ) conditions, chewing capability may fluctuate. Static food labels and general dietary guidance may not reflect what feels manageable at a particular moment.',
        'This ongoing research explores ways to represent capability across multiple dimensions and translate that representation into more useful, person-centered support.',
      ],
    },
    {
      title: 'Frame the person, not the diagnosis, as the center',
      eyebrow: 'Research focus',
      body: ['The current work develops a conceptual and interaction framework for daily functional assessment and adaptive recommendations.'],
      bullets: [
        'Represent capability as multidimensional and fluctuating.',
        'Make self-assessment concise enough for everyday use.',
        'Connect capability information to understandable food guidance.',
        'Avoid presenting recommendations as medical diagnosis or certainty.',
      ],
    },
    {
      title: 'Prototype the assessment and recommendation loop',
      eyebrow: 'Design process',
      body: [
        'Figma interactive prototypes are being used to examine how people might record current capability, see a multidimensional representation, and understand tailored food suggestions.',
        'Planned interviews, multimodal sensing, hardware integration, and intelligent recommendation systems are future directions—not completed methods or results.',
      ],
      note: 'Ongoing research: no findings or performance claims are presented at this stage.',
    },
    {
      title: 'Next research questions',
      eyebrow: 'Future work',
      body: ['Future work may investigate multimodal sensing and intelligent recommendations, subject to research planning and validation. Immediate next steps are to refine the prototype, define the study protocol, and examine the clarity of the capability model.'],
    },
  ],
  links: [{ label: 'Prototype access to be added', href: '#', pending: true }],
}

export const allProjects = [...projects, research]

export function getProject(slug?: string) {
  return allProjects.find((project) => project.slug === slug)
}
