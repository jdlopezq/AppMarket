import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRegComponent } from './item-reg.component';

describe('ItemRegComponent', () => {
  let component: ItemRegComponent;
  let fixture: ComponentFixture<ItemRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
