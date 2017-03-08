finalcountdown(3, 5, 17, 9);

function finalcountdown(param1, param2, param3, param4)
{
  var i=param2;
  while(param2<param3)
  {
    if(param2%param1===0 && param2!=param4) console.log(param2+'\n');
    param2++;
  }
}
