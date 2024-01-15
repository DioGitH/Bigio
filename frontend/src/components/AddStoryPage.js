import React, {useState, useEffect} from 'react';
import Header from './Header';
import SideNav from './SideNav';
import { Link } from "react-router-dom";
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
  return (
    <div className="columns mt-5 is-centered">
        <div className="column ">
            <form action="">
                <div className="columns is-centered">
                    <div className='column'>
                        <label className="label">Title</label>
                        <div className="control">
                            <input type="text" className='input' placeholder='Title'/>
                        </div>
                    </div>

                    <div className='column'>
                        <label className="label">Author</label>
                        <div className="control">
                            <input type="text" className='input' placeholder='Author'/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Synopsis</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Synopsis"></textarea>
                    </div>
                </div>
                <div className='columns is-centered'>
                    <div className='column'>
                        <div className="field">
                            <label className="label">Category</label>
                            <div className="control">
                                <div className='select is-fullwidth'>
                                    <select>
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
                            <input type="text" className='input' placeholder='Tags' />
                        </div>
                    </div>
                </div>
                <div className='columns is-centered'>
                    <div className='column'>
                        <ImageUploadForm/>
                    </div>
                    <div className='column'>
                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <div className='select is-fullwidth'>
                                    <select>
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

const ImageUploadForm = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
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
    );
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
                                    <button className='button is-small is-info'><Link to={`/updateChapter/${chapter.id}`}>Update</Link></button>
                                    <button onClick={() => deleteChapter(chapter.id)} className='button is-small is-danger'>Delete</button>
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