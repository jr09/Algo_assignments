console.log('Running Set_swap function()..'+'\n')

set_swap();

function set_swap()
{
  var myNumber = 42;
  var myName = "Jivesh";
  console.log('myNumber = '+ myNumber + ' myName = '+ myName + '\n');

  var temp = myName;
  myName = myNumber;
  myNumber = temp;
  console.log('myNumber = '+ myNumber + ' myName = '+ myName + '\n');
}
