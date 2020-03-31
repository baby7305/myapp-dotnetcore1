import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.MyappTeacherModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.MyappStudentModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.MyappCourseModule)
      },
      {
        path: 'school',
        loadChildren: () => import('./school/school.module').then(m => m.MyappSchoolModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MyappEntityModule {}
