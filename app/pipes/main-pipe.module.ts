import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDurationPipe } from './TodoDuration.pipe';

@NgModule({
    declarations: [TodoDurationPipe],
    imports: [CommonModule],
    exports: [TodoDurationPipe]
})

export class MainPipe {}
