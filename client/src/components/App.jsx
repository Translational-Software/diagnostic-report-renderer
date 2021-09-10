import React from 'react';
import data from '../data.js';
import Input from './Input.jsx';
import Pdf from './Pdf.jsx';
import ReturnedMedications from './ReturnedMedications.jsx';
import DetectedIssues from './DetectedIssues.jsx';

<<<<<<< HEAD:client/components/App.jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { entry: []},
      detectedIssues: [],
      returnedMedications: []
    };

   this.updateData = this.updateData.bind(this);
  }

  updateData (stringData) {
    let data = JSON.parse(stringData);
    let detectedIssues = [];
    let returnedMedications = [];


    data.entry.forEach((el) => {
      if (el.resource.resourceType === 'DetectedIssue') {
        detectedIssues.push(el.resource);
      }
      if (el.resource.resourceType === 'Medication') {
        returnedMedications.push(el.resource);
      }
    });

    this.setState({
      data, detectedIssues, returnedMedications
    })

  }


  render () {
    return (
      <>
      <h1>Diagnostic Report Viewer</h1>
      <div id='instructions'>Please call $process-message/diagnosticreport-provide and paste the JSON response here. Set returnMedications and returnDetectedIssues to true to see a summary of those sections in table format.</div>
        <Input updateData={this.updateData}/>

        {this.state.data.entry.length > 0 &&
          <Pdf data={this.state.data} />
        }

        {this.state.detectedIssues.length > 0 &&
          <DetectedIssues detectedIssues={this.state.detectedIssues} />
        }

        {this.state.returnedMedications.length > 0 &&
          <ReturnedMedications returnedMedications={this.state.returnedMedications} />
        }
      </>
    )
  }

}
||||||| 94f12c3:client/components/App.jsx
const App = () => (
  <div>This text is in client/components/App.jsx</div>
);
=======
const App = () => (
  <div>This text is in client/src/components/App.jsx</div>
);
>>>>>>> bbbf4285d6fcad82eff1868f14d092cf1752a582:client/src/components/App.jsx

export default App;

