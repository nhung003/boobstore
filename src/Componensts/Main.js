import {useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [bookData, setData] = useState([]);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then(res => setData(res.data.items))
    .catch(err => console.log(err))
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Hello<br/> My name nhung</h1> 
                </div>
                <div className="row2">
                    <h2>Find your book</h2> 
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container">
                {
                <Card book={bookData} />
                }
            </div>  

        </>
    )
}
export default Main;