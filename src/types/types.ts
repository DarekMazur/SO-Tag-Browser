export interface ITag {
  items: {
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
  }[];
}

export interface ITagLink {
  to: string;
}
