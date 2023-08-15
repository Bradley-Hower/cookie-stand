`use strict`;


let storereportSection = document.getElementById('store_reports');

console.dir(storereportSection);

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];





let Seattle_store = {
  name: 'Seattle',
  mincust: 23,
  maxcust: 65,
  avgsale: 6.3,

  randomnumgen: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max- min + 1) + min); // The maximum is inclusive 
  },

  randomcust_generator: function () {
    return this.randomnumgen(this.mincust, this.maxcust);
  },



  hourlysales: function (){
    let hourlysales_tally = [];
    for (let i = 0; i < hours.length ; i++){
      if (i < hours.length){
        hourlysales_tally.push(`${hours[i]}: ${Math.round(this.randomcust_generator() * this.avgsale)} cookies`);
      }
      else {
        return hourlysales_tally;
      }
    }
    return hourlysales_tally;
  },
  
  render: function (){
    this.hourlysales();
    // ** Create Element
    let articleEle =  document.createElement('article');

    // ** Add to DOM
    storereportSection.appendChild(articleEle);

    let storereportHeading = document.createElement('h2');
    articleEle.appendChild(storereportHeading);

    storereportHeading.innerText = this.name;



    let storepEle = document.createElement('p');
    storereportHeading.appendChild(storepEle);

    let storeulEle = document.createElement('ul');
    articleEle.appendChild(storeulEle);

    for (let i = 0; i < hours.length ; i++){
      if (i < hours.length){
        let storeliElem = document.createElement('li');
        storeliElem.innerText = this.hourlysales()[i];
        storeulEle.appendChild(storeliElem);
      }
    }

    let imgEle = document.createElement('img');
    articleEle.appendChild(imgEle);

  }
};




Seattle_store.render();


// console.log(Seattle);


// console.log(Seattle_store.hourlysales());

		
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima