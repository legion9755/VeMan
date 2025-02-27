import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='h-custom'>
    
    <MDBRow className='d-flex justify-content-center align-items-center py-4'>
        <MDBCol col='12' className='text-center'>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4835d4' }}>VeMan</h1>
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>Vehicle Management System</p>
        </MDBCol>
      </MDBRow>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' className='m-5'>
          <MDBCard className='card-registration' style={{ borderRadius: '15px' }}>
            <MDBCardBody className='p-0'>
              <MDBRow>
                {/* Left Column: Vehicle Details */}
                <MDBCol md='6' className='p-5 bg-white'>
                  <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>Vehicle Details</h3>

                  <MDBInput wrapperClass='mb-4' label='Vehicle Make' size='lg' id='vehicleMake' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Vehicle Model' size='lg' id='vehicleModel' type='text' />
                  <MDBInput wrapperClass='mb-4' label='License Plate Number' size='lg' id='licensePlate' type='text' />
                </MDBCol>

                {/* Right Column: User Details */}
                <MDBCol md='6' className='p-5' style={{ backgroundColor: '#6a11cb', color: '#ffffff' }}>
                  <h3 className="fw-normal mb-5">User Details</h3>

                  <MDBRow>
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='First Name' size='lg' id='firstName' type='text' />
                    </MDBCol>
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Last Name' size='lg' id='lastName' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Email Address' size='lg' id='email' type='email' />
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='phoneNumber' type='text' />

                  <MDBCheckbox 
                    name='flexCheck' 
                    id='flexCheckDefault' 
                    labelClass='text-white mb-4' 
                    label='I do accept the Terms and Conditions of your site.' 
                  />

                  <MDBBtn color='light' size='lg'>Register</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;