import event1Image from '../assets/img/5D43B8F3-8715-4FD4-8F48-730A1D2F234F.jpeg';
import event2Image from '../assets/img/2C92DD7B-9E8E-4CCB-9972-7BCEC12072F1.jpeg';
import event3Image from '../assets/img/1DAE0178-D44C-4259-BE19-0E00D853D2AC.jpeg';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: typeof event1Image;
  artists: string[];
  price: string;
  available: boolean;
}

const events: Event[]= [
    {
      id: 1,
      title: 'SEGUNDO ANIVERSARIO',
      date: 'MARZO 15, 2025',
      time: '23:00 - 06:00',
      location: 'PUB KAURI, HUESA (JAÉN)',
      image: event1Image,
      artists: ['HECTOR DIEZ', 'BALLESTER'],
      price: '7€',
      available: true
    },
    {
      id: 2,
      title: 'SUMMER EDITION V2',
      date: 'AGOSTO 3, 2024',
      time: '17:00 - 23:00',
      location: 'PUB GRAFITTI, HUESA (JAÉN)',
      image: event2Image,
      artists: ['DE LA HOZ', 'BALLESTER', 'HACKVARO', 'FRAN VALDIVIAS'],
      price: '7€',
      available: false
    },
    {
      id: 3,
      title: 'GUETTO GROOVE GRANADA',
      date: 'MARZO 15, 2024',
      time: '23:00 - 07:00',
      location: 'The Grand, Los Angeles',
      image: event3Image,
      artists: ['BALLESTER', 'COLODRO', 'DEGALLO', 'VITOR'],
      price: '10€',
      available: false
    },
  ];

  export default events;