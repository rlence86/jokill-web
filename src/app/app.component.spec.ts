import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({
  template: '<div id="dummy-element">Dummy element</div>'
})
class DummyComponent {
}

@Component({
  selector: 'app-header',
  template: '<div id="header-element">Header element</div>'
})
class DummyHeaderComponent {
}

@Component({
  selector: 'app-footer',
  template: '<div id="footer-element">Footer element</div>'
})
class DummyFooterComponent {
}

describe('AppComponent', () => {
  let router: Router;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent }
        ])
      ],
      declarations: [
        AppComponent,
        DummyComponent,
        DummyHeaderComponent,
        DummyFooterComponent
      ],
    }).compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have a header and a footer'`, () => {
    const childHeadElement = fixture.debugElement.query(By.css('#header-element'));
    expect(childHeadElement.nativeElement.textContent).toBe('Header element');
    const childFooterlement = fixture.debugElement.query(By.css('#footer-element'));
    expect(childFooterlement.nativeElement.textContent).toBe('Footer element');
  });

  it(`should have routing working`, fakeAsync(() => {
    router.navigateByUrl('');
    tick();
    const childRouter = fixture.debugElement.query(By.css('#dummy-element'));
    expect(childRouter.nativeElement.textContent).toBe('Dummy element');
  }));

  it(`Renders correctly`, fakeAsync(() => {
    router.navigateByUrl('');
    tick();
    expect(fixture).toMatchSnapshot();
  }));

});
