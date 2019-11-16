function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    //console.log(`"I am ${i} stange loop${i===0 ? '' : 's' }."`);
    array.push(`I am ${i} strange loop${i===0 ? '' : 's' }.`);
  }
  return array;
}