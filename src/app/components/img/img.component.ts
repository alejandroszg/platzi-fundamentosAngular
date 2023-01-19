import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/default.png'
  
  // Si la imagen tiene un error
  imgError(){
    this.img = this.imageDefault;
  }

  // Si la imagen carga satisfactoriamente
  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img)
  }

  constructor(){
    // before render
    // NO asyng -- once time
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(){
    // before render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img )
  }

  ngOnInit(): void{
    // before render
    // async - fetch -- times
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  
  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfeterViewInit', 'imgValue =>', this.img)
  }

  ngOnDestroy() {
    // delete
  }
}
