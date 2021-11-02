import React from 'react';
import ReactDOM from 'react-dom';
import { GraphFileBrowser } from '@microsoft/file-browser';
import { createBrowserHistory } from 'history';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DefaultButton } from 'office-ui-fabric-react/lib-es2015/Button';
import { IOneDriveItem } from '../models/onedrive.model';

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
        return (
            <GraphFileBrowser
                getAuthenticationToken={this.getAuthenticationToken}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel}
                onRenderSuccessButton={this.onRenderSuccessButton}
                onRenderCancelButton={this.onRenderCancelButton}
            />
        );
    }
    private getAuthenticationToken(): Promise<string> {
        const history = createBrowserHistory();
        const query_param = history.location.search;
        const access_token = new URLSearchParams(query_param).get('access_token');
        return Promise.resolve(access_token ?? "");
    }

    private getTokenFromLocalStorage(): void {
        //get from localStorage
        /*let oneDriveToken = localStorage.getItem("oneDriveToken");
        if (!oneDriveToken) {
            //set on localStorage
            // localStorage.setItem("oneDriveToken", token);
            oneDriveToken = localStorage.getItem("oneDriveToken");
        }*/
    }

    private onSuccess(keys: any): void {
        const newItems: IOneDriveItem[] = [];
        // console.log('onSuccess', keys);
        if (keys) {
            keys?.map((item: any) => {
                const dItem = {...item.driveItem_203};
                const newItem: IOneDriveItem = {
                    endpoint: dItem[0],
                    driveId : dItem[1],
                    itemId: dItem[2]
                };
                // console.log(item, newItem);
                newItems.push(newItem);
            });
        }
        //console.log(newItems);
        //send message to parent window (hoxro app)
        window.parent.postMessage(newItems, '*');
    }

    private onRenderSuccessButton(props: any): JSX.Element {
        return <PrimaryButton {...props} text="Copy To Matter" />
    }

    private onRenderCancelButton(props: any): JSX.Element {
        return <DefaultButton {...props} text="Discard" />
    }

    private onCancel(err: any): void {
        //console.log('onCancel', err.message);
        window.parent.postMessage([], '*');
    }
}

ReactDOM.render(
    <OneDriveTsx />,
    document.getElementById('root')
);
