import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { CaseManagementComponent } from './pages/case-management/case-management.component';
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
    path: 'leave-management',
    loadChildren: () =>
      import('./pages/leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },

  {
    path: 'permissions',
    loadChildren: () =>
      import('./pages/permission/permission.module').then(
        (m) => m.PermissionModule
      ),
  },
  {
    path: 'case-management',
    loadChildren: () =>
      import('./pages/case-management/case-management.module').then(
        (m) => m.CaseManagementModule
      ),
  },
  {
    path: 'event-handling',
    loadChildren: () =>
      import('./pages/event-handling/event-handling.module').then(
        (m) => m.EventHandlingModule
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
