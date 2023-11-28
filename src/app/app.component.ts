import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimationsComponent } from '@components/animations/animations.component';

// Env

// Components
import { PaiOuMaeComponent } from '@components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { ContentComponent } from '@components/content/content.component';
import { ReactiveFormsComponent } from '@components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from '@components/forms/template-driven-forms/template-driven-forms.component';
import { HostElementsComponent } from '@components/host-elements/host-elements.component';
import { LifeCycleComponent } from '@components/life-cycle/life-cycle.component';
import { NewComponent } from '@components/new-component/new-component.component';
import { OptImageComponent } from '@components/opt-image/opt-image.component';
import { AngularPipesComponent } from '@components/pipes/angular-pipes/angular-pipes.component';
import { SignalsComponent } from '@components/signals/signals.component';
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateControlFlowComponent } from '@components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from '@components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateVariablesComponent } from '@components/template/template-variables/template-variables.component';
import { TranslateComponent } from '@components/translate/translate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    ConsumeServiceComponent,
    TranslateComponent,
    OptImageComponent,
    AnimationsComponent,
    RouterLink,
  ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-component /> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
    <!-- <app-pai-ou-mae /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-reactive-forms /> -->
    <!-- <app-content>
      <header id="header">
        <p>Header</p>
      </header>
      <p text>Text</p>
      <p text>Text</p>
      <p text>Text</p>
      <footer class="footer">
        <p>Footer</p>
      </footer>
    </app-content> -->
    <!-- <app-host-elements /> -->
    <!--
      *******************************************
      // Adicione esses itens dentro do app Component
      *******************************************
      public number = signal(1);
      public boolean = true;

      ngOnInit(): void {
        setInterval(() => {
          this.number.update((oldValue) => {
            return oldValue + 1;
          });
        }, 1000);
      }

      *******************************************
      // Adicione esses itens dentro do HTML
      *******************************************
      @if(boolean){
      <app-life-cycle [inputMyNumber]="number()">
        <p #text>Text</p>
      </app-life-cycle>
      }

      <button (click)="boolean = !boolean">Destroy Component</button>
    -->
    <!-- <app-consume-service /> -->
    <!-- <app-translate /> -->
    <!-- <app-opt-image /> -->
    <!-- <app-animations /> -->

    <h1>Curso de Angular</h1>
    <nav>
      <ul>
        <li><a [routerLink]="['']">Home</a></li>
        <li><a [routerLink]="['/sobre']">Sobre</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
              }),
              group([
                animate(
                  '1s',
                  style({
                    opacity: 1,
                  })
                ),
              ]),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {}
