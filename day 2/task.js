/// task one  
// write a program to add two numbers
/// addition 
 function sum(a,b) {
       let add= a+b;
       console.log(add);
 }
 // subtraction

 function subtract(a,b) {
    let add= a-b;
    console.log(add);
}
 // multiplication 
function mul(a,b) {
    let add= a*b;
    console.log(add);
}
 // divide 
function divide(a,b) {
    let add= a/b;
    console.log(add);
}
/// modulus 
function mod(a,b) {
    let add= a%b;
    console.log(add);
}
  sum(3,5);
  subtract(5,6);
  mod(6,4);
  mul(6,6);
  divide(3,3);
 
   // Activity 2 
    /// assignment += operator 
     let number=10;
     number+=10;
     console.log(number);
   ///
    ///  assignment -= operator 
     let number2=20;
     number2-=10;
     console.log(number2);
      

     /// activity three
     /// write program using comparsion operator  > < == ===
     function compareTwonumber(a,b){
          
        if(a>b){
            console.log('a is grater than b');
        }
        else {
             console.log('b is greater than a');
        }
     }
   
     //// == equal operator 
     function equalOperator(a,b){
         if(a==b){
             console.log(' a is equal to b');

         }
         else console.log('a is not equal to b');
     }
    /// strict equal operator 
     
    function strictChecking(a,b){
        if(a===b){
             console.log('both value and datatype of a is equal to be0');
        }
        else {
             console.log(' a  is not equal to b '); 
        }
    } 
      /// activity 5
      equalOperator(4,6);
      compareTwonumber(4,6);
      strictChecking(4,4);

      /// activity 6

      //// using logical  operator 
       function cinemTicket(age){
         
        if(age>=18 && age<=50){
             console.log(' this age group of people can enjoy this movie :  age is ${age}');
        }
        else console.log('they are not allowed to watch this movie ');

       }
        
       /// using or operator || 

       function counterTicket(b){
         if(a==='india' || a==='nepal'){
             console.log(' we have to not paid tax on ticket');

         }
         else{
            console.log(' we have to  paid tax  on ticket');
         }
       }

       /// ternary operator 
          let a=23;
        let num= (a>0) ?  console.log('positive number'):  console.log('negative number'); 
         
        counterTicket('india');
        cinemTicket(54);



        /// 