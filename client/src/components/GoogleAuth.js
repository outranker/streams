import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '417022689835-lvdirt58r13um457jdopmq33qrfhh1q3.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth