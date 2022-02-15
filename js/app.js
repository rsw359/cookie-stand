'use strict';
let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let seattle = {
  location: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  custHr: [],
  cookiesSoldPerHour: [],
  totCustHr: function() {//get random number between min/max cust, push to array custHR
    for(let i=0; i < openHours.length; i++ ){
      this.custHr.push(randomAvg(this.minCust,this.maxCust));
    }
  },
  totCookiesPerHr: function(){//mult custHr * avg cookies
    for(let j=0; j<openHours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
    }
  }
};

function randomAvg(min, max) {//gets random num
  return Math.floor(Math.random()* (max - min +1) + min);
}
seattle.totCustHr();
seattle.totCookiesPerHr();
console.log(seattle);

///Tokyo

let tokyo = {
  location: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  custHr: [],
  cookiesSoldPerHour: [],
  totCustHr: function() {//get random number between min/max cust, push to array custHR
    for(let i=0; i < openHours.length; i++ ){
      this.custHr.push(randomAvg(this.minCust,this.maxCust));
    }
  },
  totCookiesPerHr: function(){//mult custHr * avg cookies
    for(let j=0; j<openHours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
    }
  }
};


tokyo.totCustHr();
tokyo.totCookiesPerHr();
console.log(tokyo);

//Dubai

let dubai = {
  location: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  custHr: [],
  cookiesSoldPerHour: [],
  totCustHr: function() {//get random number between min/max cust, push to array custHR
    for(let i=0; i < openHours.length; i++ ){
      this.custHr.push(randomAvg(this.minCust,this.maxCust));
    }
  },
  totCookiesPerHr: function(){//mult custHr * avg cookies
    for(let j=0; j<openHours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
    }
  }
};


dubai.totCustHr();
dubai.totCookiesPerHr();
console.log(dubai);

//Paris

let paris = {
  location: 'paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  custHr: [],
  cookiesSoldPerHour: [],
  totCustHr: function() {//get random number between min/max cust, push to array custHR
    for(let i=0; i < openHours.length; i++ ){
      this.custHr.push(randomAvg(this.minCust,this.maxCust));
    }
  },
  totCookiesPerHr: function(){//mult custHr * avg cookies
    for(let j=0; j<openHours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
    }
  }
};

paris.totCustHr();
paris.totCookiesPerHr();
console.log(paris);

//Lima

let lima = {
  location: 'lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  custHr: [],
  cookiesSoldPerHour: [],
  totCustHr: function() {//get random number between min/max cust, push to array custHR
    for(let i=0; i < openHours.length; i++ ){
      this.custHr.push(randomAvg(this.minCust,this.maxCust));
    }
  },
  totCookiesPerHr: function(){//mult custHr * avg cookies
    for(let j=0; j<openHours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
    }
  }
};


lima.totCustHr();
lima.totCookiesPerHr();
console.log(lima);



