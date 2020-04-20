import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
import './Display.scss';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { compare } from '../../utilities/Utilities';

class Tablee extends Component {
 
    render() {
        const { data, details } = this.props;

        return (
            <div className='rootStyle'>

                <MDBTable hover responsive>
                    {_.map(data, (item, index) => {
                        let arrayList = [];
                        return (
                            <div key={data.rollno} className='table-responsive' style={{ 'border': '1px solid white', 'margin': '10px auto', 'width': '80%', 'backgroundColor': 'white' }}>
                                <MDBTableBody>
                                    {/* <MDBTableHead>
                                        <tr> 
                                            <th> Grade</th>
                                            <th> Title</th>
                                            <th> Score</th>
                                            <th> Teacher</th>
                                            <th> Student</th>

                                        </tr>
                                    </MDBTableHead> */}
                                    {item.subjects.map(subject => {
                                        let gradeRange = details.find(grade => {
                                            return subject.marks <= grade.max && subject.marks >= grade.min ? grade : null;
                                        })
                                        let mergedObj = Object.assign({}, item, subject, gradeRange);
                                        console.log(mergedObj);
                                        arrayList.push(mergedObj);
                                        console.log('arraylist ', arrayList);
                                        if (arrayList.length === item.subjects.length) {
                                            let sorted = arrayList.sort(compare);
                                            console.log('sorted output', sorted);
                                            return (
                                                <ExpansionPanel>
                                                    <ExpansionPanelSummary expandIcon= {< ExpandMoreIcon/>}>
                                                        <tr key={subject.rollno}>
                                                            <td style={{'width': '70px','fontSize' : '20px',  'fontWeight': '400'}}>{sorted[0].grade} </td>
                                                            <td style={{ textTransform: 'capitalize' , 'width': '70px','fontSize' : '20px',  'fontWeight': '400'}} className='titleClass'> {sorted[0].title} </td>
                                                            <td style={{'width': '70px','fontSize' : '20px',  'fontWeight': '400'}} className='marksClass'> {sorted[0].marks} </td>
                                                            <td style={{'width': '70px','fontSize' : '20px',  'fontWeight': '400'}} className='teacherClass'> {sorted[0].teacherName} </td>
                                                            <td style={{'width': '70px','fontSize' : '20px',  'fontWeight': '400', 'align': 'right'}}> {sorted[0].studentName} </td>
                                                         </tr>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography className='desktopView'>
                                                            Class Name - {sorted[0].className} &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Subject - {sorted[0].title}     
                                                     </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>

                                            )}
                                           })
                                    }

                                </MDBTableBody>
                            </div>

                        )
                    }
                    )}
                </MDBTable>
            </div>

        );
    }

}

export default Tablee;