import React from 'react';


const DetectedIssue = ({detectedIssue}) => {
  let genes = [];
  let medications = [];
  let medicationStatements = [];
  let observations = [];
  for (let i = 0; i < detectedIssue.implicated.length; i++) {
    if (detectedIssue.implicated[i].reference.indexOf('MedicationStatement') !== -1) {
      medicationStatements.push(detectedIssue.implicated[i].display);
    } else if (detectedIssue.implicated[i].reference.indexOf('Medication') !== -1) {
      medications.push(detectedIssue.implicated[i].display);
    } else if (detectedIssue.implicated[i].reference === 'www.genenames.org') {
      genes.push(detectedIssue.implicated[i].display);
    } else if (detectedIssue.implicated[i].reference.indexOf('Observation') !== -1) {
      observations.push(detectedIssue.implicated[i].display);
    }
  }

  return (
    <tr>
        <td>{genes.map((gene, i) => <p key={i}>{gene}</p>)}</td>
        <td>{medications.map((medication, i) => <p key={i}>{medication}</p>)}</td>
        <td>{medicationStatements.map((medicationStatement, i) => <p key={i}>{medicationStatement}</p>)}</td>
        <td>{observations.map((observation, i) => <p key={i}>{observation}</p>)}</td>

    </tr>
  );

}

export default DetectedIssue;