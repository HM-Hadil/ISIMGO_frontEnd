import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvitComponent } from './list-invit.component';

describe('ListInvitComponent', () => {
  let component: ListInvitComponent;
  let fixture: ComponentFixture<ListInvitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInvitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
