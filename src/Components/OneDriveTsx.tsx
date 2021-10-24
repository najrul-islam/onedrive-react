import React from 'react';
import ReactDOM from 'react-dom';
import { GraphFileBrowser } from '@microsoft/file-browser';
import { createBrowserHistory } from 'history';

export class OneDriveTsx extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            error: {},
            isLoaded: false,
            provider: { accessToken: "", providerId: 0, providerTypeId: 0 }
        };
    }

    public render() {
        //receive message from parent window (hoxro app)
        /*window.addEventListener('message', (event) => {
            console.log("Receive On Hoxro Ondrive:  ", event);
        });*/
        return (
            <GraphFileBrowser
                getAuthenticationToken={this.getAuthenticationToken}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel} />
        );
    }
    private getAuthenticationToken() {
        const history = createBrowserHistory();
        const query_param = history.location.search;
        const access_token = new URLSearchParams(query_param).get('access_token');
        return Promise.resolve(access_token ?? "");
    }
    private getTokenFromLocalStorage() {
        //get from localStorage
        let oneDriveToken = localStorage.getItem("oneDriveToken");
        if (!oneDriveToken) {
            //set on localStorage
            // localStorage.setItem("oneDriveToken", token);
            oneDriveToken = localStorage.getItem("oneDriveToken");
        }
    }
    private onSuccess(keys: any) {
        //console.log('onSuccess', keys);
        //send message to parent window (hoxro app)
        window.parent.postMessage(keys, '*');
    }

    private onCancel(err: any) {
        //console.log('onCancel', err.message);
    }
}

ReactDOM.render(
    <OneDriveTsx />,
    document.getElementById('root')
);
