import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdavComponent } from './webdav.component';

describe('WebdavComponent', () => {
  let component: WebdavComponent;
  let fixture: ComponentFixture<WebdavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
