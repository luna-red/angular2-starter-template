/**
 * Imported modules from node packages
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/**
 * Imported components needed for app.component.html and all other nested modules
 */
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

/**
 * Imported module routes
 */
import { DefaultRoutes } from './app.routes';
import { AuthenticationModule } from './routes/authentication/auth.module';
import { MaterialExampleModule } from './routes/material-example/material-example.module';

@NgModule({
  /**
   * declare components, directives, pipes that belongs to the current module. Everything inside declarations knows each other.
   */
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent
  ],
  /**
   * exported declarations of other modules available from the current module for other directives in the current module
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DefaultRoutes),
    AuthenticationModule,
    MaterialExampleModule
  ],
  /**
   * services and values known to DI. They are added to the root scope and they are injected to other services or
   * directives that have them as dependency.
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
