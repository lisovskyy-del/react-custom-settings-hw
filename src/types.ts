export interface ArticleData {
  title: string;
  author: string;
  content: string;
  publicationDate: string | Date;
}

export interface FontConfig {
  fontFamily?: 'sans-serif' | 'serif' | 'monospace' | string;
  color?: string;
  fontSize?: number | string;
}

export interface MediaConfig {
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface LayoutConfig {
  titleAlign?: 'left' | 'center' | 'right';
  imagePosition?: 'left' | 'right';
}

export interface ArticleProps {
  data: ArticleData;
  fontConfig?: FontConfig;
  mediaConfig?: MediaConfig;
  layoutConfig?: LayoutConfig;
}