import { useEffect, useState } from 'react';
import { list, remove } from '../services/apiService';
import {Link } from 'react-router-dom';
const Courses = ({match, history }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        list('courses', data => {
            setCourses(data);
        })
    }, []);
    const delCourses = (id) => {
        remove('courses', id, data => {
            list('courses', data => {
                setCourses(data);
            })
        })
        }
       const nextPath = (path) => {
          history.push(path);
          }

    return (
        <div className='container'>
        <h1>Courses</h1>
        <button className='full-button' onClick={() => nextPath('/courses/0')} >Add new</button>
        <table>
            <thead>
                <tr>
                    <th>Course name</th>
                    <th>Points</th>
                    <th>Edit</th>
                    <th>Delete</th>
                   
                </tr>
            </thead>
            <tbody>
                {courses.map(c => (
                <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>{c.points}</td>
                    <td><button className='button'><Link to={`/courses/${c._id}`}>Edit</Link></button></td>
                   <td><input type="button" value="Delete" onClick={()=>delCourses(c._id)}/></td> 
                   
                </tr>
                 ))}
            </tbody>
        </table>
        </div>
    );
}
export default Courses;