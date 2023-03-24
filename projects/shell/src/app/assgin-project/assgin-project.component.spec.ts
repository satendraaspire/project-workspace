import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginProjectComponent } from './assgin-project.component';
import{ Store,select } from '@ngrx/store'
import * as UserActions from '../user.actions'
import * as fromUser from '../user.selectors'

describe('AssginProjectComponent', () => {
  let component: AssginProjectComponent;
  let fixture: ComponentFixture<AssginProjectComponent>;


  beforeEach(async () => {
    let Store;
    let assginProject

  });

  it('should create assgin', () => {

    expect(component).toBeTruthy();
  });
});
