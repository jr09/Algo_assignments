console.log('Running Program Multiples of 5 from 512 to 4096..'+'\n');

multiples5();

function multiples5()
{
  var count = 0;
  for(var i=512;i<4096;i++)
  {
    if(i%5==0){console.log(i+'\n');count++}
  }
  console.log('Count = '+count);
}
