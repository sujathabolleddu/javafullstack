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
import { OopsComponent } from './oops/oops.component';
import { ExceptionhandlingComponent } from './exceptionhandling/exceptionhandling.component';
import { ServletsComponent } from './servlets/servlets.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { RegexComponent } from './regex/regex.component';
import { GenericsComponent } from './generics/generics.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { JvmComponent } from './jvm/jvm.component';
import { SerializationComponent } from './serialization/serialization.component';
import { JavaxmlComponent } from './javaxml/javaxml.component';
import { SpringcoreComponent } from './springcore/springcore.component';
import { SpringdataComponent } from './springdata/springdata.component';
import { SpringmvcComponent } from './springmvc/springmvc.component';
import { SpringaopComponent } from './springaop/springaop.component';
import { SpringintegrationComponent } from './springintegration/springintegration.component';
import { SpringtestingComponent } from './springtesting/springtesting.component';
import { SpringjpaComponent } from './springjpa/springjpa.component';
import { SpringcloudComponent } from './springcloud/springcloud.component';
import { SpringsecurityComponent } from './springsecurity/springsecurity.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { SqlComponent } from './sql/sql.component';
import { UnittestingComponent } from './unittesting/unittesting.component';
import { MavenComponent } from './maven/maven.component';
import { DockersComponent } from './dockers/dockers.component';
import { Java8Component } from './java8/java8.component';

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
    CollectionsComponent,
    OopsComponent,
    ExceptionhandlingComponent,
    ServletsComponent,
    ReflectionComponent,
    RegexComponent,
    GenericsComponent,
    AlgorithmsComponent,
    JdbcComponent,
    JvmComponent,
    SerializationComponent,
    JavaxmlComponent,
    SpringcoreComponent,
    SpringdataComponent,
    SpringmvcComponent,
    SpringaopComponent,
    SpringintegrationComponent,
    SpringtestingComponent,
    SpringjpaComponent,
    SpringcloudComponent,
    SpringsecurityComponent,
    HibernateComponent,
    SqlComponent,
    UnittestingComponent,
    MavenComponent,
    DockersComponent,
    Java8Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'java', 
      component: JavaComponent,
      children: [
        {path:'designpatterns', component: DesignpatternsComponent},
        {path:'multithreading', component: MultithreadingComponent},
        {path: 'javaio', component:JavaioComponent},
        {path: 'oops', component:OopsComponent},
        {path:'collections', component: CollectionsComponent},
        {path:'exceptionhandling', component: ExceptionhandlingComponent},
        {path:'servlets', component: ServletsComponent},
        {path:'reflection', component: ReflectionComponent},
        {path:'regex', component: RegexComponent},
        {path:'generics', component: GenericsComponent},
        {path:'serialization', component: SerializationComponent},
        {path:'java8', component: Java8Component},
      ]
      
    },
    {path: 'jvm', component: JvmComponent},
    {path: 'javaxml', component: JavaxmlComponent},
      {path: 'microservices', component: MicroservicesComponent},
      {path: 'springcore', component: SpringcoreComponent},
      {path: 'springdata', component: SpringdataComponent},
      {path: 'springmvc', component: SpringmvcComponent},
      {path: 'springaop', component: SpringaopComponent},
      {path: 'springintegration', component: SpringintegrationComponent},
      {path: 'springtesting', component: SpringtestingComponent},
      {path: 'springjpa', component: SpringjpaComponent},
      {path: 'springsecurity', component: SpringsecurityComponent},
      {path: 'springcloud', component: SpringcloudComponent},
      {path: 'algorithms', component: AlgorithmsComponent},
      {path: 'unittesting', component: UnittestingComponent},
      {path: 'sql', component: SqlComponent},
      {path: 'jdbc', component: JdbcComponent},
      {path: 'hibernate', component: HibernateComponent},
      {path:'javalogging', component: JavaloggingComponent},
      {path:'aws', component: AwsComponent},
      {path:'gitlab', component: GitlabComponent},
      {path:'veracode', component: VeracodeComponent},
      {path:'sonarqube', component: SonarqubeComponent},
      {path:'apitesting', component: ApitestingComponent},
      {path:'designpatterns', component: DesignpatternsComponent},
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
      {path:'maven', component: MavenComponent},
      {path:'dockers', component: DockersComponent},
      {path:'interview', component: InterviewComponent},
      {path:'html5', component: Html5Component},
      {path:'javascript', component: JavascriptComponent},
      {path:'css', component: CssComponent},
      {path:'bootstrap', component: BootstrapComponent},
      
      {path:'', component: WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
