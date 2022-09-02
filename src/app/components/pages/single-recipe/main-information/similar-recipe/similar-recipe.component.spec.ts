import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRecipeComponent } from './similar-recipe.component';

describe('SimilarRecipeComponent', () => {
  let component: SimilarRecipeComponent;
  let fixture: ComponentFixture<SimilarRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
