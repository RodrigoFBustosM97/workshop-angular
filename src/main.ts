import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Gasto } from './gasto';
import { NgFor, NgIf } from '@angular/common';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: 'main2.html',
})
export class App {
  nombreGasto = 'chocolate';
  cantidadGasto = 10;
  gastos: Gasto[] = [];

  presupuesto = 0;
  saldo = 0;

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }

  saldoInicialIngresado = false;

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.saldo -= gasto.cantidad;
    console.log(this.gastos);
    this.nombreGasto = '';
    this.cantidadGasto = 0;
  }
}

bootstrapApplication(App);
