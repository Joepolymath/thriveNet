export interface IPost {
  image?: string;
  text?: string;
  likes?: number;
  _id: number;
  username?: string;
  profileImage?: string;
  likedBys?: string[];
  createdAt: Date | string;
  user: {
    _id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
}

export interface IComment {
  text: string;
  post: string;
  username: string;
  profileImage: string;
  id: string;
  createdAt: string;
}
