import { PathEnum } from "../../../routes/pathsEnum";

export interface IMenusProps {
  title: string;
  link: string;
} 

export const Menus: IMenusProps[] = [
  {
    title: 'Desenvolvimento pessoal',
    link: 'www.google.com',
  },
  {
    title: 'Desenvolvimento infantil',
    link: PathEnum.INFANT_DEVELOPMENT,
  },
  {
    title: 'Saúde e Bem-Estar',
    link: PathEnum.HOME,
  },
  {
    title: 'Educação e Habilidades',
    link: PathEnum.HOME,
  },
  {
    title: 'Finanças Pessoais',
    link: PathEnum.HOME,
  },
  {
    title: 'Tecnologia e Programação',
    link: PathEnum.HOME,
  },
  {
    title: 'Marketing e Negócios Online',
    link: PathEnum.HOME,
  },
  {
    title: 'Lifestyle e Hobbies',
    link: PathEnum.HOME,
  },
]