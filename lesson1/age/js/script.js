let age = prompt('How old are you?', 0);
if (age >= 0 && age <= 2)
{
console.log('You are a baby');
}
else if (age > 2 && age < 12)
{
console.log('You are a child');
}
else if (age >= 12 && age < 18)
{
console.log('You are a teen');
}
else if (age >= 18 && age < 60)
{
console.log('You are an adult');
}
else if (age >= 60)
{
console.log('You are a retiree');
}