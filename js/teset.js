let sammonCookies = document.getElementById('samsales');
const sammonTable = document.createElement('table');
const tableBody = document.createElement('tbody');
sammonTable.setAttribute('id', 'sammin-table');

let allShops = [];
let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

function CookieShop(location, minCust, maxCust, avgCookiesPerCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custHr = [];
  this.cookiesSoldPerHour= [];
  this.totCustHr();
  this.totCookiesPerHr();
  this.total = this.getCookieTotal();

  allShops.push(this);
}
// cookiesSoldPerHour.push(){
//   dailyTotal = 0
//   for(j = 0; j < cookiesSoldPerHour.length; j++){
//     dailyTotal += this.
//   }
// }
function randomAvg(min, max) {//gets random num
  return Math.floor(Math.random()* (max - min +1) + min);
}

CookieShop.prototype.totCustHr = function() {//get random number between min/max cust, push to array custHR
  for(let i=0; i < openHours.length; i++ ){
    this.custHr.push(randomAvg(this.minCust,this.maxCust));
  }
};

CookieShop.prototype.totCookiesPerHr = function(){//mult custHr * avg cookies per cust
  for(let j=0; j<openHours.length; j++){
    this.cookiesSoldPerHour.push(Math.round(this.custHr[j] * this.avgCookiesPerCust));
  }
};

CookieShop.prototype.getCookieTotal= function(){
  let total = 0;
  for(let i=0; i<this.cookiesSoldPerHour.length; i++){
    total += this.cookiesSoldPerHour[i];
  }
  return total;
};

// CookieShop.prototype.hourlyGrandTotals = function


CookieShop.prototype.generateTable = function generateTable(){

  let row = document.createElement('tr');
  console.log(this.cookiesSoldPerHour);
  let storeNameCell = document.createElement('td');
  let storeNameCellTxt = document.createTextNode(`${this.location}`);
  storeNameCell.appendChild(storeNameCellTxt);
  row.appendChild(storeNameCell);


  for(let j = 0; j <= this.cookiesSoldPerHour.length; j++){
    let cell = document.createElement('td');

    let cellText = document.createTextNode(`${this.cookiesSoldPerHour[j]} cookies`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    console.log(cellText);
  }
  tableBody.appendChild(row);
  // }
  sammonTable.appendChild(tableBody);
  console.log(sammonTable);
  document.querySelector('main').appendChild(sammonTable);
};

///table header
let row = document.createElement('tr');

for(let i=0; i === openHours.length; i++){
  let storeHeaders = document.createElement('th');
  let openHoursHeaders = document.createTextNode(`${openHours[i]}`);
  storeHeaders.appendChild(openHoursHeaders);
  row.appendChild(storeHeaders);
}
tableBody.appendChild(row);
sammonTable.appendChild(tableBody);

///footer



const seattle = new CookieShop('Seattle', 23, 65, 6.3);
const tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
const dubai = new CookieShop('Dubai',11, 38, 3.7);
const paris = new CookieShop('Paris',20, 38,2.3);
const lima = new CookieShop('Lima', 2, 16, 4.6);


console.log(allShops);


seattle.generateTable();
tokyo.generateTable();
dubai.generateTable();
paris.generateTable();
lima.generateTable();



//footer = totals
//className to add class

