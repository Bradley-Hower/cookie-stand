`use strict`;

//X  constructor

//X  prototypes 

//X  instantiation (via `new`)

//X profile array

//X helper function to pull from array to render (loop)


// helper function for header from hours (loop)

// table dom construction

// helper function for hourly totals



let storereportSection = document.getElementById('store_reports');

// ** Create Table Element

let tableEle =  document.createElement('table');

// ** Add Table to to DOM 
storereportSection.appendChild(tableEle);


// console.dir(storereportSection);

const hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

const cookie_array = [];

function render_all(){
  for(let i = 0; i < cookie_array.length; i++){
    cookie_array[i].render();
  }
}



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
};

let seattle = new Cookies ('Seattle', 23, 65, 6.3);
let tokyo = new Cookies ('Tokyo', 3, 24, 1.2);
let dubai = new Cookies ('Dubai', 11, 38, 3.7);
let paris = new Cookies ('Paris', 20, 38, 2.3);
let lima = new Cookies ('Lima', 2, 16, 4.6);

cookie_array.push(seattle, tokyo, dubai, paris, lima);

function footer_render(){

  // ** More Elements
  let storefooterEle = document.createElement('tr');
  tableEle.appendChild(storefooterEle);
  let storerowtitleEle = document.createElement('td');
  tableEle.appendChild(storerowtitleEle);
  storerowtitleEle.innerText = ('asdf');


  for(let i = 0; i < hours.length + 1; i++){
    if (i< hours.length){
      let all_loc_hourly_total = document.createElement('td');
      tableEle.appendChild(all_loc_hourly_total);
      all_loc_hourly_total.innerText = ':(';
    } else {
      let storereportHeading_end = document.createElement('th');
      tableEle.appendChild(storereportHeading_end);
      storereportHeading_end.innerText = 'Daily Location Totals';
    }
  }
}

heading_render();
render_all();
footer_render();




// let Seattle_store = {
//   name: 'Seattle',
//   mincust: 23,
//   maxcust: 65,
//   avgsale: 6.3,

//   randomnumgen: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
//   },

//   randomcust_generator: function () {
//     return this.randomnumgen(this.mincust, this.maxcust);
//   },



//   hourlysales: function (){
//     let hourlysales_tally = [];
//     let totalsales = 0;
//     let data_insert = 0;
//     for (let i = 0; i < hours.length + 1; i++){
//       if (i < hours.length){
//         data_insert = Math.round(this.randomcust_generator() * this.avgsale);
//         hourlysales_tally.push(`${hours[i]}: ${data_insert} cookies`);
//         totalsales += data_insert;
//       } else {
//         hourlysales_tally.push(`Total Sales: ${totalsales}`);
//       }
//     }
//     return hourlysales_tally;
//   },


//   render: function (){
//     this.hourlysales();
//     // ** Create Element
//     let articleEle =  document.createElement('article');

//     // ** Add to DOM
//     storereportSection.appendChild(articleEle);

//     let storereportHeading = document.createElement('h2');
//     articleEle.appendChild(storereportHeading);

//     storereportHeading.innerText = this.name;



//     let storepEle = document.createElement('p');
//     storereportHeading.appendChild(storepEle);

//     let storeulEle = document.createElement('ul');
//     articleEle.appendChild(storeulEle);

//     let salesarray = this.hourlysales();
//     for (let i = 0; i < hours.length + 1 ; i++){
//       if (i < hours.length + 1){
//         let storeliElem = document.createElement('li');
//         storeliElem.innerText = salesarray[i];
//         storeulEle.appendChild(storeliElem);
//       }
//     }

//     let imgEle = document.createElement('img');
//     articleEle.appendChild(imgEle);

//   }
// };

// let Tokyo_store = {
//   name: 'Tokyo',
//   mincust: 3,
//   maxcust: 24,
//   avgsale: 1.2,

//   randomnumgen: function (min, max) {
//     return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
//   },

//   randomcust_generator: function () {
//     let randnumber = this.randomnumgen(this.mincust, this.maxcust);
//     return randnumber;
//   },



//   hourlysales: function (){
//     let hourlysales_tally = [];
//     let totalsales = 0;
//     let data_insert = 0;
//     for (let i = 0; i < hours.length + 1; i++){
//       if (i < hours.length){
//         data_insert = (Math.round(this.randomcust_generator()));
//         console.log(data_insert);
//         totalsales += data_insert;
//         console.log(totalsales);
//         hourlysales_tally.push(`${hours[i]}: ${data_insert} cookies`);
//       } else {
//         hourlysales_tally.push(`Total Sales: ${totalsales}`);
//       }
//     }
//     return hourlysales_tally;
//   },


//   render: function (){
//     this.hourlysales();
//     // ** Create Element
//     let articleEle =  document.createElement('article');

//     // ** Add to DOM
//     storereportSection.appendChild(articleEle);

//     let storereportHeading = document.createElement('h2');
//     articleEle.appendChild(storereportHeading);

//     storereportHeading.innerText = this.name;



//     let storepEle = document.createElement('p');
//     storereportHeading.appendChild(storepEle);

//     let storeulEle = document.createElement('ul');
//     articleEle.appendChild(storeulEle);

//     let salesarray = this.hourlysales();
//     console.log(salesarray);
//     for (let i = 0; i < hours.length + 1 ; i++){
//       if (i < hours.length + 1){
//         let storeliElem = document.createElement('li');
//         storeliElem.innerText = salesarray[i];
//         storeulEle.appendChild(storeliElem);
//       }
//     }

//     let imgEle = document.createElement('img');
//     articleEle.appendChild(imgEle);

