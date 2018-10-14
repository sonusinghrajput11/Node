import { Component, Input, AfterViewInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";

declare var $: any;

@Component({
    selector: 'product-form',
    templateUrl: './product.form.component.html'
})

export class ProductFormComponent{

    @Input()
    product: Product;
    constructor(private _productServices: ProductService) {
        this.product = new Product("", "", "");

    }

    save() {
        console.log(`Save--------> ${this.product}`);
        this._productServices.createProduct(this.product).subscribe(
            product => {
                this.showAlertModal();
                this.hideFormModal();
            },
            error => {
                alert("Error!!!");
            });
    }

    update() {
        console.log(`Update-------> ${this.product}`);
        this._productServices.updateProduct(this.product._id, this.product).subscribe(
            product => {
                this.showAlertModal();
                this.hideFormModal();
            },
            error => {
                alert("Error!!!");
            });
    }

    delete() {
        console.log(`Delete-------> ${this.product._id}`);
        this._productServices.deleteProduct(this.product._id).subscribe(
            message => {
                this.showAlertModal();
                this.hideFormModal();
            },
            error => {
                alert("Error!!!");
            });
    }

    hideFormModal(){
        $("#myModal").modal('hide');
    }

    hidePromptModal(){
        $("#myModalPrompt").modal('hide');
    }

    
    hideAlertModal(){
        $("#myAlertModal").modal('hide');
    }

    showAlertModal(){
        $("#myAlertModal").modal('show');
    }
}