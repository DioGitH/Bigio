import React, {useState, useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import axios from "axios";
import {Link} from "react-router-dom";

const StoryPage = () => {
    return (
        <div className="App">
            <Header />
            <div className="section">
                <div className="columns">
                    <SideNav />
                    <main className="column">
                        <StoryList />
                    </main>
                </div>
            </div>
        </div>
    );
}

const StoryList = () => {
const [stories, setStories] = useState([]);

useEffect(()=>{
    getStories();
},[]);

const getStories = async ()=>{
    const response = await axios.get('http://localhost:5000/stories');
    setStories(response.data);
}
  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <Link to="/add" className="button is-success">Add Story</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Writes</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stories.map((story, index) =>(
                        <tr key={story.id}>
                            <td>{story.title}</td>
                            <td>{story.author}</td>
                            <td>{story.category}</td>
                            <td>{story.tags}</td>
                            <td>{story.status}</td>
                            <td>
                                <button className='button is-small is-info'>Detail</button>
                                <button className='button is-small is-danger'>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StoryPage