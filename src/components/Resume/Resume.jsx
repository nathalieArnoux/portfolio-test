import './Resume.scss';

import React from 'react';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    // const pdfURL = `${process.end.PUBLIC_URL}/CV_Alternance.pdf`;
    const pdfURL = 'src/assets/CV_Alternance.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'CV_Alternance';
    link.click();
  };

  return (
    <button className="Resume-button" type="button" onClick={handleDownload}>
      Télécharger le pdf
    </button>
  );
};

const Resume = () => {
  return (
    <div className="Resume">
      <h2 className="Resume-title">
        This is my <span className="Resume-title_accent">resume</span>!
      </h2>
      <p className="Resume-text">
        Feel free to <span className="Resume-text_accent">download</span> it if
        need be.
      </p>
      <p className="Resume-text_small">(Download link at the bottom)</p>
      <img
        className="Resume-img"
        src="src/assets/CV_Alternance_small.png"
        alt="CV Alternance 2024"
      />
      <DownloadPDFButton />
    </div>
  );
};

export default Resume;
