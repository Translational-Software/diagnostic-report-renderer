import React from 'react';
import DetectedIssue from './DetectedIssue.jsx';

const DetectedIssues = ({detectedIssues}) => {

  return (
    <>
      <h2>Genes/Medications Implicated in Detected Issues</h2>
      <table id={'detectedIssues'}>
        <thead>
          <tr>
            <th>Gene(s)</th>
            <th>Medication(s)</th>
            <th>MedicationStatement(s)</th>
            <th>Observation(s)</th>
            <th>EvidenceStrength</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
      {detectedIssues.map((el, i) => <DetectedIssue detectedIssue={el} key={i}/>)}
      </tbody>
      </table>
    </>
  );

}

export default DetectedIssues;

