import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFinderComponent } from './item-finder.component';

describe('ItemFinderComponent', () => {
  let component: ItemFinderComponent;
  let fixture: ComponentFixture<ItemFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
