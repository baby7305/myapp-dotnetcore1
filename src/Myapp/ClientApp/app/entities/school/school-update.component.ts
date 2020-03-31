import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISchool, School } from 'app/shared/model/school.model';
import { SchoolService } from './school.service';
import { ICourse } from 'app/shared/model/course.model';
import { CourseService } from 'app/entities/course/course.service';

@Component({
  selector: 'jhi-school-update',
  templateUrl: './school-update.component.html'
})
export class SchoolUpdateComponent implements OnInit {
  isSaving = false;
  courses: ICourse[] = [];

  editForm = this.fb.group({
    id: [],
    name: [],
    age: [],
    course: []
  });

  constructor(
    protected schoolService: SchoolService,
    protected courseService: CourseService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ school }) => {
      this.updateForm(school);

      this.courseService.query().subscribe((res: HttpResponse<ICourse[]>) => (this.courses = res.body || []));
    });
  }

  updateForm(school: ISchool): void {
    this.editForm.patchValue({
      id: school.id,
      name: school.name,
      age: school.age,
      course: school.course
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const school = this.createFromForm();
    if (school.id !== undefined) {
      this.subscribeToSaveResponse(this.schoolService.update(school));
    } else {
      this.subscribeToSaveResponse(this.schoolService.create(school));
    }
  }

  private createFromForm(): ISchool {
    return {
      ...new School(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      age: this.editForm.get(['age'])!.value,
      course: this.editForm.get(['course'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISchool>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ICourse): any {
    return item.id;
  }
}
