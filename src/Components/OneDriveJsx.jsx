import React from 'react';
import ReactDOM from 'react-dom';
import { GraphFileBrowser } from '@microsoft/file-browser';

export class OneDriveJsx extends React.Component {
    render() {
        return (
            <GraphFileBrowser
                getAuthenticationToken={this.getAuthenticationToken}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel}
            />
        );
    }

    getAuthenticationToken() {
        const history = createBrowserHistory();
        const query_param = history.location.search;
        const access_token = new URLSearchParams(query_param).get('access_token');
        return Promise.resolve(access_token ?? "");
    }
    onSuccess(keys) {
        console.log('onSuccess', keys);
    }

    onCancel(err) {
        console.log('onCancel', err.message);
    }
}