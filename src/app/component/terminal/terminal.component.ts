import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgTerminal} from 'ng-terminal';
import {Terminal} from 'xterm';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {
  @ViewChild('term', {static: false}) child!: NgTerminal;

  commandToSend = '';
  isLoading = false;

  underlying!: Terminal;
  keyInput = '';
  inputControl = new FormControl();
  writeSubject = new Subject<string>();

  constructor() { }

  async ngAfterViewInit(): Promise<void> {

    await new Promise(f => setTimeout(f, 2000));

    this.child.write('\r\n$ ');

    await new Promise(f => setTimeout(f, 8000));

    this.child.write('hello world');
    this.child.write('\r\n$ ');

    this.isLoading = false;
    console.log('ready', this.isLoading);
  }

  ngOnInit(): void { }

  onKeyInput(event: string): void {
    this.keyInput = event;
  }

  write(): void {
    // tslint:disable-next-line:no-eval
    this.writeSubject.next(eval(`'${this.inputControl.value}'`));
  }
}
