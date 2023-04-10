export interface ArticleLayoutProps {
  children?: React.ReactNode;
  meta?: {
    author: string;
    date: string;
    title: string;
    description: string;
  };
  isRssFeed?: boolean;
  previousPathname?: string;
  article: {
    title: string;
    description: string;
    slug: string;
    date: string;
  };
  component?: JSX.Element;
}
export interface PostLayoutProps {
  children?: React.ReactNode;
  meta?: {
    author: string;
    date: string;
    title: string;
    description: string;
  };
  isRssFeed?: boolean;
  previousPathname?: string;
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
  component?: JSX.Element;
}

export interface ArticleComponentProps {
  isRssFeed: boolean;
}

export type Role = {
  company: string;
  title: string;
  logo?: any;
  start: string;
  end: {
    label?: 'Present';
    dateTime?: string;
  };
};
