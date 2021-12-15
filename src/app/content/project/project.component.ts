import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../main-content/main-content.component';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	constructor() { }
	@Input() project?: Project;

	ngOnInit(): void {
	}

	download(): void {
		if (this.project?.download_url !==  null) {
			window.open(this.project?.download_url, '_blank');	
		}

	}

}
