import React from 'react';

const ReturnedMedications = ({returnedMedications}) => {

  let newReturnedMedications = [];
  returnedMedications.map(el => {
    let prealertTriggerString = '';
    let drugClassString = '';
    let isPgxRelevantString = '';
    let categoryString = '';
    let geneString = '';
    let medicationString = el.ingredient[0].itemReference.display;
    let extensions = el.extension;
    for (var i = 0; i < extensions.length; i++) {
      if (extensions[i].url === 'https://help.pgxportal.com/wiki/display/SOF/TradeNames') {
        medicationString += ` (${extensions[i].valueString})`
      }

      if (extensions[i].url === 'https://help.pgxportal.com/wiki/display/SOF/Category') {
        categoryString = extensions[i].valueString;
      }

      if (extensions[i].url === 'https://help.pgxportal.com/wiki/display/SOF/IsPgxRelevant') {
        isPgxRelevantString = extensions[i].valueBoolean.toString();
      }

      if (extensions[i].url === 'https://help.pgxportal.com/wiki/display/SOF/PrealertTrigger') {
        prealertTriggerString = extensions[i].valueBoolean.toString();
      }

      if (extensions[i].url === 'https://help.pgxportal.com/wiki/display/SOF/DrugClass') {
        drugClassString = extensions[i].valueString;
      }

      if (extensions[i].extension) {
        for (var j = 0; j < extensions[i].extension.length; j++) {
          let geneObject = extensions[i].extension[j]
          // if (geneObject.url === 'http://hl7.org/fhir/StructureDefinition/geneticsGene') {
            for (var k = 0; k < geneObject.valueCodeableConcept.coding.length; k++) {
              let gene = geneObject.valueCodeableConcept.coding[k];
              geneString += `${gene.display}, `
            }
          // }
        }
      }




    }
    newReturnedMedications.push({
      'medication': medicationString,
      'category': categoryString,
      'isPgxRelevant': isPgxRelevantString,
      'drugClass': drugClassString,
      'preAlertTrigger': prealertTriggerString,
      'genes': geneString
    });

  });

  newReturnedMedications = newReturnedMedications.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    } else if (a.category > b.category) {
      return 1;
    } else {
      if (a.medication < b.medication) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  return (
    <>
      <h1>Returned Medications (PIM table)</h1>
      <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Drug Class</th>
            <th>Medication</th>
            <th>isPgxRelevant</th>
            <th>Pre-Alert Trigger</th>
            <th>Genes</th>
          </tr>
        </thead>

      <tbody>
      {newReturnedMedications.map((el, i) => (
        <tr key={i}>
          <td><p>{el.category}</p></td>
          <td><p>{el.drugClass}</p></td>
          <td><p>{el.medication}</p></td>
          <td><p>{el.isPgxRelevant}</p></td>
          <td><p>{el.preAlertTrigger}</p></td>
          <td><p>{el.genes}</p></td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>

    </>
  );


}

export default ReturnedMedications;