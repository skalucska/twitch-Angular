import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGameInfosComponent } from './basic-game-infos.component';

describe('BasicGameInfosComponent', () => {
  let component: BasicGameInfosComponent;
  let fixture: ComponentFixture<BasicGameInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicGameInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGameInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
