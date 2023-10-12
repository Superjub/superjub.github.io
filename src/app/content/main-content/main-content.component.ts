import { Component, OnInit } from '@angular/core';

export interface Project {
	name: string,
	image_url: string | string[],
	description: string | null,
	download_url: string | null
};

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

	showingIFrame: boolean = false;

	constructor() { }

	public readonly projects: Project[] = [
		{   
			name: "Posession",
			image_url: 'assets/projects/posession/posession-screenshot.png',
			description: 'Posession is an eerie RPG where you play as a young female protagonist in strange circumstances.',
			download_url: null
		},
		{
			name: "Clown Calamity",
			image_url: '',
			description: 'Clown Calamity is a vehicle-based game where you dodge wacky obstacles while surviving as long as possible.',
			download_url: null
		},
		{
			name: "Bradley's Blackjack",
			image_url: ["assets/projects/blackjack/blackjack_image_1.png", "assets/projects/blackjack/blackjack_image_2.png"],
			description: "A terminal-based pure text game created using C++ featuring standard Blackjack rules as well as a points system to track score.",
			download_url: "https://github.com/Superjub/blackjack_vs_console_2.0/archive/master.zip"
		},
		{
			name: "REACTionary",
			image_url: ["assets/projects/reactionary/reactionary_image_1.png", "assets/projects/reactionary/reactionary_image_2.png"],
			description: "A web-based game using the ReactJS framework which tests both reaction and click-based skills.",
			download_url: "https://github.com/Superjub/react-game/archive/refs/heads/main.zip"
		},
	];

	ngOnInit(): void {
	}

	showIFrame(): void {
		this.showingIFrame = !this.showingIFrame;
	}

}
