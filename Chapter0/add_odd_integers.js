addOddIntegers(-300000, 300000);

function addOddIntegers(start, end)
{
  if(start==-end)
  {
    console.log(0);
    return;
  }
  var sum = 0;
  for(var i =start;i<=end;i++) sum+=i;
  console.log(sum);
}
