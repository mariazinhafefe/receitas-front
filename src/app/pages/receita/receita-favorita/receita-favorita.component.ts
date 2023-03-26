import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceitaDetalheComponent } from '../receita-detalhe/receita-detalhe.component';

@Component({
  selector: 'app-receita-favorita',
  templateUrl: './receita-favorita.component.html',
  styleUrls: ['./receita-favorita.component.css']
})
export class ReceitaFavoritaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReceitaDetalheComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
