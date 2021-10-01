import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JavaloggingComponent } from './javalogging/javalogging.component';
import { AwsComponent } from './aws/aws.component';
import { GitlabComponent } from './gitlab/gitlab.component';
import { VeracodeComponent } from './veracode/veracode.component';
import { SonarqubeComponent } from './sonarqube/sonarqube.component';
import { ApitestingComponent } from './apitesting/apitesting.component';
import { SolidComponent } from './solid/solid.component';
import { CodereviewComponent } from './codereview/codereview.component';
import { DesignpatternsComponent } from './designpatterns/designpatterns.component';
import { RestComponent } from './rest/rest.component';
import { JsonComponent } from './json/json.component';
import { TestingComponent } from './testing/testing.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { KafkaComponent } from './kafka/kafka.component';
import { SecurityComponent } from './security/security.component';
import { MultithreadingComponent } from './multithreading/multithreading.component';
import { AngularComponent } from './angular/angular.component';
import { Html5Component } from './html5/html5.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavaioComponent } from './javaio/javaio.component';
import { InterviewComponent } from './interview/interview.component';
import { CollectionsComponent } from './collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    MicroservicesComponent,
    WelcomeComponent,
    JavaloggingComponent,
    AwsComponent,
    GitlabComponent,
    VeracodeComponent,
    SonarqubeComponent,
    ApitestingComponent,
    SolidComponent,
    CodereviewComponent,
    DesignpatternsComponent,
    RestComponent,
    JsonComponent,
    SpringbootComponent,
    KafkaComponent,
    SecurityComponent,
    MultithreadingComponent,
    AngularComponent,
    Html5Component,
    JavascriptComponent,
    CssComponent,
    BootstrapComponent,
    JavaioComponent,
    InterviewComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'java', 
      component: JavaComponent,
      children: [
        {path:'designpatterns', component: DesignpatternsComponent},
        {path:'multithreading', component: MultithreadingComponent},
        {path: 'javaio', component:JavaioComponent}
      ]
    },
      {path: 'microservices', component: MicroservicesComponent},
      {path:'javalogging', component: JavaloggingComponent},
      {path:'aws', component: AwsComponent},
      {path:'gitlab', component: GitlabComponent},
      {path:'veracode', component: VeracodeComponent},
      {path:'sonarqube', component: SonarqubeComponent},
      {path:'apitesting', component: ApitestingComponent},
      {path:'solid', component: SolidComponent},
      {path:'codereview', component: CodereviewComponent},
      {path:'multithreading', component: MultithreadingComponent},
      {path:'rest', component: RestComponent},
      {path:'json', component: JsonComponent},
      {path:'testing', component: TestingComponent},
      {path:'springboot', component: SpringbootComponent},
      {path:'kafka', component: KafkaComponent},
      {path:'security', component: SecurityComponent},
      
      {path:'angular', component: AngularComponent},
      {path:'html5', component: Html5Component},
      {path:'javascript', component: JavascriptComponent},
      {path:'css', component: CssComponent},
      {path:'bootstrap', component: BootstrapComponent},
      {path:'collections', component: CollectionsComponent},
      {path:'', component: WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
