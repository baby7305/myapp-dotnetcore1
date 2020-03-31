import { ISchool } from 'app/shared/model/school.model';

export interface ICourse {
  id?: number;
  name?: string;
  age?: number;
  schools?: ISchool[];
}

export class Course implements ICourse {
  constructor(public id?: number, public name?: string, public age?: number, public schools?: ISchool[]) {}
}
