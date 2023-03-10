import React from 'react';
import usePageName from '../utils/usePageName';

export default function InternshipRegulations() {
  usePageName('Internship Regulations');

  return (
    <iframe
      style={{ display: 'block', borderRadius: '5px' }}
      src="https://it.hcmiu.edu.vn/internship-2022-2023-sem-i/"
    ></iframe>
  );
}
