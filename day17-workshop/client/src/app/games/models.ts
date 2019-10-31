export interface Boardgame {
  gid: number;
  name: string;
  year: number;
  ranking: number;
  users_rated: number;
  url: string;
  image: string;
  comment: string;
}

export interface Comment {
  c_id: string;
  user: string;
  rating: number;
  c_text: string;
  gid: number;
}
