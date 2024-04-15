import { ICommunity } from '@/@types/community.types';
import { IComment, IPost } from '@/@types/post.types';

export const posts: IPost[] = [
  {
    _id: 0,
    //  image:
    //    'https://c1.wallpaperflare.com/preview/301/704/26/asia-beauty-nice-picture-girly.jpg',
    text: 'I doubt I feel like posting any image today 😏',
    likes: 8,
    username: 'Thomas',
    profileImage:
      'https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778__340.jpg',
    createdAt: '2024-03-23T03:53:47.235Z',
    user: {
      _id: '',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImage: '',
    },
  },
  {
    _id: 1,
    image:
      'data:image/jpeg;base64,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',
    text: 'I love this platform',
    likes: 8,
    username: 'PeachyDev',
    profileImage: 'https://avatars.githubusercontent.com/u/100746698?v=4',
    createdAt: '2024-03-23T03:53:47.235Z',
    user: {
      _id: '',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImage: '',
    },
  },
  {
    _id: 2,
    image:
      'https://c1.wallpaperflare.com/preview/301/704/26/asia-beauty-nice-picture-girly.jpg',
    text: 'We like it here',
    likes: 8,
    username: 'PeachyDev',
    profileImage:
      'https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778__340.jpg',
    createdAt: '2024-03-23T03:53:47.235Z',
    user: {
      _id: '',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImage: '',
    },
  },
  {
    _id: 3,
    image:
      'https://cdn.pixabay.com/photo/2020/05/13/21/26/nigerian-5169012_960_720.jpg',
    text: 'Welcome to my community',
    likes: 8,
    username: 'PeachyDev',
    profileImage:
      'https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778__340.jpg',
    createdAt: '2024-03-23T03:53:47.235Z',
    user: {
      _id: '',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImage: '',
    },
  },
];

export const comments: IComment[] = [
  {
    id: '1',
    text: 'Tell me more',
    post: '1',
    profileImage:
      'https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778__340.jpg',
    createdAt: '2024-03-23T03:53:47.235Z',
    username: 'Collins',
  },
  {
    id: '2',
    text: 'Cool',
    post: '1',
    profileImage:
      'https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778__340.jpg',
    createdAt: '2024-03-23T03:53:47.235Z',
    username: 'Collins',
  },
];

export const communities: ICommunity[] = [
  {
    id: '1',
    name: 'Fitness Freaks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo30LKa_upR4rjXzng3fOJUmYvzDfQJ1LJA&usqp=CAU',
    members: 819,
    coverImage:
      'https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'This is a community for the fit fams. The fitness freaks.',
  },
  {
    id: '2',
    name: 'Tech',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp--NzAGk1LqJWgZRHQxGgqZ1vjllEndXbJg&usqp=CAU',
    members: 629,
    coverImage:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Engineers build the world. Join us to build stuffs.',
  },
  {
    id: '3',
    name: 'Digital Normads',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSpF-ATKbyHD9niu7UfZj-5C1Job4b5HE5Q&usqp=CAU',
    members: 159,
    coverImage:
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Work, while you explore the world which you live in.',
  },
  {
    id: '4',
    name: 'Musicians',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qlpXRBeI1qE50z_Dxg73tgyMuy-lgKtpDQ&usqp=CAU',
    members: 529,
    coverImage:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww',
    description: 'We make the world feel better.',
  },
  {
    id: '5',
    name: 'Engineers',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrjcdGpXkDvkgjvuMyFHGvGE5-KvKggKWQ&usqp=CAU',
    members: 921,
    coverImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-krzechINe7DhUlDZomU_w9CdcZXhnNPqmg&usqp=CAU',
    description: 'Engineers build the world. Join us to build stuffs.',
  },
  {
    id: '6',
    name: 'Jobs',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrjcdGpXkDvkgjvuMyFHGvGE5-KvKggKWQ&usqp=CAU',
    members: 921,
    coverImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-krzechINe7DhUlDZomU_w9CdcZXhnNPqmg&usqp=CAU',
    description: 'Engineers build the world. Join us to build stuffs.',
  },
  {
    id: '7',
    name: 'News',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYrjcdGpXkDvkgjvuMyFHGvGE5-KvKggKWQ&usqp=CAU',
    members: 221,
    coverImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-krzechINe7DhUlDZomU_w9CdcZXhnNPqmg&usqp=CAU',
    description: 'Engineers build the world. Join us to build stuffs.',
  },
];
