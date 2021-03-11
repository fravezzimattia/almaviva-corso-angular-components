import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.scss'],
	// encapsulation: ViewEncapsulation.ShadowDom
	// changeDetection : ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
	@Input()
	public items: string[] = [];

	constructor(
		public cd: ChangeDetectorRef
	) { }

	public reload() {
		this.cd.detectChanges();
	}

	public onSelectedItem(nome: string) {
		alert(nome);
	}
}
