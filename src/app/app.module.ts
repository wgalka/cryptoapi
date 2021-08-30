import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloworldComponent} from './components/helloworld/helloworld.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoinstableComponent} from './components/coinstable/coinstable.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {Exchangecrypto} from './components/exchangecrypto/exchangecrypto';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FooterComponent} from './components/footer/footer.component';
import {FindandreplaceComponent} from './components/findandreplace/findandreplace.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BoardComponent} from "./components/board/board.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {GoogleChartsModule} from "angular-google-charts";

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CoinstableComponent,
    Exchangecrypto,
    FooterComponent,
    FindandreplaceComponent,
    BoardComponent,
    BoardComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatStepperModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        DragDropModule,
        MatSidenavModule,
        MatListModule,
        RouterModule.forRoot([
            {path: 'helloworld', component: HelloworldComponent},
            {path: 'exchange', component: Exchangecrypto},
            {path: 'findandreplace', component: FindandreplaceComponent},
            {path: 'board', component: BoardComponent},
        ]),
        GoogleChartsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
