import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchHikingComponent } from './form-search-hiking.component';

describe('FormSearchHikingComponent', () => {
  let component: FormSearchHikingComponent;
  let fixture: ComponentFixture<FormSearchHikingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchHikingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchHikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
