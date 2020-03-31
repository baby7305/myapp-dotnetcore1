import { ICourse } from 'app/shared/model/course.model';

export interface ISchool {
  id?: number;
  name?: string;
  age?: number;
  course?: ICourse;
}

export class School implements ISchool {
  constructor(public id?: number, public name?: string, public age?: number, public course?: ICourse) {}
}
