import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	scrollToElement(id: string): void {
		const element = document.getElementById(id);
		if (element) {
			const y = element.offsetTop - 250;
			window.scroll({ top: y, behavior: 'smooth'});
		}
	}

}
