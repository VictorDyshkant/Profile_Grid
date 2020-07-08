/*
let prom = new Promise(function(ok,error)
{
    setTimeout(
        function()
        {
            if(1<2)
            {
                ok(10);
            }
            else{
                error(-10);
            }
        }
        ,2000);
});

prom.then((number)=>{console.log(number);return 'Ok'})
.then((str)=>{console.log(str)})
.catch((number)=>{console.log(number)});





function User(name,surname,age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.ShowAll =  function()
    {
        console.log("Name = "+this.name+" Surname = "+this.surname);
    }

    this.Year = function()
    {
        console.log(2019-this.age);
    }

    this.Show =  function()
    {
        console.log('Hi');
    }
}
User.prototype.hello = function()
{
    console.log("Hello "+this.name);
}

function Employer(name,surname,age,proffesion)
{
    User.call(this,name,surname,age);
    this.proffesion = proffesion;
    this.Work = function()
    {
        console.log(this.name+" is "+this.proffesion);
    }
}
Employer.prototype = Object.create(User.prototype);
Employer.prototype.fuck = function()
{
    console.log(this.name+" want to fuck");
}

let u = {
    name:'Viva',
    surname:'Dyshkant',
    age:15
}
console.log(u);

let user = new Employer(u.name,u.surname,u['age'],'programmer');
console.log(user);

user.ShowAll();
user.Year();
user.Show();
user.Work();

user.hello();
user.fuck();
*/


let promise = new Promise(function(ok,error)
{
    setTimeout(()=>{
        let t = Math.random();
        if(t > 0.75)
        {
            ok(t.toString()+' greater than 0.75');
        }
        else{
            error(t.toString()+' less than 0.75');
        }
    },2000);
});

promise.then((str)=>{console.log(str+" ok");return "str"})
.then((str)=>{console.log(str)})
.catch((str)=>{console.log(str+" error")});


let zam = function()
{
    let count = 0;
    return function()
    {
        console.log(++count);
    }
}

let z = zam();

z();
z();

