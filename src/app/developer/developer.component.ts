import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  skills!: Skill[];
  developer = new Developer("Georges", "Martin", 25, "Male", "Gentil et heureux", this.skills )

  constructor() { }

  ngOnInit(): void {
    this.skills = [
{
  name: "Angular",
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
  site: 'https://www.google.com/',
},
{
  name: "React",
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  site: 'https://www.google.com/',
}
    ]
  }

}
