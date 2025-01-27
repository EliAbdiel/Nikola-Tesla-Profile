import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid /> */}
                    <MDBCardImage src="/tesla_circa.jpeg"
                    alt="Avatar" className="my-5" style={{ width: '100px' }} fluid />
                  <MDBTypography tag="h5">Nikola Tesla</MDBTypography>
                  {/* <MDBCardText>Iconic</MDBCardText> */}
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCardText className="text-muted">He is Nikola Tesla.</MDBCardText>
                      <MDBCardText className="text-muted">He is Serbian-American.</MDBCardText>
                      <MDBCardText className="text-muted">He is an engineer, futurist, and inventor.</MDBCardText>
                      <MDBCardText className="text-muted">He lives in New York.</MDBCardText>
                      <MDBCardText className="text-muted">He has several awards.</MDBCardText>
                      <MDBCardText className="text-muted">He is iconic.</MDBCardText>
                      {/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol> */}
                    </MDBRow>

                    {/* <MDBTypography tag="h6">Information</MDBTypography> */}
                    <hr className="mt-0 mb-4" />
                    {/* <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow> */}

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="github me-3" size="lg" /></a>
                      <a href="https://en.wikipedia.org/wiki/Nikola_Tesla"><MDBIcon fab icon="wikipedia-w me-3" size="lg" /></a>
                      {/* <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a> */}
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}