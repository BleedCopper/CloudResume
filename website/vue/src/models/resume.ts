export interface Resume {
  name: string
  jobTitle: string
  catchPhrase: string
  social: {
    github?: string
    linkedin?: string
    mail: string
  }
  experience: Experience[]
  projects: Project[]
}

export interface Entry {
  title: string
  description: string[]
  tags: string[]
  link: string
}
export interface Experience extends Entry {
  duration: string
  company: string
}

export interface Project extends Entry {
  photo: string
  figma?: string
  github?: string
}
