import React from 'react';
import './App.css';
import Display from './components/UI/Display';
import Toolbar from './components/Navigation/ToolBar/SearchBox';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
    }
  } 
  students = [
    {

        "studentName": 'George',
        "className": ' First',
        "rollno": 1,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 78, },
            { title: 'history', teacherName: 'John', marks: 100, },
            { title: 'science', teacherName: 'Jackson', marks: 58, },
            { title: 'physics', teacherName: 'Howard', marks: 90, },
        ]
    },
    {
        "studentName": 'Jack',
        "className": ' Second',
        "rollno": 2,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 57, },
            { title: 'history', teacherName: 'John', marks: 88, },
            { title: 'science', teacherName: 'Jackson', marks: 60, },
            { title: 'physics', teacherName: 'Howard', marks: 74, },
        ]
    }, {
        "studentName": 'Cooper',
        "className": ' Third',
        "rollno": 3,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 95, },
            { title: 'history', teacherName: 'John', marks: 72, },
            { title: 'science', teacherName: 'Jackson', marks: 55, },
            { title: 'physics', teacherName: 'Howard', marks: 40, },
        ]
    },
    {
        "studentName": 'Jhansi',
        "className": ' Second',
        "rollno": 4,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 85, },
            { title: 'history', teacherName: 'John', marks: 60, },
            { title: 'science', teacherName: 'Jackson', marks: 55, },
            { title: 'physics', teacherName: 'Howard', marks: 30, },
        ]
    }, {
        "studentName": 'Missy',
        "className": ' Fourth',
        "rollno": 5,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 65, },
            { title: 'history', teacherName: 'John', marks: 32, },
            { title: 'science', teacherName: 'Jackson', marks: 43, },
            { title: 'physics', teacherName: 'Howard', marks: 20, },
        ]
    }, {
        "studentName": 'Robin',
        "className": ' Second',
        "rollno": 6,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 77, },
            { title: 'history', teacherName: 'John', marks: 88, },
            { title: 'science', teacherName: 'Jackson', marks: 69, },
            { title: 'physics', teacherName: 'Howard', marks: 50, },
        ]
    }, {
        "studentName": 'Leonard',
        "className": ' First',
        "rollno": 7,
        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 78, },
            { title: 'history', teacherName: 'John', marks: 85, },
            { title: 'science', teacherName: 'Jackson', marks: 58, },
            { title: 'physics', teacherName: 'Howard', marks: 90, },
        ]
    }, {
        "studentName": 'Missy',
        "className": ' Fourth',
        "rollno": 8,

        "subjects": [
            { title: 'maths', teacherName: 'Joseph', marks: 60, },
            { title: 'history', teacherName: 'John', marks: 35, },
            { title: 'science', teacherName: 'Jackson', marks: 40, },
            { title: 'physics', teacherName: 'Howard', marks: 70, },
        ]
    },
]

gradeRanging = [
    { max: 100, min: 90, grade: 'A' },
    { max: 90, min: 80, grade: 'B' },
    { max: 80, min: 70, grade: 'C' },
    { max: 70, min: 60, grade: 'D' },
    { max: 60, min: 0, grade: 'F' }

]


 
  // update filterText in state when user types 
  updateSearch(event) {
    this.setState({ filterText: event.target.value });
}
 
  render(){

     let filteredStudents = this.students.filter(
      (filterStudent) => {
          //if u cant find search in studentname do notreturn
          //-1 is the value that cant be found
          return filterStudent.studentName !== undefined && filterStudent.studentName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1;
      }
     
  );
  console.log(filteredStudents);
    return (
      <div>
            <Toolbar
            filterText={this.state.filterText}
            onFilter={this.updateSearch.bind(this)} />
            <Display data={filteredStudents}  details= {this.gradeRanging}/> 
      </div>
    );

  }
  
}

export default App;
