'use strict';


let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let seattle = {
  location: 'Seattle',
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
  },
  getCookieTotal: function(){
    let total = 0;
    for(let i=0; i<this.cookiesSoldPerHour.length; i++){
      total += this.cookiesSoldPerHour[i];
    }
    return total;
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
  location: 'Tokyo',
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
  },
  getCookieTotal: function(){
    let total = 0;
    for(let i=0; i<this.cookiesSoldPerHour.length; i++){
      total += this.cookiesSoldPerHour[i];
    }
    return total;
  }
};


tokyo.totCustHr();
tokyo.totCookiesPerHr();
console.log(tokyo);

//Dubai

let dubai = {
  location: 'Dubai',
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
  },
  getCookieTotal: function(){
    let total = 0;
    for(let i=0; i<this.cookiesSoldPerHour.length; i++){
      //total += adds each index to the next
      total += this.cookiesSoldPerHour[i];
    }
    return total;
  }
};


dubai.totCustHr();
dubai.totCookiesPerHr();
console.log(dubai);

//Paris

let paris = {
  location: 'Paris',
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
  },
  getCookieTotal: function(){
    let total = 0;
    for(let i=0; i<this.cookiesSoldPerHour.length; i++){
      total += this.cookiesSoldPerHour[i];
    }
    return total;
  }
};

paris.totCustHr();
paris.totCookiesPerHr();
console.log(paris);

//Lima

let lima = {
  location: 'Lima',
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
  },
  getCookieTotal: function(){
    let total = 0;
    for(let i=0; i<this.cookiesSoldPerHour.length; i++){
      total += this.cookiesSoldPerHour[i];
    }
    return total;
  }
};


lima.totCustHr();
lima.totCookiesPerHr();
console.log(lima);

////////////RENDERS///DOM /////////


seattle.render = function(){
  //define
  let h2Elem = document.createElement('h2');
  //context
  h2Elem.textContent = this.location;
  //add to dom
  sammonCookies.appendChild(h2Elem);

  //create ul
  let ulElem =document.createElement('ul');
  sammonCookies.appendChild(ulElem);
  // create li
  for(let i=0; i < openHours.length;i++){
    let hourlySales = `${openHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    let liElem = document.createElement('li');
    liElem.textContent = hourlySales;
    ulElem.appendChild(liElem);
  }
  let totalCookiesInMouths = `Total: ${this.getCookieTotal()} cookies`;
  let liElem = document.createElement('li');
  liElem.textContent = totalCookiesInMouths;
  ulElem.appendChild(liElem);
};

seattle.render();

//tokyo render
tokyo.render = function(){
  //define
  let h2Elem = document.createElement('h2');
  //context
  h2Elem.textContent = this.location;
  //add to dom
  sammonCookies.appendChild(h2Elem);

  //create ul
  let ulElem =document.createElement('ul');
  sammonCookies.appendChild(ulElem);
  // create li
  for(let i=0; i < openHours.length;i++){
    let hourlySales = `${openHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    let liElem = document.createElement('li');
    liElem.textContent = hourlySales;
    ulElem.appendChild(liElem);
  }
  let totalCookiesInMouths = `Total: ${this.getCookieTotal()} cookies`;
  let liElem = document.createElement('li');
  liElem.textContent = totalCookiesInMouths;
  ulElem.appendChild(liElem);
};

tokyo.render();

//dubai render
dubai.render = function(){
  //define
  let h2Elem = document.createElement('h2');
  //context
  h2Elem.textContent = this.location;
  //add to dom
  sammonCookies.appendChild(h2Elem);

  //create ul
  let ulElem =document.createElement('ul');
  sammonCookies.appendChild(ulElem);
  // create li
  for(let i=0; i < openHours.length;i++){
    let hourlySales = `${openHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    let liElem = document.createElement('li');
    liElem.textContent = hourlySales;
    ulElem.appendChild(liElem);
  }
  let totalCookiesInMouths = `Total: ${this.getCookieTotal()} cookies`;
  let liElem = document.createElement('li');
  liElem.textContent = totalCookiesInMouths;
  ulElem.appendChild(liElem);
};

dubai.render();

//paris renderrrrrrr
paris.render = function(){
  //define
  let h2Elem = document.createElement('h2');
  //context
  h2Elem.textContent = this.location;
  //add to dom
  sammonCookies.appendChild(h2Elem);

  //create ul
  let ulElem =document.createElement('ul');
  sammonCookies.appendChild(ulElem);
  // create li
  for(let i=0; i < openHours.length;i++){
    let hourlySales = `${openHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    let liElem = document.createElement('li');
    liElem.textContent = hourlySales;
    ulElem.appendChild(liElem);
  }
  let totalCookiesInMouths = `Total: ${this.getCookieTotal()} cookies`;
  let liElem = document.createElement('li');
  liElem.textContent = totalCookiesInMouths;
  ulElem.appendChild(liElem);
};

paris.render();

//lima
lima.render = function(){
  //define
  let h2Elem = document.createElement('h2');
  //context
  h2Elem.textContent = this.location;
  //add to dom
  sammonCookies.appendChild(h2Elem);

  //create ul
  let ulElem =document.createElement('ul');
  sammonCookies.appendChild(ulElem);
  // create li
  for(let i=0; i < openHours.length;i++){
    let hourlySales = `${openHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    let liElem = document.createElement('li');
    liElem.textContent = hourlySales;
    ulElem.appendChild(liElem);
  }
  let totalCookiesInMouths = `Total: ${this.getCookieTotal()} cookies`;
  let liElem = document.createElement('li');
  liElem.textContent = totalCookiesInMouths;
  ulElem.appendChild(liElem);
};

lima.render();
