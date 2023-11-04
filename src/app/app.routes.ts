import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AuthAdminGuard } from "./core/auth-admin.guard";
import { AuthUserGuard } from "./core/auth-user.guard";

const ROUTES: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthUserGuard]  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthAdminGuard]  }
];

export { ROUTES };
