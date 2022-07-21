import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ExerciseComponent } from './Components/Exercise/exercise.component'
import { StudentComponent } from './Components/Student/student.component'
import { TecherComponent } from './Components/Techer/techer.component'

@NgModule({
  declarations: [AppComponent, StudentComponent, TecherComponent, ExerciseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
