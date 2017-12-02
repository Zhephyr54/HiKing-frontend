import {User} from './user';

export interface Hiking {
  id?: string;
  date: string;
  guide: User;
  startLocalization: string;
  endLocalization: string;
  duration: string;
  distance: number;
  complexity: string;
  description?: string;
  personMinNumber: number;
  personMaxNumber: number;
  persons: User[];
  price: number;
}
