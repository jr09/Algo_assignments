console.log('Running Program Multiples of 6 upto 60000..'+'\n');

multiples6();

function multiples6()
{
  var i=0;
  while(i<60000)
  {
    if(i%6==0 && i!=0) console.log(i+'\n');
    i++;
  }
}
