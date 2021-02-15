
showNumbers(10);

function showNumbers(limit) {
 for (let i = 0; i <= limit; i++) {
     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
     console.log(i, message);
 }
}
// Cleaner code would be better than this longer way, but  
//  if (i % 2 === 0)  console.log(i, 'EVEN');
//  else console.log(i, 'ODD')