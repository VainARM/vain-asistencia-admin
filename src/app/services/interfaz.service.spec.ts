/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterfazService } from './interfaz.service';

describe('Service: Interfaz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterfazService]
    });
  });

  it('should ...', inject([InterfazService], (service: InterfazService) => {
    expect(service).toBeTruthy();
  }));
});
