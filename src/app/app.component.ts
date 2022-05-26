import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  columns: string[] = [];
  data = {
    name: 'Cafe Goodluck',
    area: 'Deccan Gymkhana',
    city: 'Pune',
    category: ['Restaurant', 'Cafe', 'Breakfast'],
    cover_image: 'https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg',
    review_rating: {
      votes: [
        { rating: 5, votes: 201 },
        { rating: 4, votes: 159 },
        { rating: 3, votes: 69 },
        { rating: 2, votes: 49 },
        { rating: 1, votes: 125 },
      ],
      total: 603,
    },
    feature_rating: {
      place: 3.6,
      food: 3.5,
      service: 3.8,
      staff: 4.1,
      breakfast: 3.4,
    },
  };

  constructor() { }
  ngOnInit() { }
  

  getRatingPercentage(rating: number, total: number): number {
    let percentage = (rating / total) * 100;
    return parseFloat(percentage.toFixed(1));
  }

  calculateRating() {
    let totalVotes = 0;
    let totalResponses = 0;
    let ratingArr = this.data.review_rating.votes;
    for(let i = 0; i < ratingArr.length; i++) {
      totalVotes += ratingArr[i].votes;
      totalResponses += ratingArr[i].rating * ratingArr[i].votes;
    }
    let percentage = (totalResponses / totalVotes);
    return parseFloat(percentage.toFixed(1));
  }

  getStar(index: number) {
    if (index < this.calculateRating()) {
      return 'star';
    }
    return 'star_border';
  }
}
