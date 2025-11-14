import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-websocket',
  imports: [CommonModule],
  templateUrl: './websocket.html',
  styleUrl: './websocket.scss',
})
export class Websocket implements OnInit {
  messages: String[] = [];

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const socket = new WebSocket('ws://localhost:8080/ws/test');

    socket.onopen = () => {
      console.log('Conectado al WebSocket!');
      socket.send('Hola desde Angular!');
    };

    // socket.onmessage = (msg) => {
    //   console.log('Mensaje del servidor: ', msg.data);
    //   this.ngZone.run(() => {
    //     this.messages.push(msg.data);
    //   });
    // };

    socket.onmessage = (msg) => {
      this.messages.push(msg.data);
      this.cdr.detectChanges();
    };

    socket.onclose = () => {
      console.log('WebSocket cerrado');
    };

    socket.onerror = (err) => {
      console.log('Error: ', err);
    };
  }
}
