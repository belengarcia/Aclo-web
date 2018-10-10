import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDestiniesListComponent } from './my-destinies-list.component';

describe('MyDestiniesListComponent', () => {
  let component: MyDestiniesListComponent;
  let fixture: ComponentFixture<MyDestiniesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDestiniesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDestiniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
