import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { BoxComponent } from './services/box/box.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './one-post/one-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BoxComponent,
    AboutUsSectionComponent,
    IntroSectionComponent,
    PortfolioComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    WhyUsSectionComponent,
    TestimonialsComponent,
    OnePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
