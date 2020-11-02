import React from 'react';
import './Project.css'


const List = [{
    Name: "Half Girlfriend",
    Genre: "Romantic"
},
{
    Name: "Da vinci Code",
    Genre: "Thriller"
},
{
    Name: "Harry Potter",
    Genre: "Fantasy"
}];

const Displaylist = () => (
    <div className="List">
        <ul >
        {List.map(item => (
            <li key={item.Name}>
                <div>Name: {item.Name} | Genre: {item.Genre}</div>
            </li>
        ))}
        </ul>
    </div>
);

export default Displaylist;
