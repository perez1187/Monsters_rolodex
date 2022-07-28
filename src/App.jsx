import { useState, useEffect } from 'react'
import SearchBox from "./components/search-box/search-box-component"
import './App.css'
import CardList from './components/card-list/card-list-component';
//this is a new change
const App = () => {
  console.log('render')
  // [value, setvalue]
  const [searchField, setSearchField] = useState('');  // inicjujemy empty string
  // zwraca arr of two value, value that we want to store, 
  // oraz setvalue lub finction
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  // callback function i array of dependencies
  // czyli array mowi kiedy wywolac te funckjie
  // my chcemy wywolac fetch po api tylko raz
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));  
  },[]); 

  useEffect(()=> {
    const  newFilteredMonsters = monsters.filter((monster)=>{
      // zamiast monster mozemy wpisac dowolna rzecz (zmienic nizej)
      // jesli nie ma filtra (zmiany w searchu) to filtered jest rowen orginalnej array

      // inlcude() zwraca te name ktore zawieraja to co wpisalismy 
      // include nie jest case sensitive(nie rozpoznaje duzych i malych liter)
    return monster.name.toLowerCase().includes(searchField); 
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is firing');
  }, [monsters, searchField]); //jak monsters lub searchField sie zmienia, to rusz te feunkcje



  const onSearchChange = (event) =>{ // rejestruje kazda zmiane w searchbox
        // console.log(event); // pokazuje cale drzewo json z opcjami
        // console.log(event.target.value) // pokazuje to co wspiszemy
        
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);  
      }

  
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className = {'monsters-search-box'}
        placeholder={'search monsters'}
        onChangeHandler={onSearchChange}
      />   
      <CardList 
        monsters={filteredMonsters}
      />
  </div>    
  )
}

// class App extends Component {
//   constructor() { 
//     super(); 

//     this.state = 
//      {
//       monsters: [], // inicjalizujemy przed kontakem z API empty array
//       searchField: '', // zbierajac tutaj to co sie dzieje w event onChange, mamy do tego dostep z calosci
//     };
//   }
  
//   //chcemy odrazu pobrac liste z API, updajtowac state i rerendorowac ten komponent
//   componentDidMount() { // cokolwiek napiszemy w tej metodzie ruszy jak tylko zaczniemy ladowac strone
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return {monsters: users};
//           },
//           // to sie wydarzy gdy state sie udpatnie, jest to opcjonalne:
//           // () => {
//           //   console.log(this.state)
//           // }
//       ));
//   }

//   onSearchChange = (event) =>{ // rejestruje kazda zmiane w searchbox
//     // console.log(event); // pokazuje cale drzewo json z opcjami
//     console.log(event.target.value) // pokazuje to co wspiszemy
    
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(()=>{
//       return {searchField} //updajtujemy state, jesli zwracamy jedna tomozemy tak, 
//       // automatycznie zwroci key:value
//     });
//   }

//   render(){ 
//     // dzieki temu jest ardziej czytelne
//     const {monsters, searchField} = this.state; // zamiast this.state.monsters samo monsters
//     const {onSearchChange} = this; //to samo co wyzej, zamiast this.onSearchChange, samo onSearchChange

//     //filter() tak jak map iteruje po kazdym itemie w array
//     //zwraca true/false jesli warunek jest spelniony, buduje nową array --> filteredMonsters
//     let  filteredMonsters = monsters.filter((monster)=>{
//       // zamiast monster mozemy wpisac dowolna rzecz (zmienic nizej)
//       // jesli nie ma filtra (zmiany w searchu) to filtered jest rowen orginalnej array

//       // inlcude() zwraca te name ktore zawieraja to co wpisalismy 
//       // include nie jest case sensitive(nie rozpoznaje duzych i malych liter)
//       return monster.name.toLowerCase().includes(searchField); 
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         {/* w komponencie mozemy wrzucic kazde props. Dostajey sie do nich poprzez this.props */}
//         <SearchBox 
//           className = {'monsters-search-box'}
//           placeholder={'search monsters'}
//           onChangeHandler={onSearchChange}
//         />   
        
//         <CardList 
//           monsters={filteredMonsters}
//         />
//       </div>      
//     )
//   }
// }
export default App


// !!!!!***** Przyklad ze zmiana state w class


// //create class App and extends from Component
// class App extends Component {
//   constructor() { // constructor method first
//     super(); //super calling super class czyli w tym przypadku Component, super jest obowiazkowe

//     this.state = {
//       name: {
//         firstname: 'Perez',
//         lastname: 'blab'
//       },
//       company: 'SMC'  
//     };
//   }  
//   render(){ 
//     return (
//       <div>
//         <h1>Hi {this.state.name.firstname} {this.state.name.lastname}, I work {this.state.company}</h1>
//         <button onClick={()=> {  
//           // kiedy chcemy aby zmiana sie wyrendowala musimy wywolac setState
//           // setState zmienia tylko te wartosc ktora wskazemy
//           // setState jest asynchroniczne, czyli jesli btn odpala inne rzeczy,
//           // to w roznej kolejnosci sie zrobia,dlatego jesli chcemy zrobic cos z nowym state 
//           // to  wywolujemy setState jako funkcje z dwoma funkcjami, 
//           // pierwsza zmienia state, druga robi to co chcemy zrobic po zmianie state
//           this.setState( () => {
//             return {
//               name: { firstname: "Andre"},
//             }
//           }, () => { // ta druga funkcja jest opcjanalna, mozemy ja olac
//             console.log(this.state) // bez tego console.log moglo by pokazac stary state
//           }
//           );  
//         }}
//         >Change name</button>
//       </div>      
//     )
//   }
// }
// export default App
