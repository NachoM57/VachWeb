import { Component } from '@angular/core';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.component.html',
  styleUrls: ['./dudas.component.css']
})
export class DudasComponent {
  accordionItems = [
    {
      title: 'Non consectetur a erat nam at lectus urna duis?',
      content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
      isOpen: true
    },
    {
      title: 'Feugiat scelerisque varius morbi enim nunc?',
      content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
      isOpen: false
    },
    {
      title: 'Feugiat scelerisque varius morbi enim nunc?',
      content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
      isOpen: false
    },
  ];

  toggleItem(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
}