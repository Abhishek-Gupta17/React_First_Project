import React from 'react';

import Displaylist from './List';
import './Project.css';

class FrontPage extends React.Component {

    state = { names: ["Half Girlfriend", "300", "Fast and Furious", "Arrival", "Half", "Bantai"], searchTerm : ''};

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
      }

    searching = () => {
        document.getElementById('moviesList').innerHTML =  this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }

    render() {
        return <div>
        <h1 className="Title" >Movies Library</h1>
        <form className="Search" onSubmit= {this.searching()}>
            <input
                type="text" placeholder="Search Here" value={this.state.searchTerm} onChange = {this.editSearchTerm}
            />
            <input type="submit" value="Submit" />
        </form>
        <ul id="moviesList" className="Search"></ul>
        {/* <Displaylist /> */}
    </div>
    }
}
export default FrontPage;


{/* <div>
    <h1 className="Title" >Movies Library</h1>
    <form onSubmit="">
        <input
            type="text"
            value="Search"
        // onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
    </form>
</div> */}

{/* <div>
    <h1 className="Title" >Movies Library</h1>
    <form className="Search" onSubmit="myFunctio()">
        <input id="SearchedWord"
            type="text"  value="Search by Name" />
        <input type="submit" value="Submit" />
    </form>

    <p id="moviesList"></p>

    <script>
        var i;
        var list = [{
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

        function check(name){
            return (name == document.getElementById("SearchedWord").value);
        }    

        function myFuction(){
            document.getElementById("moviesList").innerHTML = list.find(check);
        }


        </script>

</div> */}