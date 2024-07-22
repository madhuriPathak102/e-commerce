import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HomeTestService } from './home-test.service';
import { USER } from './user';

describe('HomeTestService', () => {
  let service: HomeTestService;
  let testingContolller: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeTestService);
    testingContolller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all users', () => {
     service.getAllUsers().subscribe((users:any)=>{
         expect(users).toBeTruthy();
         expect(users.length).toBe(7);
         const secondUser = users.find((user: any) => user.id === 2);
         expect(secondUser.name).toBe('ramavati pathak')
     });
     const mockReq = testingContolller.expectOne('api/users');
     expect(mockReq.request.method).toEqual('GET')
     mockReq.flush(Object.values(USER));
  });
  it('should get user by id', () => {
    service.getUserById(1).subscribe((users:any)=>{
        expect(users).toBeTruthy();
        expect(users.name).toBe('shiva pathak')
    });
    const mockReq = testingContolller.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(Object.values(USER[1]));
 });
 afterEach(() =>{
  testingContolller.verify();
 })
 it('should update the user by id', () => {
  let changes = { age : 24 }
  service.updateUser(1,changes).subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.name).toBe(1)
  });
  const mockReq = testingContolller.expectOne('api/users/1');
  expect(mockReq.request.method).toEqual('PUT')
  let modifiedUser = USER[1];
  modifiedUser.age = 24;
  expect(mockReq.request.body.age).toEqual(changes.age)
  mockReq.flush(modifiedUser);
});
});
