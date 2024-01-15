import React, {useState, useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddStoryPage = () => {
    return (
        <div className="App">
            <Header />
            <div className="section">
                <div className="columns">
                    <SideNav />
                    <main className="column">
                        <AddStory />
                    </main>
                </div>
            </div>
        </div>
    );
}

const AddStory = () => {
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [synopsis, setSynopsis] = useState("");
const [category, setCategory] = useState("Fiksi");
const [cover, setCover] = useState("");
const [tags, setTags] = useState("");
const [status, setStatus] = useState("Publish");
const navigate = useNavigate();

const saveStory = async(e) =>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:5000/stories',{
            title,
            author,
            synopsis,
            category,
            cover,
            tags,
            status
        });
        navigate("/story");
    } catch (error){
        console.log(error);
    }
}

const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setCover(URL.createObjectURL(selectedImage));
};

  return (
    <div className="columns mt-5 is-centered">
        <div className="column ">
            <form onSubmit={saveStory}>
                <div className="columns is-centered">
                    <div className='column'>
                        <label className="label">Title</label>
                        <div className="control">
                            <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
                        </div>
                    </div>

                    <div className='column'>
                        <label className="label">Author</label>
                        <div className="control">
                              <input type="text" className='input' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author'/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Synopsis</label>
                    <div className="control">
                          <textarea className="textarea" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} placeholder="Synopsis"></textarea>
                    </div>
                </div>
                <div className='columns is-centered'>
                    <div className='column'>
                        <div className="field">
                            <label className="label">Category</label>
                            <div className="control">
                                <div className='select is-fullwidth'>
                                      <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="Fiksi">Fiksi</option>
                                        <option value="NonFiksi">NonFiksi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <label className="label">Tags/Keyword Story</label>
                        <div className="control">
                              <input type="text" className='input' value={tags} onChange={(e) => setTags(e.target.value)} placeholder='Tags' />
                        </div>
                    </div>
                </div>
                <div className='columns is-centered'>
                    <div className='column'>
                          <div className="field">
                              <label className="label">Cover Image</label>
                              <div className="control">
                                  <input
                                      type="file"
                                      accept="image/*"
                                      onChange={handleImageChange}
                                      className="input"
                                  />
                              </div>
                          </div>
                    </div>
                    <div className='column'>
                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <div className='select is-fullwidth'>
                                      <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option value="Publish">Publish</option>
                                        <option value="Not Publish">Not Publish</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <ChapterList />
                <div className="field">
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

const ChapterList = () =>{
const [chapter, setChapter] = useState([]);

useEffect(()=>{
    getChapter();
},[]);

const getChapter = async ()=>{
    const response = await axios.get('http://localhost:5000/chapter/null');
    setChapter(response.data);
}

const deleteChapter = async(id)=>{
    try{
        await axios.delete(`http://localhost:5000/stories/chapter/${id}`);
        getChapter();
    } catch (error){
        console.log(error);
    }
}
    return(
        <div className="columns mt-10 is-centered">
            <div className="column">
                <Link to="/addChapter" className="button is-success">Add Chapter</Link>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chapter.map((chapter, index) => (

                            <tr>
                                <td>{chapter.titleChapter}</td>
                                <td>{chapter.updatedAt}</td>
                                <td>
                                    <Link to={`/updateChapter/${chapter.id}`}  className='button is-small is-info'>Update</Link>
                                    <Link onClick={() => deleteChapter(chapter.id)} className='button is-small is-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddStoryPage