console.log('Running Program Multiples of 3, But Not All..'+'\n');

multiples3();

function multiples3()
{
  for(var i=-300;i<0;i++)
  {
    if(i%3===0 && i!=-3 && i!=-6) console.log(i+'\n');
  }
}
