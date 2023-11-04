import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AuthGuard } from "./core/auth.guard";

const ROUTES: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]  }
];

export { ROUTES };
