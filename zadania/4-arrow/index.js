// function calculate(){
//     return 4;
// }

// const calculate = () => {return 4}

// const calculate = () => 4

// const getUser = () => { return { name: 'Bruce' } }
// const templateName = 'Jurek';
// const getTemplateName = () => 'Janek'

// const getUser = (name = "Stefan") => ({ name })
// const getUser = (name = templateName) => ({ name })
// const getUser = (name = getTemplateName()) => ({ name })

// const user = getUser('Bruce');

// const admin = getUser();

// debugger;

function User(){
    this.name = 'Sebastian';

    setTimeout(function(){
        console.log(this);
    },2000);

    setTimeout(()=>{
        console.log('strzałka',this);
    },3000);
}

new User