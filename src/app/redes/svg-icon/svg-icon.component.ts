import { Component, Input,SimpleChanges,OnChanges } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-svg-icon',
  template: '<div [innerHTML]="svgContent"></div>'
})


export class SvgIconComponent {
  @Input() color:string='red';
 @Input() svgFileName:string='';

 svgContent!: SafeHtml;


 constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}


 ngOnChanges(changes: SimpleChanges) {
  if ('svgFileName' in changes || 'color' in changes) {
      this.loadSvg(this.svgFileName);
    }
  }

  ngOnInit() {
    if (this.svgFileName) {
      this.loadSvg(this.svgFileName);
    }
  }

  private loadSvg(fileName: string) {
    const path = `../../../assets/images/${fileName}.svg`;
    this.http.get(path, { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(this.changeFillColor(data, this.color));
      },

      error => {
        console.error('Error cargando el archivo SVG:', error);
      }
    );
  }

  private changeFillColor(svgContent: string, color: string): string {
    return svgContent.replace(/fill="#[a-zA-Z0-9]+"/g, `fill="${color}"`);
  }
}
