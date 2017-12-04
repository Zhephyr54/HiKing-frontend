import {User} from './user';

export interface Hiking {
  id?: string;
  title?: string;
  photo?: string;
  date: string;
  guide: User;
  startLocalization: string;
  endLocalization: string;
  duration: number;
  distance: number;
  complexity: string;
  description?: string;
  personMinNumber: number;
  personMaxNumber: number;
  persons: User[];
  priceType: string;
  price?: number;
}
