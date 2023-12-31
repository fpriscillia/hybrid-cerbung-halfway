import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./following/following.module').then( m => m.FollowingPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'prefs',
    loadChildren: () => import('./prefs/prefs.module').then( m => m.PrefsPageModule)
  },
  {
    path: 'readcerbung/:index',
    loadChildren: () => import('./readcerbung/readcerbung.module').then( m => m.ReadcerbungPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'respond',
    loadChildren: () => import('./respond/respond.module').then( m => m.RespondPageModule)
  },
  {
    path: 'create2',
    loadChildren: () => import('./create2/create2.module').then( m => m.Create2PageModule)
  },
  {
    path: 'create3',
    loadChildren: () => import('./create3/create3.module').then( m => m.Create3PageModule)
  },
  {
    path: 'followingdetail/:id',
    loadChildren: () => import('./followingdetail/followingdetail.module').then( m => m.FollowingdetailPageModule)
  },
  {
    path: 'readrestricted/:index',
    loadChildren: () => import('./readrestricted/readrestricted.module').then( m => m.ReadrestrictedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
