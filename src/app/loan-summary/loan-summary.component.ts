import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.scss']
})
export class LoanSummaryComponent implements OnInit {
  product: Product = new Product(-1, 'No Product', 'No Status');
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProduct(1).subscribe((product: Product) => {
      this.product = product;
    });
  }
}
