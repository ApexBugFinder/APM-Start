import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    //Defines an output property that emits the data for the click event
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    

    // ngOnChanges method is required to implement the OnChanges class
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }


    // Triggered onClick event from clicking on star component div
    onClick(){
        console.log(`This rating ${this.rating} was clicked!`);
        //this.notify.emit('clicked!');
        // 
        this.ratingClicked.emit(`This rating ${this.rating} was clicked!`);
    }
}