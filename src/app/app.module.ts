import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
// import { TutorialsComponent } from './pages/tutorials/tutorials.component'

const routes = [
  {
    path: 'solutions',
    loadChildren: () =>
      import('./pages/solutions/solutions.module').then(
        (m) => m.SolutionsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'get-started',
    loadChildren: () =>
      import('./pages/get-started/get-started.module').then(
        (m) => m.GetStartedModule
      ),
  },
  {
    path: 'how-it-works',
    loadChildren: () =>
      import('./pages/how-it-works/how-it-works.module').then(
        (m) => m.HowItWorksModule
      ),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('./pages/legal/legal.module').then(
        (m) => m.LegalModule
      ),
  },
  {
    path: 'tutorials',
    loadChildren: () =>
      import('./pages/tutorials/tutorials.module').then(
        (m) => m.TutorialsModule
      ),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./pages/inventory/inventory.module').then(
        (m) => m.InventoryModule
      ),
  },
  {
    path: 'labour',
    loadChildren: () =>
      import('./pages/labour-management/labour-management.module').then(
        (m) => m.LabourManagementModule
      ),
  },
  {
    path: 'daily-reports',
    loadChildren: () =>
      import('./pages/daily-reports/daily-reports.module').then(
        (m) => m.DailyReportsModule
      ),
  },
  {
    path: 'payment-handling',
    loadChildren: () =>
      import('./pages/payment-handling/payment-handling.module').then(
        (m) => m.PaymentHandlingModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/task-management/task-management.module').then(
        (m) => m.TaskManagementModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
