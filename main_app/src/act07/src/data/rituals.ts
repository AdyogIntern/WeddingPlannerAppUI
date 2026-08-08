export interface RitualDocument {
  id?: string;
  title: string;
  subtitle: string;
  duration: string;
  readTime: string;
  status: 'Read' | 'Unread';
  order: number;
  icon: 'ring' | 'leaf' | 'lamp' | 'flower' | 'sparkles';
}

export const RITUAL_DOCUMENTS: RitualDocument[] = [
  {
    id: 'nichayathartham',
    title: 'Nichayathartham',
    subtitle: 'Official engagement ceremony where both families exchange rings and blessings.',
    duration: '2 hrs',
    readTime: '3 min',
    status: 'Read',
    order: 1,
    icon: 'ring',
  },
  {
    id: 'panda-kaal-muhurtham',
    title: 'Panda Kaal Muhurtham',
    subtitle: 'A sacred ritual seeking blessings for a smooth and successful wedding.',
    duration: '1 hr',
    readTime: '2 min',
    status: 'Unread',
    order: 2,
    icon: 'leaf',
  },
  {
    id: 'sumangali-prarthanai',
    title: 'Sumangali Prarthanai',
    subtitle: 'Prayer honoring married women and ancestors for prosperity and happiness.',
    duration: '45 min',
    readTime: '2 min',
    status: 'Unread',
    order: 3,
    icon: 'lamp',
  },
  {
    id: 'kasi-yatra-oonjal',
    title: 'Kasi Yatra & Oonjal',
    subtitle: "Groom's symbolic journey followed by the traditional swing ceremony.",
    duration: '1 hr 30 min',
    readTime: '3 min',
    status: 'Unread',
    order: 4,
    icon: 'flower',
  },
  {
    id: 'nalangu-reception',
    title: 'Nalangu & Reception',
    subtitle: 'Fun family rituals followed by the wedding reception celebration.',
    duration: '3 hrs',
    readTime: '4 min',
    status: 'Unread',
    order: 5,
    icon: 'sparkles',
  },
];
