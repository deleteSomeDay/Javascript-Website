import styled from "styled-components";
import { BraintreeHostedFields } from 'braintree-web-react';

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;


class ProfileEdit extends React.Component {
    state = {
        clientToken: null
    }

    async componentDidMount() {
        try {
            // Get a client token for authorization from your server
            const response = await axios.get('http://localhost:8000/api/braintree/v1/getToken')
            const clientToken = response.data.clientToken

            this.setState({ clientToken })
            console.log(this.state.clientToken)
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    fetch('https://dev-luqm6uty.auth0.com/api/v2/users/${this.props.user.user_id}',
                        {
                            method: 'POST',
                            headers:
                            {
                                'Content-Type': 'application/json',
                                'authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FUkRPREE1TlRCRk5UTkdRMFUwTVRVek1qaEZPVVF3T0RkRFFUTTVOa1ZGTlRaRk56azVSZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sdXFtNnV0eS5hdXRoMC5jb20vIiwic3ViIjoidTFTcU02MVRTenFMZzJFcndGbUlyN1VkMTA2ckFKVTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWx1cW02dXR5LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTYzNjI4ODcyLCJleHAiOjE1NjM3MTUyNzIsImF6cCI6InUxU3FNNjFUU3pxTGcyRXJ3Rm1JcjdVZDEwNnJBSlUwIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.TGeP6ob-kJKaikjU9ULF5JnNK1AVSN-Fx2PbhvyBXPQWw7oflgPcWlenahP5QBIn_zMA6D8N4-RGqDiGGT5ruLrnkr5940TaxQfo8laGolJPNDteVevtLl6RIaI84o2ppNe3uJV9_BCz66LjaoqWDIo2mx7S3t5YX6zZvBNrQbpVXyQwXMuHOFWz39IMv7QHcOto0do77YHL21Ka2wBx66NVBT_bv25_t0ePuQ1kM4IP9pA32zMRN9gIJ2ZtuA58ScKzC3s_J8-C-3IlTTVKx1xvs-CEuh_FExv4Y47c5v_-oz5dyBJ0r4Hj-l7HmT8zWCH4bPkGDjFkXJYZiJMYbA"
                            },
                            body: {},
                            credentials: "include"
                        })
                }}>
                    <p>Profile Picture:</p>
                    <button onClick={(e) => { }}><Picture src={this.props.user.picture} alt={this.props.user.displayName} /> </button>

                    <p className='center-block'>Display Name:</p>
                    <input type='text' value={this.props.user.displayName} />

                    <p>Email:</p>
                    <input type='email' value={this.props.user.email} />

                    <p> Description: </p>
                    <input type='text' value='' />

                    <p>Subjects Taught:</p>

                    <p> Payment Info: </p>
                    <BraintreeHostedFields
                        className="drop-in-container"
                        options={{
                            authorization: this.state.clientToken
                        }}
                        onInstance={(instance) => (this.instance = instance)}
                    >
                        <form id="cardForm">
                            <label className="hosted-fields--label">Card Number</label>
                            <div id="card-number" className="hosted-field"></div>

                            <label className="hosted-fields--label">Expiration Date</label>
                            <div id="expiration-date" className="hosted-field"></div>

                            <label className="hosted-fields--label">CVV</label>
                            <div id="cvv" className="hosted-field"></div>

                            <label className="hosted-fields--label">Postal Code</label>
                            <div id="postal-code" className="hosted-field"></div>
                        </form>
                    </BraintreeHostedFields>

                    <input type='submit' value='Save Changes' />

                </form>
            </div>
        )
    }


}

export default ProfileEdit;