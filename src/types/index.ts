export interface Movie {}
export interface Link {
  id: number;
  name: String;
  link: String;
  subLinks?: Link[];
}
