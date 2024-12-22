export interface ItemInterface {
  _uid: string;
  headline: string;
  text?: TextInterface;
  images: ImagesInterface[];
  button?: ButtonInterface[];
  links?: LinkInterface[];
  bgStyle?: string[];
  ContentStyle?: string[];
  imagesStyle?: string[];
  reverse_layout?: boolean;
  secondImageStyle?: string[];
}

export interface ImagesInterface {
  filename: string;
  id: string;
  title?: string;
  description?: string;
  alt?: string;
  aspectRatio?: string;
  width?: string;
  zIndex?: number;
  style?: string[];
}

export interface ButtonInterface {
  _uid: string;
  link: Link;
  size: string;
  label: string;
  style: string;
  component: string;
  text_color: string;
  border_radius: string;
  background_color: string;
}

export interface Link {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

export interface LinkInterface {
  title: string;
  link: string;
  download?: boolean;
}

export interface TextInterface {
  content: Content[];
}

export interface Content {
  type: 'paragraph' | 'ordered_list' | 'bullet_list';
  // attrs: Attrs;
  content: Content2[];
}

// export interface Attrs {
//   class: any;
//   order?: number;
// }

export interface Content2 {
  text?: string;
  type: string;
  content?: Content3[];
}

export interface Content3 {
  type: string;
  content: Content4[];
}

export interface Content4 {
  text: string;
  type: string;
}
