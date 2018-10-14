import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from "../../config";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    headers: HttpHeaders = null;

    constructor(private _http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    createProduct(product: Product): Observable<Product> {
        return this._http.post<Product>(config.baseUrl + 'create', product, { headers: this.headers })
    }

    getProductById(id: string): Observable<Product> {
        return this._http.get<Product>(config.baseUrl + id, );
    }

    updateProduct(id: string, product: Product): Observable<Product> {
        return this._http.put<Product>(config.baseUrl + id, product, { headers: this.headers });
    }

    deleteProduct(id: string)  {
        const options = {responseType: 'text' as 'text'};
        return this._http.delete(config.baseUrl + id, {responseType : 'text'});
    }

    getAllProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(config.baseUrl);
    }


}