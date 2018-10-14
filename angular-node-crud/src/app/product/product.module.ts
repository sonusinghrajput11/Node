import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductService } from "./services/product.service";
import { CommonModule } from "@angular/common";
import { ProductFormComponent } from "./form/product.form.component";
import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations: [ProductComponent, ProductFormComponent],
    imports: [CommonModule, FormsModule],
    providers: [ProductService],
    exports: [ProductComponent]
})

export class ProductModule {

}