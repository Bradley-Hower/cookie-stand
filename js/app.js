`use strict`;


let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


let Seattle = {
  mincust: 23,
  maxcust: 65,
  avgsale: 6.3,

  randomnumgen: function () {
    return Math.floor(Math.random() * (this.maxcust - this.mincust + 1) + this.mincust); // The maximum is inclusive 
  },

  hourlysales: [],

  hourlysales_generator: function (){
    for (i === 0; i < hours.length; i++){
      if (i < hours.length){
        this.hourlysales.push(this.randomnumgen * this.avgsale);
      }
      else {
        break;
      }
    }
  }
}

console.log(Seattle.hourlysales);

		
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima