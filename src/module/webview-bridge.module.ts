import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { WebviewBridgeService } from './service/webview-bridge.service';

// Export module's public API
export { WebviewBridgeService } from './service/webview-bridge.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class WebviewBridgeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebviewBridgeModule,
      providers: [WebviewBridgeService]
    };
  }
}
