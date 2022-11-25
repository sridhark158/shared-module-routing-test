import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FooterService } from '../services/footer.service';
import { NotFoundComponent } from './notfound/not-found.component';
import { ExternalUrlDirective } from './external-url.directive';
import { FunPipePipe } from './fun-pipe.pipe';
import { ConfirmDailogComponent } from './confirm-dailog/confirm-dailog.component';
import { ConfirmationServiceService } from './confirm-dailog/confirmation-service.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    ConfirmDailogComponent,
    ExternalUrlDirective,
    FunPipePipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConfirmDailogComponent,
    NotFoundComponent,
    ExternalUrlDirective,
    FunPipePipe,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        FooterService,
        ExternalUrlDirective,
        ConfirmationServiceService,
      ],
    };
  }
}
