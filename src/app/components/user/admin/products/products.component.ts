import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/products/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponen implements OnInit {
  dataSource: MatTableDataSource<Product>;
  constructor(
    private categorieService: CategoriesService,
    private productServices: ProductsService
  ) {
    const products: Product[] = [
      { name: 'producto 1', cost: 1000, categories: ['product'], image: '' },
      { name: 'producto 2', cost: 2000, categories: ['product'], image: '' },
      { name: 'producto 3', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 4', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 5', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 6', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 7', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 8', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 9', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 10', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 11', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 12', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 13', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 14', cost: 3000, categories: ['product'], image: '' },
      { name: 'producto 15', cost: 3000, categories: ['product'], image: '' },
    ];

    // el problema radica en el constructor despues de pasar los datos no funciona
    // solo paginacion
    // el sort sigue disfuncional
    this.dataSource = new MatTableDataSource(products);
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  columns: string[] = [
    '#',
    'Nombre',
    'Precio',
    'Categorias',
    'Imagen',
    'Acciones',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (res: any) => (
        // (this.products = res),
        (this.dataSource = new MatTableDataSource(res)), console.log(res)
      ),
      error: (err) => console.log(err),
    });
  }
}
