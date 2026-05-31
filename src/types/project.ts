export type ProjectType = '個人制作' | 'チーム制作';

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  genre: string;
  type: ProjectType;
  period: string;
  description: string;
  role: string;
  tech: string[];
  thumbnail: string;
  github: ProjectLink;
  movie: ProjectLink;
  demo?: ProjectLink;
};
