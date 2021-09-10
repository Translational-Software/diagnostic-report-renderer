import React from 'react';


const Pdf = ({data}) => {

    if (!!data.entry[1] && !!data.entry[1].resource.presentedForm) {
      let binary = data.entry[1].resource.presentedForm[0].data;
      let srcString = `data:application/pdf;base64, ${binary}`;

      return (
        <iframe width="95%" height="750px"  src={srcString} type="application/pdf"></iframe>
        );
    } else {
      return (<div className="redText">Set providePDFReport to true and paste the response above to see the generated pdf here.</div>);
    }

}

export default Pdf;