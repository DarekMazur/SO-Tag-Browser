export interface ITagItem {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export interface ITag {
  items: ITagItem[];
}

export interface ITagLink {
  to: string;
}

export interface ITableHeader {
  label: string;
  name: string;
  isSortable: boolean;
}

export interface ITableHeeadersProps {
  headers: ITableHeader[];
}

export type TOrder = 'asc' | 'desc';
