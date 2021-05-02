import { useEffect, useState } from 'react';
import { list, remove } from '../services/apiService';
import {Link } from 'react-router-dom';

const Students = ({match, history }) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        list('students', data => {
            setStudents(data);
        })
    }, []);
    const delStudents = (id) => {
        remove('students', id, data => {
            list('students', data => {
                setStudents(data);
            })
        })
        }
        const nextPath = (path) => {
            history.push(path);
            }
        
    return (
        <div className='container'>
        <h1>Students</h1>
        <button className='full-button' onClick={() => nextPath('/students/0')}>Add new</button>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>last Name</th>
                    <th>Year Of Birth</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                   
                </tr>
            </thead>
            <tbody>
                {students.map(c => (
                <tr key={c._id}>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
                    <td>{c.yearOfBirth}</td>
                    <td>{c.address}</td>
                    <td><button className='button'><Link to={`/students/${c._id}`}>Edit</Link></button></td>
                    <td><input type="button" value="Delete" onClick={()=>delStudents(c._id)}/></td>
                   
                </tr>
                 ))}
            </tbody>
        </table>
        </div>
    );
}
export default Students;