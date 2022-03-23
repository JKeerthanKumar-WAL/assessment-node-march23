import { useState, useEffect } from 'react';
import axios from 'axios';
const Hobbies = () => {
    const [hobbies, setHobbies] = useState([]);
    const getHobbies = () => {
        axios
            .get('/hobbies')
            .then((res) => {
                setHobbies(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getHobbies();
    }, []);
    const createHobby = (event) => {
        event.preventDefault();
        let doc = Date.now();
        const hobbyOb = {
            name: event.target.name.value,
            description: event.target.description.value,
            date_of_creation: doc,
        };
        axios
            .post('/hobbies', hobbyOb)
            .then((res) => {
                getHobbies();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const deleteHobby = (id) => {
        axios
            .delete('/hobbies/' + id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        getHobbies();
    };
    return (
        <div className="App-div">
            <h1>Hobbies</h1>
            <form onSubmit={createHobby}>
                <b>Name : </b>
                <input type="text" name="name" />
                <br />
                <b>Description : </b>
                <textarea name="description"></textarea>
                <br />
                <button>
                    <b>Add Hobby</b>
                </button>
                <br />
            </form>
            {hobbies.map((val, index) => {
                return (
                    <div className="cardProduct">
                        <h2>Hobby {index + 1}</h2>
                        <b>Name : </b>
                        {val.name}
                        <br />
                        <b>Description : </b>
                        {val.description}
                        <br />
                        <b>Date of creation : </b>
                        {val.date_of_creation}
                        <br />
                        <button
                            onClick={() => {
                                deleteHobby(val._id);
                            }}
                        >
                            <b>Delete</b>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default Hobbies;
