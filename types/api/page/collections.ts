import { ClassNameProps } from "../../string";

export interface Collection {
  createdAt: string;
  creation_time: number;
  image_url?: string;
  title: string;
  updatedAt: string;
  seo_id: string;
  _id: string
}

export interface ListCollection {
  data: Array<Collection>
}

export interface CollectionItem extends ClassNameProps {
  collection: Collection,
}