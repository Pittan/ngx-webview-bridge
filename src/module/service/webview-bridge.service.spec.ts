import { TestBed, inject } from '@angular/core/testing';

import { WebviewBridgeService } from './webview-bridge.service';

describe('WebviewBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebviewBridgeService]
    });
  });

  it('should create service', inject([WebviewBridgeService], (service: WebviewBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
