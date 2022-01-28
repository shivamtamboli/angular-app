import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SearchComponent,ContentComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[SearchComponent,ContentComponent,FooterComponent],
})
export class SharedModule { }
