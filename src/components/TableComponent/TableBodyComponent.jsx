import {ReactComponent as EditSvg} from '../../assests/edit.svg';
import {ReactComponent as DeleteSvg} from '../../assests/delete.svg';
import {ReactComponent as AddSvg} from '../../assests/add.svg';
import { useSelector } from 'react-redux/es/exports';
import './table.style.css';
import { useEffect } from 'react';


const TableBodyComponent = (props) => {       
    let tableData = useSelector((state) => state.storageSlice.data); 
    console.log(tableData);
   useEffect(() => {

   },[tableData]);
    //const tableData = getLocalStorage("existingData");

    const getTableRowData =  () =>{
        if(tableData.length > 0){
           const showTableData = (tableData.map((data,index) => {
                const statusClass = data.status === "Added" ? "add-status" : "delete-status";
                return  (<tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.date}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td className={statusClass}>{data.status}</td>
                    <td><EditSvg className="action-button" onClick={()=>props.editClick(data.id)}/> </td>
                    <td>{(data.status !== "Deleted") ? <DeleteSvg className="action-button" onClick={()=>props.deleteClick(data.id)}/> : 
                    <AddSvg className="action-button" onClick={()=>props.addClick(data.id)}/> }</td>
                 </tr>);
            }));     
        return showTableData;            
        }
        else {
            return  (<tr>
                <td className='no-data' colSpan={9}>No Data</td>
            </tr>);
        }
    }
    
    return (
        <tbody>
            {getTableRowData()}
        </tbody>
    );
}
export default TableBodyComponent;
