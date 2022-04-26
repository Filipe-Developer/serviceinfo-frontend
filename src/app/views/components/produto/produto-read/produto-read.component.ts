import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements AfterViewInit {

  produtos: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao'];
  dataSource = new MatTableDataSource<Produto>(this.produtos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : ProdutoService) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.produtos = resposta;
      this.dataSource = new MatTableDataSource<Produto>(this.produtos);
      this.dataSource.paginator = this.paginator;
    })
  }
}

