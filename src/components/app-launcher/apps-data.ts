export interface AppItem {
  id: string;
  name: string;
  description: string;
  route: string;
  icon: string;
  category: string;
}

export const appsRegistry: AppItem[] = [
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords with customizable options',
    route: '/apps/password-generator',
    icon: 'KeyRound',
    category: 'Security',
  },
  // {
  //   id: 'resume',
  //   name: 'Resume',
  //   description: 'View and download Hengborann Moul\'s CV',
  //   route: '/resume',
  //   icon: 'FileText',
  //   category: 'Profile',
  // },
];
