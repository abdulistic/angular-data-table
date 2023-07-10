import { Component } from '@angular/core';
import { httpRequestService } from 'src/app/Services/httpRequest.service';
import { ProductViewModel } from 'src/app/VMs/dataTableVM';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList: ProductViewModel[] = [];

  constructor(private httpService: httpRequestService){}

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.httpService.get(this.httpService.apiRoutes.product.Products).subscribe({
      next: (response) => {
        this.productList = response as ProductViewModel[];
      },
      error: (e) => console.error(e)
    });
  }

  updateProduct(data: ProductViewModel) {
    debugger

    let productObj = { title: data.title, price: data.price, description: data.description };

    this.httpService.updateData(this.httpService.apiRoutes.product.Products, productObj, data.id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (e) => {
        debugger
        console.log(e);} 
    });
  }

}
