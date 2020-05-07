import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './TableData.scss';
import { MDBTable, MDBTableBody } from 'mdbreact';

const BasicTable = ({ data }) => {
    return (
        <div className='rootStyle'>
            <MDBTable hover responsive>
              <MDBTableBody>
                    {data.map((student) => {
                        return (
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={< ExpandMoreIcon style={{ color: 'red'}}/>}>
                                    <tr >
                                        <td className='grade'>{student.grade} </td>
                                        <td className='student'>{student.studentName} </td>
                                        <td className='teacher'>{student.teacherName} </td>

                                    </tr>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <p style={{ marginLeft: '1%'}} className='typo-content'> Class - {student.className}  &nbsp; &nbsp;</p> 
                                        <p style={{ marginLeft: '5%'}} className='typo-content'> RollNo - { student.rollno} &nbsp; &nbsp; </p> 
                                        <p style={{ marginLeft: '5%'}} className='typo-content'> Teacher - { student.teacherName} &nbsp; &nbsp; </p> 

                                       </Typography>  
                                        <Typography>
                                            <tr>
                                                <th style={{ fontSize: '16px'}} className='typo-subject'> History</th>
                                                <th style={{ fontSize: '16px'}} className='typo-subject'> Maths</th>
                                                <th style={{ fontSize: '16px'}} className='typo-subject'> Science</th>
                                                <th style={{ fontSize: '16px'}} className='typo-subject'> Physics </th>
                                            </tr>
                                            <tr >
                                                <td style={{ fontSize: '16px'}} className='typo-subject'>   {student.subjectMarks.history} </td>
                                                <td style={{ fontSize: '16px'}} className='typo-subject'>   {student.subjectMarks.maths} </td>
                                                <td style={{ fontSize: '16px'}} className='typo-subject'>   {student.subjectMarks.science} </td>
                                                <td style={{ fontSize: '16px'}} className='typo-subject'>   {student.subjectMarks.physics} </td>
                                            </tr>
                                        </Typography>        
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })
                    }
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}

export default BasicTable;