import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyFDHomeComponent } from './giphy-fd-home.component';

describe('GiphyFDHomeComponent', () => {
  let component: GiphyFDHomeComponent;
  let fixture: ComponentFixture<GiphyFDHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyFDHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyFDHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
