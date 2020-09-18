import { Photo } from './photo';

export interface User {
  Id: number;
  Username: string;
  KnownAs: string;
  Age: number;
  Created: Date;
  LastActive: Date;
  PhotoUrl: string;
  City: string;
  Country: string;
  Interests?: string;
  Introduction?: string;
  LookingFor?: string;
  Photos?: Photo[];
}
