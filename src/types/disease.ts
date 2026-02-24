export interface Section {
  type: string;
  content: string | string[];
}

export interface Disease {
  slug: string;
  title: string;
  category: string;
  cover: string;
  images: string[];
  sections: Section[];
  references: string[];
}
