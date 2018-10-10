import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDestiniesComponent } from './my-destinies.component';

describe('MyDestiniesComponent', () => {
  let component: MyDestiniesComponent;
  let fixture: ComponentFixture<MyDestiniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDestiniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDestiniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
