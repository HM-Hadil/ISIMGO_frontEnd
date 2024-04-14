import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAmisComponent } from './liste-amis.component';

describe('ListeAmisComponent', () => {
  let component: ListeAmisComponent;
  let fixture: ComponentFixture<ListeAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAmisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
