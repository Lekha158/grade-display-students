import studentsData from '../../constants/Constants';
import React, { useState } from 'react';
import Toolbar from '../Navigation/ToolBar/SearchBox';
import TableData from '../table/TableData';
import { calculate } from '../../utilities/Utilities';

function DisplayScreen() {

    let [filterText, setFilterText] = useState('');

    //filter
    let filteredStudents = studentsData.filter(
        (filterStudent) => {
            //if u cant find search in studentname do notreturn
            //-9 is the value that cant be found
            return filterStudent.studentName.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
        }
    );

        //update grade
        const updateData = () =>{
        let updatedStudentsData = filteredStudents.map((students) => {
            return{
                ...students,
                grade: calculate(students.subjectMarks).grade,
            }
        })

        //sort 
        updatedStudentsData.sort((a, b) => {
            let student1 = a.studentName.toLowerCase();
            let student2 = b.studentName.toLowerCase();
            let grade1 = a.grade;
            let grade2 = b.grade;
            if( grade1 === grade2){
                if( student1 > student2 ){
                    return 1;
                }
                if( student2 > student1){
                    return -1;
                }
                return 0;
            
            }
            
            if( grade1 > grade2 ){
                return 1;
            }
            if( grade2 > grade1){
                return -1;
            }
           return 0;
            
        }
        )
        return updatedStudentsData;
    }
    
    

    // update filterText in state when user types 
    const updateSearch = (event) => {
        console.log("e",event);
        setFilterText(event.target.value );
    }

    
    return (
        <div>
            <Toolbar
                filterText={filterText}
                onFilter={e => updateSearch(e)}
                 />
            <TableData data={updateData()} />
        </div>
    )

}

export default DisplayScreen;