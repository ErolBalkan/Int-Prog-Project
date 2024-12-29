import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  
  Name: string = `Erol`;
  LastName: string = `Balkan`;
  CurrentYear: number = new Date().getFullYear();
  Id: number = 2945;

  ngOnInit(): void {}
}
