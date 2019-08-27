import styled from "styled-components";
import { BraintreeHostedFields } from 'braintree-web-react';
import FormValidator from '../formValidator'
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import '../static/css/profilepicture.css'

registerPlugin(FilePondPluginImagePreview);

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;


class ProfileEdit extends React.Component {
    static async getInitialProps() {
        var clientToken = null;
        // Get a client token for authorization from your server
        await fetch('http://localhost:3000/api/braintree/v1/getToken', { method: 'GET', credentials: 'include' })
            .then(response => response.json())
            .then(jso => { clientToken = jso.clientToken })

        return { clientToken };
    }


    constructor(props) {
        super(props);

        this.submitted = false;

        this.validator = new FormValidator
            (
                [
                   
                ]
            )
        this.state =
            {

                //payment: this.props.user.user_metadata,
                //firstName: this.props.user.family_name,
                //lastName: this.props.user.given_name,
                validation: this.validator.valid(),
                streetAddress: '',
                postalCode: '',
                city: '',
                region: ''
            };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        const req = this.instance.tokenize()
        if (validation.isValid) {
            if (!this.state.payment) {
                fetch('http://localhost:3000/api/braintree/v1/create_customer',
                    {
                        method: 'POST',
                        headers:
                        {
                            'Content-Type': 'application/json',
                        },
                        body:
                        {
                            nonce: req.nonce,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            streetAddress: this.state.streetAddress,
                            locality: this.state.city,
                            region: this.state.region,
                            postalCode: this.state.postalCode
                        }
                    }
                )
            }
            else {
                fetch('http://localhost:3000/api/braintree/v1/update_customer',
                    {
                        method: 'POST',
                        headers:
                        {
                            'Content-Type': 'application/json',
                        },
                        body:
                        {
                            nonce: req.nonce,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            streetAddress: this.state.streetAddress,
                            locality: this.state.city,
                            region: this.state.region,
                            postalCode: this.state.postalCode
                        }
                    })
            }

            var bearer = 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FUkRPREE1TlRCRk5UTkdRMFUwTVRVek1qaEZPVVF3T0RkRFFUTTVOa1ZGTlRaRk56azVSZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sdXFtNnV0eS5hdXRoMC5jb20vIiwic3ViIjoidTFTcU02MVRTenFMZzJFcndGbUlyN1VkMTA2ckFKVTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWx1cW02dXR5LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTY0MDg4NzAwLCJleHAiOjE1NjQxNzUxMDAsImF6cCI6InUxU3FNNjFUU3pxTGcyRXJ3Rm1JcjdVZDEwNnJBSlUwIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.X4yHzULntm8SLMOhIAn8oKRhCqFM7iy0DpTBS2Dz6RPwK8F0MKdYwTBPlmzzQtwRR9pt-3ewdtz5OzZRBGoD7mgzorNyKbOroGuXdYNvVutBbdWKu3cIjfEQDU_7s6N4GmT7XZzI36u_4vyRr6chCXz9RCxvupFtP0UMx5OYhIeWeuaqBh43nSjlNd5xWohkXcHTYj6XPrMH73DHN_ZhmdqPDs8j1I9XWwrjlV_Fu034DXhgka4QHu5yvpE2ftuR2VhNsyrDAU3Aep9S1DHOUUdS4eZmyx-rhLqI49U4B6D8opmxnLwGA67Iqh-HgEsx3Gbx5iZ_jkD32J2ABzY7Pg";
            var update = 'https://dev-luqm6uty.auth0.com/api/v2/users/'
            update += this.props.user.user_id
            fetch(update,
                {
                    mode: 'cors',
                    method: 'POST',
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'authorization': bearer,
                        'accept': 'application/json'
                    },
                    body: {
                        "user_metadata": {
                            'braintree': this.state.payment,
                        },    
                    },
                    credentials: "include"
                })

        }

    }

    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation

        return (

            <div className='container'>
                <h1>Edit Your Profile</h1>
                <BraintreeHostedFields
                    className="drop-in-container"
                    options={{
                        authorization: this.props.clientToken
                    }}
                    onInstance={(instance) => (this.instance = instance)}
                >
                    <form id="cardForm" onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>First Name:</label>
                            <input type='text' className="form-control" placeholder='Enter First Name Here' value={this.state.firstName} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type='text' className="form-control" placeholder='Enter Last Name Here' value={this.state.lastName} onChange={this.handleChange} />
                        </div>

                        <label className="hosted-fields--label">Card Number</label>
                        <div id="card-number" className="hosted-field"></div>

                        <div className="form-group">
                            <label>Street Number:</label>
                            <input type='text' className="form-control" placeholder='11111 xxxxx' value={this.state.streetAddress} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input type='text' className="form-control" placeholder='City' value={this.state.city} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type='text' className="form-control" placeholder='State: ie. Maine' value={this.state.region} onChange={this.handleChange} />
                        </div>

                        <label className="hosted-fields--label">Postal Code</label>
                        <div id="postal-code" className="hosted-field"></div>

                        <label className="hosted-fields--label">Expiration Date</label>
                        <div id="expiration-date" className="hosted-field"></div>

                        <label className="hosted-fields--label">CVV</label>
                        <div id="cvv" className="hosted-field"></div>

                        <input className="btn btn-dark" type='submit' value='Save Changes' />
                    </form>
                </BraintreeHostedFields>
            </div>

        );
    }


}

export default ProfileEdit;