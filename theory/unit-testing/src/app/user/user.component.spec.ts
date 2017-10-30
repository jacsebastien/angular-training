import { DataService } from '../shared/data.service';
import { UserService } from './user.service';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(() => {
    // link test environment to the component
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should create the app', () => {
    // create the component in test environment
    let fixture = TestBed.createComponent(UserComponent);
    // access the instance of the component in test env
    let app = fixture.debugElement.componentInstance;
    // test if app (component) exists
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    // inject the UserService to uses it into test env
    let userService = fixture.debugElement.injector.get(UserService);
    // update properties
    fixture.detectChanges();
    // user name needs to be the same than the one from userService
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    // change the isLoggedIn property to be logged in
    app.isLoggedIn = true;
    fixture.detectChanges();
    // need to get access to the compiled code (html with compiled data)
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should NOT display the user name if user is NOT logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should not fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    // fake async service call to avoid calling the real data and making server requests
    // listend to getDetails execution (from component)
    let spy = spyOn(dataService, 'getDetails')
    // and return a dummy value to test (here 'Data') in place of executing it
    .and.returnValue(Promise.resolve('Data'));

    fixture.detectChanges();
    // 'Data' is returned asynchronously so, if we don't whait, we get undefined
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();

    // when async call is finished, test the returned value
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  // alternative to async
  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();

    // with fakeAsync use tick to finish immediately all async tasks
    tick();
    //  async is finished so we get the value
    expect(app.data).toBe('Data');
  }));
});
