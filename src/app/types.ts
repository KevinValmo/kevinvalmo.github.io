export type PostAttributes = {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  tags: string;
  date: string;
};

export type ToolbarLink = { name: string; path: string; icon: string };

export type Themes = 'light' | 'dark';

export type OgMeta = {
  title: string;
  description: string;
  coverImage: string;
  url: string;
};

export type Alignment = 'left' | 'center' | 'right' | 'justify';
