console.log('Running Program to Print Integers 1 to 100..'+'\n');

print();

function print()
{
  for(var i=1;i<100;i++)
  {
    if(i%5===0 && i%10!==0)console.log('Coding'+'\n');
    else if(i%5===0 && i%10===0)console.log('CodingDojo'+'\n');
    else console.log(i+'\n');
  }
}
