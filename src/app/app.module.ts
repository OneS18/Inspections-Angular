import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInscpectionComponent } from './inspection/show-inscpection/show-inscpection.component';
import { AddEditInscpectionComponent } from './inspection/add-edit-inscpection/add-edit-inscpection.component';
import { InspectionApiService } from './inspection-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInscpectionComponent,
    AddEditInscpectionComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [InspectionApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
