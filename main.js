// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (n, mock) => {
  return ({
    specimenNum: n,
    dna: mock,
    mutate: function() {
      a = [];
      a = this.dna;
      b = Math.floor(Math.random() * 15);
      c = returnRandBase();
      if(a[b]!=c) {
              a[b] = c
              this.dna = a;
      } else {
          while(a[b]==c) {
          c = returnRandBase();
          }
          a[b] = c
          this.dna = a;
      }
      return this.dna;
    },
    compareDNA: function(pAe) {
      let count = 0;
      for(i=0; i < 15 ; i++) {
        if(this.dna[i] == pAe.dna[i]) {
          count++;
        }
      }
      let per = Math.trunc(count/15 * 100);
      console.log(`specimen #1 and specimen #2 have ${per}% DNA in common.`);
    },
    willLikelySurvive: function() {
      let count = 0;
      for(i=0; i < 15 ; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        }
      }
      if(count>=9){
         return true;
      } else {
          return false;
        }
      }

  })
}


aequor1 = pAequorFactory(1, mockUpStrand());
console.log(aequor1.dna);
//aequor1.mutate();
//console.log(aequor1.dna);
aequor2 = pAequorFactory(2, mockUpStrand());
aequor1.compareDNA(aequor2);
aequor2.compareDNA(aequor1);
console.log(aequor1.willLikelySurvive());

const instancesToStudy = [];

while(instancesToStudy.length<30) {
  let newInstance = pAequorFactory(instancesToStudy.length+1, mockUpStrand());
  if(newInstance.willLikelySurvive()==true) {
    instancesToStudy.push(newInstance);
  }
}

console.log(instancesToStudy.length);

//console.log(pAequorFactory(5,mockUpStrand()));
//console.log(pAequorFactory(6,mockUpStrand()));
