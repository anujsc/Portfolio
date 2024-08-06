import React from 'react';
import resume from '../../public/resume/accsresume.pdf'

function ResumeDownload() {
  return (
  <div className="find z-[999] absolute top-[46%] left-[23%] text-[2.5vh] font-light bg-[white] px-4 py-3 rounded-xl tracking-tight  text-[#116466] ">
      <a className=" " href={resume} download="public/resume/accsresume.pdf">
      Download Resume <i class="ri-download-fill"></i>
    </a>
  </div>
  );
}

export default ResumeDownload;