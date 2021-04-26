import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component
import { SinhVienComponent } from "./Components/SinhVien/sinhvien.component";
import { NhanVienComponent } from "./Components/NhanVien/nhanvien.component";
import { BaiTapComponent } from "./Components/BaiTap/baitap.component";

@NgModule({
  declarations: [
    AppComponent,
    SinhVienComponent,
    NhanVienComponent,
    BaiTapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