//   }
// };

// let Dubai_store = {
//   name: 'Dubai',
//   mincust: 11,
//   maxcust: 38,
//   avgsale: 3.7,

//   randomnumgen: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
//   },

//   randomcust_generator: function () {
//     return this.randomnumgen(this.mincust, this.maxcust);
//   },



//   hourlysales: function (){
//     let hourlysales_tally = [];
//     let totalsales = 0;
//     let data_insert = 0;
//     for (let i = 0; i < hours.length + 1; i++){
//       if (i < hours.length){
//         data_insert = Math.round(this.randomcust_generator() * this.avgsale);
//         totalsales += data_insert;
//         hourlysales_tally.push(`${hours[i]}: ${data_insert} cookies`);
//       } else {
//         hourlysales_tally.push(`Total Sales: ${totalsales}`);
//       }
//     }
//     return hourlysales_tally;
//   },


//   render: function (){
//     this.hourlysales();
//     // ** Create Element
//     let articleEle =  document.createElement('article');

//     // ** Add to DOM
//     storereportSection.appendChild(articleEle);

//     let storereportHeading = document.createElement('h2');
//     articleEle.appendChild(storereportHeading);

//     storereportHeading.innerText = this.name;



//     let storepEle = document.createElement('p');
//     storereportHeading.appendChild(storepEle);

//     let storeulEle = document.createElement('ul');
//     articleEle.appendChild(storeulEle);

//     let salesarray = this.hourlysales();
//     for (let i = 0; i < hours.length + 1 ; i++){
//       if (i < hours.length + 1){
//         let storeliElem = document.createElement('li');
//         storeliElem.innerText = salesarray[i];
//         storeulEle.appendChild(storeliElem);
//       }
//     }

//     let imgEle = document.createElement('img');
//     articleEle.appendChild(imgEle);

//   }
// };

// let Paris_store = {
//   name: 'Paris',
//   mincust: 20,
//   maxcust: 38,
//   avgsale: 2.3,

//   randomnumgen: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
//   },

//   randomcust_generator: function () {
//     return this.randomnumgen(this.mincust, this.maxcust);
//   },



//   hourlysales: function (){
//     let hourlysales_tally = [];
//     let totalsales = 0;
//     let data_insert = 0;
//     for (let i = 0; i < hours.length + 1; i++){
//       if (i < hours.length){
//         data_insert = Math.round(this.randomcust_generator() * this.avgsale);
//         totalsales += data_insert;
//         hourlysales_tally.push(`${hours[i]}: ${data_insert} cookies`);
//       } else {
//         hourlysales_tally.push(`Total Sales: ${totalsales}`);
//       }
//     }
//     return hourlysales_tally;
//   },


//   render: function (){
//     this.hourlysales();
//     // ** Create Element
//     let articleEle =  document.createElement('article');

//     // ** Add to DOM
//     storereportSection.appendChild(articleEle);

//     let storereportHeading = document.createElement('h2');
//     articleEle.appendChild(storereportHeading);

//     storereportHeading.innerText = this.name;



//     let storepEle = document.createElement('p');
//     storereportHeading.appendChild(storepEle);

//     let storeulEle = document.createElement('ul');
//     articleEle.appendChild(storeulEle);

//     let salesarray = this.hourlysales();
//     for (let i = 0; i < hours.length + 1 ; i++){
//       if (i < hours.length + 1){
//         let storeliElem = document.createElement('li');
//         storeliElem.innerText = salesarray[i];
//         storeulEle.appendChild(storeliElem);
//       }
//     }

//     let imgEle = document.createElement('img');
//     articleEle.appendChild(imgEle);

//   }
// };

// let Lima_store = {
//   name: 'Lima',
//   mincust: 2,
//   maxcust: 16,
//   avgsale: 4.6,

//   randomnumgen: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
//   },

//   randomcust_generator: function () {
//     return this.randomnumgen(this.mincust, this.maxcust);
//   },



//   hourlysales: function (){
//     let hourlysales_tally = [];
//     let totalsales = 0;
//     let data_insert = 0;
//     for (let i = 0; i < hours.length + 1; i++){
//       if (i < hours.length){
//         data_insert = Math.round(this.randomcust_generator() * this.avgsale);
//         totalsales += data_insert;
//         hourlysales_tally.push(`${hours[i]}: ${data_insert} cookies`);
//       } else {
//         hourlysales_tally.push(`Total Sales: ${totalsales}`);
//       }
//     }
//     return hourlysales_tally;
//   },


//   render: function (){
//     this.hourlysales();
//     // ** Create Element
//     let articleEle =  document.createElement('article');

//     // ** Add to DOM
//     storereportSection.appendChild(articleEle);

//     let storereportHeading = document.createElement('h2');
//     articleEle.appendChild(storereportHeading);

//     storereportHeading.innerText = this.name;



//     let storepEle = document.createElement('p');
//     storereportHeading.appendChild(storepEle);

//     let storeulEle = document.createElement('ul');
//     articleEle.appendChild(storeulEle);

//     let salesarray = this.hourlysales();
//     for (let i = 0; i < hours.length + 1 ; i++){
//       if (i < hours.length + 1){
//         let storeliElem = document.createElement('li');
//         storeliElem.innerText = salesarray[i];
//         storeulEle.appendChild(storeliElem);
//       }
//     }

//     let imgEle = document.createElement('img');
//     articleEle.appendChild(imgEle);

//   }
// };

// Seattle_store.render();
// Tokyo_store.render();
// Dubai_store.render();
// Paris_store.render();
// Lima_store.render();
