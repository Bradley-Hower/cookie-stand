`use strict`;


let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


let Seattle = {
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



  hourlysales_generator: function (){
    let hourlysales = [];
    for (let i = 0; i < hours.length ; i++){
      if (i < hours.length){
        hourlysales.push(this.randomcust_generator());
      }
      else {
        return hourlysales;
      }
    }
    return hourlysales;
  },

};

console.log(Seattle.randomcust_generator());
console.log(Seattle.hourlysales_generator());

		
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima