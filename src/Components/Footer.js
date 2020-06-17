import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="blue" className="font-small">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright {" LPDLA Esports"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
