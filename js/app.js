'use strict';

// const sammonTable = document.createElement('table');

//parent element for table
let sammonCookies = document.getElementById('samsales');//js window

// sammonTable.setAttribute('id', 'sammin-table');
const tableBody = document.createElement('tbody');
console.log(sammonCookies);
sammonCookies.appendChild(tableBody);

//event listener/submit buton
let shopForm = document.getElementById('shop-form');

let allShops = [];
let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieShop(location, minCust, maxCust, avgCookiesPerCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesSoldPerHour= [];
  this.totalCustomersPerHour = this.getTotalCustomersPerHour();
  this.totCookiesPerHr();
  this.total = this.getCookieTotal();

  allShops.push(this);

}

function randomAvg(min, max) {//gets random num
  return Math.floor(Math.random()* (max - min +1) + min);
}

CookieShop.prototype.getTotalCustomersPerHour = function() {//get random number between min/max cust, push to array custHR
  let custHr = [];
  for(let i=0; i < openHours.length; i++ ){
    custHr.push(randomAvg(this.minCust,this.maxCust));
  }
  return custHr;
};

CookieShop.prototype.totCookiesPerHr = function(){//mult custHr * avg cookies per cust
  for(let j=0; j<openHours.length; j++){
    this.cookiesSoldPerHour.push(Math.round(this.totalCustomersPerHour[j] * this.avgCookiesPerCust));
  }
};

CookieShop.prototype.getCookieTotal= function(){
  let total = 0;
  for(let i=0; i<this.cookiesSoldPerHour.length; i++){//
    total += this.cookiesSoldPerHour[i];
  }
  return total;
};

// CookieShop.prototype.hourlyGrandTotals = function

/////Table Start Line 50 - 75
CookieShop.prototype.generateRow = function(){

  let row = document.createElement('tr');//second child
  tableBody.appendChild(row);//first child

  let storeNameCell = document.createElement('td');//locations
  storeNameCell.textContent = `${this.location}`;
  row.appendChild(storeNameCell);

  for(let j = 0; j < this.cookiesSoldPerHour.length; j++){//totals per hour
    let totsPerHr = document.createElement('td');
    totsPerHr.textContent = `${this.cookiesSoldPerHour[j]}`;
    row.appendChild(totsPerHr);
  }

  let dailyTotal = document.createElement('td');//TOTAL store sales per day
  dailyTotal.textContent = `${this.total}`;
  row.appendChild(dailyTotal);
  console.log(this.total);


};//generator END

///table header
let row = document.createElement('tr');
tableBody.appendChild(row);

let emptyHeadCell = document.createElement('td');
row.appendChild(emptyHeadCell);

for(let i = 0; i < openHours.length; i++){
  let storeHeaders = document.createElement('th');
  storeHeaders.textContent = `${openHours[i]}`;
  row.appendChild(storeHeaders);
}
let dailyTotalHdr = document.createElement('td');
dailyTotalHdr.textContent = 'Daily Tots';
row.appendChild(dailyTotalHdr);
// sammonCookies.appendChild(tableBody);




/////calls
const seattle = new CookieShop('Seattle', 23, 65, 6.3);
const tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
const dubai = new CookieShop('Dubai',11, 38, 3.7);
const paris = new CookieShop('Paris',20, 38,2.3);
const lima = new CookieShop('Lima', 2, 16, 4.6);

seattle.generateRow();
tokyo.generateRow();
dubai.generateRow();
paris.generateRow();
lima.generateRow();

//footer data
let footerRow = document.createElement('tr');
tableBody.appendChild(footerRow);

let worldHrTots = document.createElement('td');
worldHrTots.textContent = 'Hourly Totals';
footerRow.appendChild(worldHrTots);

for(let i = 0;i < openHours.length; i++){
  let total = 0;
  for (let j = 0; j < allShops.length; j++){
    total += allShops[j].cookiesSoldPerHour[i];
  }
  let hrlyShpTotal = document.createElement ('td');
  hrlyShpTotal.textContent = total;
  footerRow.appendChild(hrlyShpTotal);
}

let totalOfTotals = 0;
for(let k = 0; k < allShops.length; k++){
  totalOfTotals += allShops[k].total;
}
console.log(totalOfTotals);
let grandTotal = document.createElement('td');
grandTotal.textContent = totalOfTotals;
footerRow.appendChild(grandTotal);




function handleSubmit(event){
  event.preventDefault();
  let location = event.target.shopLocation.value;
  console.log(location);

  let minCust = event.target.minCust.value;
  console.log(minCust);

  let maxCust = event.target.maxCust.value;
  console.log(maxCust);

  let avgCookiesPerCust = event.target.avgPerCust.value;
  console.log(avgCookiesPerCust);

  const newShop = new CookieShop(location, minCust, maxCust, avgCookiesPerCust);

  sammonCookies.deleteRow(-1);

  newShop.generateRow();

  let footerRow = document.createElement('tr');
  tableBody.appendChild(footerRow);

  let worldHrTots = document.createElement('td');
  worldHrTots.textContent = 'Hourly Totals';
  footerRow.appendChild(worldHrTots);

  for(let i = 0;i < openHours.length; i++){
    let total = 0;
    for (let j = 0; j < allShops.length; j++){
      total += allShops[j].cookiesSoldPerHour[i];
    }
    let hrlyShpTotal = document.createElement ('td');
    hrlyShpTotal.textContent = total;
    footerRow.appendChild(hrlyShpTotal);
  // console.log(total);
  }
  shopForm.reset();
}
shopForm.addEventListener('submit', handleSubmit);
