import React, { Component } from 'react';
import './App.css';
import Message from './componets/Message'
import Greet from './componets/Greet'
import Welcome from './componets/Welcome'
import Counter from './componets/Counter';
import BasicInfo from './componets/Basicinfo'
//Easy challenge
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: "Anthony Maye",
                    number: 444 - 444 - 4444,
                    dob: '04-08-1999'
                },
                {
                    name: "Naruto",
                    number: 888 - 888 - 8888,
                    dob: '02-23-1999'
                },
                {
                    name: "Ino",
                    number: 222 - 222 - 2222,
                    dob: '01-17-1990'
                },
            ]
        }
    }

    render() {
        let persons = null;

        persons = (
            <div>
                {this.state.persons.map((ele) => {
                    return <BasicInfo name={ele.name} number={ele.number} dob={ele.dob} />
                })}
            </div>
        )
        return (
            <div className="App">
                {/* VE Challenge
        <p>Name: Anthony Maye</p>
        <p>Number: 444-444-4444</p>
        <p>DOB: 04/08/1999</p> */}

                {/* <BasicInfo
            name={this.state.person.name}
            number={this.state.person.number}
            dob={this.state.person.dob} /> */}

                {persons}
            </div>
        );
    }
}



//Code along
// var peeps = [{}, { name: "bob" }, { name: "joe", heroName: "superman" }]
// function App() {
//     return (
//         <div className="App">
//             {/* <Counter /> */}
//             {/* <Message />  */}
//             {/* { peeps.map(p => (<Greet name={p.name} heroName={p.heroName} />))} */}
//             <Greet name="Anthony" heroName="Whis" />
{/* <Greet name="Anthony" number="444-4444-4444" DOB="04/08/1999" >
                <p>This is Children props</p></Greet>

            <Greet name="Lamont" number="222-222-2222" DOB="09/21/2000" >
            </Greet>

            <Greet name="Bryon" Number="888-888-8888 " DOB="04/16/2001" /> */}

{/* <Welcome name="Anthony" heroName="Whis" />

            <Welcome name="Lamont" heroName="Beerus" />

        <Welcome name="Bryon" heroName="Goku " /> */}
//         </div >
//     );
// }

export default App;
