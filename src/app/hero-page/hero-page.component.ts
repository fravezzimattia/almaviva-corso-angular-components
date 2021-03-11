import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-hero-page',
	templateUrl: './hero-page.component.html',
	styleUrls: ['./hero-page.component.scss'],
	// encapsulation: ViewEncapsulation.ShadowDom,
	// changeDetection : ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {
	public heroList: string[] = [];
	public heroName: string = '';

	public saveHero() {
		this.heroList.push(this.heroName);
		this.heroName = '';
	}
}
