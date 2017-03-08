flexibleCountdown(2,9,3);

function flexibleCountdown(lownum, highnum, mult)
{
  for(var i=highnum;i>lownum;i--)
  {
    if(i%mult==0) console.log(i+'\n');
  }
}
