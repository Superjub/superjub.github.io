import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, ReplaySubject, takeUntil } from 'rxjs';
import { Project } from '../main-content/main-content.component';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

	constructor() { }
	@Input() project: Project | undefined;
	public activeImageURL: any;

	private onDestroy$: ReplaySubject<boolean> = new ReplaySubject(1);

	ngOnInit(): void {
		if (this.project) {
			this.activeImageURL = typeof this.project.image_url === 'string' ? this.project.image_url : this.project?.image_url[0];
			console.log({
				activeImage: this.activeImageURL,
				images: this.project.image_url
			})
			if (!(typeof this.project.image_url === 'string') && this.project.image_url.length > 1) {
				interval(5000).pipe(
					takeUntil(this.onDestroy$)
				).subscribe(() => {
					if (this.activeImageURL && this.project) {
						let index = this.project.image_url.indexOf(this.activeImageURL) + 1;
						const length = this.project.image_url.length;
						index = index > length - 1 ? 0 : index;
						this.activeImageURL = this.project.image_url[index];
					}
				});
			}
		}
	}

	ngOnDestroy(): void {

	}

	download(): void {
		if (this.project?.download_url !==  null) {
			window.open(this.project?.download_url, '_blank');	
		}

	}

}
