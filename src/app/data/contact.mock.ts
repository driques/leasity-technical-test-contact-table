import { Contact } from '../models/contact.model';

export const CONTACTS_MOCK: Contact[] = [
  {
    id: 1,
    name: 'Andres Colonia',
    email: 'andras@leasity.cl',
    rut: '17.395.120-5',
    tags: ['Backend', 'Devops', 'Frontend'],
  },
  {
    id: 2,
    name: 'Matias Batarce',
    email: 'matias@batarce.cl',
    rut: '18.545.293-K',
    tags: ['Frontend', 'Backend', 'Design'],
  },
  {
    id: 3,
    name: 'Felipe Apablaza',
    email: 'feapablaza@uc.cl',
    rut: '18.139.018-2',
    tags: ['Frontend', 'Design'],
  },
  {
    id: 4,
    name: 'Monica Kattan',
    email: 'momo@leasity.cl',
    rut: '20.155.952-1',
    tags: ['Design'],
  },
];
