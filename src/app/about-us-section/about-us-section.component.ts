import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css']
})
export class AboutUsSectionComponent {
title = "TEMPLATEANGULAR";
constructor(){
  console.log(`new-title is $(this.TEMPLATEANGULAR) `);
}

}
