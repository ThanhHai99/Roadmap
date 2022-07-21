import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TecherComponent } from './techer.component'

describe('TecherComponent', () => {
  let component: TecherComponent
  let fixture: ComponentFixture<TecherComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecherComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TecherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
