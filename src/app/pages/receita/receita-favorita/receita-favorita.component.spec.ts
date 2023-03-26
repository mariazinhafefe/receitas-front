import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaFavoritaComponent } from './receita-favorita.component';

describe('ReceitaFavoritaComponent', () => {
  let component: ReceitaFavoritaComponent;
  let fixture: ComponentFixture<ReceitaFavoritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaFavoritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
