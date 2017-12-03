import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHikingComponent } from './card-hiking.component';

describe('CardHikingComponent', () => {
  let component: CardHikingComponent;
  let fixture: ComponentFixture<CardHikingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHikingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
