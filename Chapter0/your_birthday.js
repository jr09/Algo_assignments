console.log('Running Program Is it Your Birthday..'+'\n');

isBirthday(9,12);

function isBirthday(num1,num2)
{
  if((num1==9 && num2==12) || (num1==12 && num2==9)) console.log('How did you know?');
  else console.log('Just another day..');
}
