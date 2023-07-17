import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
  ],
  exports: [HeaderComponent, NavComponent, AsideComponent, FooterComponent],
})
export class CoreModule {}
