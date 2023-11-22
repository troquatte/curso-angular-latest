import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateComponent {
  #translate = inject(TranslateService);

  public translate(lang: string) {
    return this.#translate.setDefaultLang(lang);
  }
}
