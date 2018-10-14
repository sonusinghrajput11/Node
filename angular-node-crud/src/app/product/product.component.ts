import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Product } from "./models/product";
import { ProductService } from "./services/product.service";

declare var $: any;

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    products: Product[] = [];
    selectedProduct: Product = new Product("", "", "");

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this._productService.getAllProducts().subscribe(
            products => {
                this.products = products;
            },
            error => {
                
            }
        );
    }

    getProductById(id: string) {
        this._productService.getProductById(id).subscribe(
            products => {
                
            },
            error => {
                
            }
        );
    }

    selectProduct(product:Product){
        this.selectedProduct = product;
    }

    createProduct(){
        this.selectedProduct = new Product("", "", "");
    }
}