import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  providers: [ConfigService],
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // config: Config;
  listStuddents: any;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.showConfig();
  }


  showConfig() {
    this.configService.getConfig()
      .subscribe((data: []) => {
        this.listStuddents = data;
      });
  }
}
