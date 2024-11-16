import logo from './logo.svg';
import './App.css';

//This below are react function component
function App() {

  // var sum = 5;
  var name = "Newton School";
  var num1 = 5;
  var num2 = 6;
  let obj ={

    name: "name",
    age: 18
  }

  var arr = [1, 2, 3, 4, 5]

  const fn = () => {

    console.log("gdgdgdh")
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{name}</h2>

        {/* You can write JSX using expression like this also */}
        Sum = {5+6} 
        temp = {num1 + num2}

        {/* Don't write JSX like below */}
        {/* Obj = {obj} */}
        {/* Arr = {arr} */}


        {/* You can write js code using JSX */}


        {/* Don't write JSX like {for}, {if, else} */}
        {/* {function(){}} */}

        {fn()}

        {/* You can using JSX proper write to the iteration/listen key */}
        {arr.map((item) => (

          <div>{item}</div>
        ))}
         
      

        <a
          className="App-link"
          href="https://my.newtonschool.co/dashboard"
          target="_blank"
        >
          Newton School Website
        </a>
      </header>
    </div>
  );
}

export default App;




// #II.Function Component
/*
=>Thorugtout the react you can write class is "className="App"

=>This is called JSX - JavaScript XML
function App(){

  return (
    <div></div> - return html code here..
  )
}


=>In a directly write a html code in return to any function

=>If you want to readable your html code use like below here;
const temp = "html";
function App() {
  return (
    {temp};
  );
}

=>Templating - It's a handling of html from library, framework or any kind web development
e.g laravel - PHP - bled template

=>You can print any kind of value in an DOM using variable like below;
const name = "Newton School";
function App() {
  return (

    <h2>{name}</h2> //Print the value using variable

  );
}

=>You can write JSX into the curly bracket {function}, {for}, {if, else} etc..

=>You can only call any kind of function, variable etc.. using JSX {}

=>You can write any kind of logic before the return like function logic, array, expression etc..

=>JSX it will be run to be relate from html
*/