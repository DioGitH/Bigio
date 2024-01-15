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
const [search, setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);


useEffect(()=>{
    getStories();
},[]);

const getStories = async ()=>{
    try {
        if (search.trim() === '') {
            const response = await axios.get('http://localhost:5000/stories');
            setStories(response.data);
            setSearchResults([]);
        } else {
            const response = await axios.get(`http://localhost:5000/stories/search/${search}`);
            setSearchResults(response.data);
        }
    } catch (error) {
        console.log(error);
    }
    
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column">
            <div className="columns is-pulled-right">
                  <form onSubmit={(e) => {
                      e.preventDefault();
                      getStories(); }}>
                      <div className="column is-8">
                          <div className="field has-addons">
                              <div className="control">
                                  <input className="input" type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Cari" />
                              </div>
                              <div className="control">
                                  <button className='button is-info'>
                                      Search
                                  </button>
                              </div>
                          </div>
                      </div>
                </form>
                  <div className="column">
                      <Link to="/add" className="button is-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                          </svg>
                      </Link>
                  </div>
                <div className="column">
                    <Link to="/add" className="button is-success">Add Story</Link>
                </div>
            </div>
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
                      {searchResults.length > 0 ? (
                          searchResults.map((story, index) => (
                              <tr key={story.id}>
                                  <td>{story.title}</td>
                                  <td>{story.author}</td>
                                  <td>{story.category}</td>
                                  <td>{story.tags}</td>
                                  <td>{story.status}</td>
                                  <td>
                                      <Link to={`/updateStories/${story.id}`} className='button is-small is-info'>Edit</Link>
                                      <Link to={`/detailStories/${story.id}`} className='button is-small is-danger'>Detail</Link>
                                  </td>
                              </tr>
                          ))
                      ) : (
                          stories.map((story, index) => (
                              <tr key={story.id}>
                                  <td>{story.title}</td>
                                  <td>{story.author}</td>
                                  <td>{story.category}</td>
                                  <td>{story.tags}</td>
                                  <td>{story.status}</td>
                                  <td>
                                      <Link to={`/updateStories/${story.id}`} className='button is-small is-info'>Edit</Link>
                                      <Link to={`/detailStories/${story.id}`} className='button is-small is-danger'>Detail</Link>
                                  </td>
                              </tr>
                          ))
                      )}
                  </tbody>
            </table>
        </div>
    </div>
  )
}

export default StoryPage