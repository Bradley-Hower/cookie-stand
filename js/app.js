`use strict`;

let storereportSection = document.getElementById('store_reports');

// ** Create Table Element

let tableEle =  document.createElement('table');
tableEle.setAttribute('id', 'store_reports_table');
let breaktable =  document.createElement('br');
let tableEle2 =  document.createElement('table');

// ** Add Table to to DOM 
storereportSection.appendChild(tableEle);
storereportSection.appendChild(breaktable);
storereportSection.appendChild(tableEle2);

// console.dir(storereportSection);

const hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

const cookie_array = [];

const cookie_data_array = [];

function render_all(){
  for(let i = 0; i < cookie_array.length; i++){
    cookie_array[i].render();
  }
}

//** Table Row Remover */
function handleRowremoval(){
  document.getElementById('store_reports_table').deleteRow(cookie_array.length);

}


//** Element tracking mount */
let storetobeSubmitted = document.getElementById('store-submit');


//** Event Listener and Handler */

function handleSubmit(event){
  event.preventDefault();
  let storename = event.target.storename.value;
  let storemincust = Number(event.target.storemincust.value);
  let storemaxcust = Number(event.target.storemaxcust.value);
  let storeavgsale = Number(event.target.storeavgsale.value);

  let newstore = new Cookies(storename, storemincust, storemaxcust, storeavgsale);

  handleRowremoval();
  // cookie_array.push(newstore);
  newstore.render();
  // footer_render();

}

storetobeSubmitted.addEventListener('submit', handleSubmit);


//** Heading Render */

function heading_render(){

  // ** More Elements
  let storenameHeading = document.createElement('th');
  tableEle.appendChild(storenameHeading);
  storenameHeading.innerText = '';

  for(let i = 0; i < hours.length + 1; i++){
    if (i< hours.length){
      let storereportHeading = document.createElement('th');
      tableEle.appendChild(storereportHeading);
      storereportHeading.innerText = hours[i];
    } else {
      let storereportHeading_end = document.createElement('th');
      tableEle.appendChild(storereportHeading_end);
      storereportHeading_end.innerText = 'Daily Location Totals';
    }
  }
}

//** Constructor */

function Cookies(name, mincust, maxcust, avgsale){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgsale = avgsale;
}


// Prototypes
Cookies.prototype.randomnumgen = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
},

Cookies.prototype.randomcust_generator = function () {
  return this.randomnumgen(this.mincust, this.maxcust);
},

Cookies.prototype.hourlysales = function (){
  let hourlysales_tally = [];
  let totalsales = 0;
  let data_insert = 0;
  for (let i = 0; i < hours.length + 1; i++){
    if (i < hours.length){
      data_insert = Math.round(this.randomcust_generator() * this.avgsale);
      hourlysales_tally.push(`${data_insert}`);
      totalsales += data_insert;
    } else {
      hourlysales_tally.push(`${totalsales}`);
    }
  }
  return hourlysales_tally;
};



Cookies.prototype.render = function (){
  let hourlydata_pull = this.hourlysales();
  cookie_data_array.push(hourlydata_pull);

  // ** Create Element
  let storerowEle = document.createElement('tr');
  tableEle.appendChild(storerowEle);
  let storerowtitleEle = document.createElement('td');
  tableEle.appendChild(storerowtitleEle);
  storerowtitleEle.innerText = (this.name);

  for(let i = 0; i < hourlydata_pull.length; i++){
    let hourdataEle = document.createElement('td');
    tableEle.appendChild(hourdataEle);
    hourdataEle.innerText = hourlydata_pull[i];
  }

  let storerowEle2 = document.createElement('tr');
  tableEle2.appendChild(storerowEle2);
  let storerowtitleEle2 = document.createElement('td');
  tableEle2.appendChild(storerowtitleEle2);
  storerowtitleEle2.innerText = (this.name);


  for(let i = 0; i < hourlydata_pull.length - 1; i++){
    let hourdataEle = document.createElement('td');
    tableEle2.appendChild(hourdataEle);
    hourdataEle.innerText = Math.max(2, Math.round(hourlydata_pull[i]/20)) + (' staff');
  }
};

let seattle = new Cookies ('Seattle', 23, 65, 6.3);
let tokyo = new Cookies ('Tokyo', 3, 24, 1.2);
let dubai = new Cookies ('Dubai', 11, 38, 3.7);
let paris = new Cookies ('Paris', 20, 38, 2.3);
let lima = new Cookies ('Lima', 2, 16, 4.6);

cookie_array.push(seattle, tokyo, dubai, paris, lima);



function footer_render(){
  console.log(cookie_data_array);
  // ** More Elements
  let storerowtitleEle = document.createElement('tr');
  tableEle.appendChild(storerowtitleEle);
  let storecelltitleEle = document.createElement('td');
  storerowtitleEle.appendChild(storecelltitleEle);
  storecelltitleEle.innerText = ('Totals');
  
  for(let i = 0; i < hours.length + 1; i++){
    let columntotal = 0;
    let all_loc_hourly_total = document.createElement('td');
    storerowtitleEle.appendChild(all_loc_hourly_total);
    for(let a = 0; a < cookie_data_array.length; a++){
      columntotal += Number(cookie_data_array[a][i]);
      all_loc_hourly_total.innerText = columntotal;
    }
  }
}


heading_render();
render_all();
footer_render();




