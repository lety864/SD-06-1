// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
    this.printMail = function () {
      console.log(this.subject + ": " + this.message); 
    };
  }
  
  const newMail = new Mail(process.argv[2],process.argv[3]);
  
  // Type your code above this line!
  console.log(process.argv);
  
  newMail.printMail();