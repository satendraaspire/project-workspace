import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginProjectComponent } from './assgin-project.component';

describe('AssginProjectComponent', () => {
  let component: AssginProjectComponent;
  let fixture: ComponentFixture<AssginProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssginProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssginProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
