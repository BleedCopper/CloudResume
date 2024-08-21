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
  blogPosts: BlogPost[]
  education: Education[]
}

export interface Entry {
  title: string
  description: string[]
  tags?: string[]
  link: string
}

export interface TimeEntry extends Entry {
  duration: string
}

export interface Experience extends TimeEntry {
  company: string
}

export interface Education extends TimeEntry {
  school: string
}

export interface PhotoEntry extends Entry {
  photo: string
}

export interface Project extends PhotoEntry {
  figma?: string
  github?: string
}

export interface BlogPost extends PhotoEntry {}
