import React from 'react';

const page = () => {
  return (
    <div className='flex justify-center items-center p-6 m-4 font-roboto'>
     <div>
      <h1 className='py-3 text-3xl font-bold text-center'>CONTACT DETAILS</h1>
      <div className='bg-[#FBFFE4] max-w-[700px] w-full p-6 rounded-xl'>
        <p className='mb-2'>
          <span className='text-[#3D8D7A] font-bold text-xl sm:text-2xl'>HEAD OFFICE:</span>
          <br />
          PRASHANTHI" 47-B, 4TH STREET, GOVINDASAMY NAGAR, MADIPAKKAM, CHENNAI-600091 TAMIL NADU
        </p>

        <p className='mb-2'>
          <span className='text-[#3D8D7A] font-bold text-xl sm:text-2xl'>FIELD OFFICE:</span>
          <br />
          PLOT NO.16, GANAPATHY-GANDHI NAGAR, KEELA VASTHATH CHAVADY & PO, THANJAVUR-614 904, TAMIL NADU
        </p>

        <p className='mb-2'>
          <span className='text-[#3D8D7A] font-bold text-xl sm:text-2xl'>EMAIL:</span>
          <br />
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWbvGDDKwCZSvddbWLcpHDrfJVpnBKRXQQvwxnlhtZrWsJlZTJKfVTxZSNDtpLHhVHMl'
          >
            MEIF.MOTHEREARTHINDIA@GMAIL.COM
          </a>
          <br></br>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWbvGDDKwCZSvddbWLcpHDrfJVpnBKRXQQvwxnlhtZrWsJlZTJKfVTxZSNDtpLHhVHMl'
          >
            KARANPGP@GMAIL.COM
          </a>
        </p>

        <p className='mb-2 space-x-2 flex items-center'>
          <span className='text-[#3D8D7A] font-bold text-xl sm:text-2xl'>MOB:</span>
          <p>+91 7708188109</p>
        </p>
      </div>
    </div>
    </div>
  );
};

export default page;