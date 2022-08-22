import CardComponent from '../CardComponent/CardComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableBodyComponent from './TableBodyComponent';
import { updateLocalStorageItem, getLocalStorageSingleItem} from '../../utils/utilities';
import { useEffect, useState } from 'react';
import './table.style.css';
import RegisterForm from '../../page/Register/RegisterForm';

const TableComponent = () => {
    
    const [actionType, setActionType] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState('');
    
    useEffect( ()=>{
    },[actionType]);

    const editClick = (id) => {
        setActionType('Edited');
        setShowForm(true);
        setUserData(getLocalStorageSingleItem("existingData",id));
        console.log(userData);
    }

    const closeForm = () =>{
        setShowForm(false);
    }

    const deleteClick = (id) => {
        setActionType('Deleted');
       updateLocalStorageItem(id,'status','Deleted');
    }

    const addClick = (id) => {
        setActionType('Added');
       updateLocalStorageItem(id,'status','Added');
    }

    return (        
        <CardComponent>
        {!showForm ? 
                <div className="table-content">
                <table>
                <TableHeaderComponent/>
                <TableBodyComponent editClick={editClick} deleteClick={deleteClick} addClick={addClick}/>
                </table>
                </div>
            : <RegisterForm editForm={showForm} buttonValue="Edit" userData={userData} closeForm={closeForm}/>}
         </CardComponent>
    );
}
export default TableComponent;