import { Pipe } from '@angular/core';

@Pipe({
    name: 'todoDuration'
})

export class TodoDurationPipe {
    transform (milliseconds: number): string {
        return this.formatSeconds(milliseconds);
    }

    private formatSeconds (milliseconds: number): string {
        let date = new Date(milliseconds + new Date().getTimezoneOffset()*60*1000);

        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
    }
}
