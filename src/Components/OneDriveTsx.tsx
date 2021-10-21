import React from 'react';
import ReactDOM from 'react-dom';
import { GraphFileBrowser } from '@microsoft/file-browser';

export class OneDriveTsx extends React.Component {
    public render() {
        return (
            <GraphFileBrowser
                getAuthenticationToken={this.getAuthenticationToken}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel} />
        );
    }
    private getAuthenticationToken() {
        let token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InI0OWRBUnRuczVjd0lGRzB5RFhENDJaM3g5dkV0OGRVTXNoN2VsQ2UwUFUiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzcvIiwiaWF0IjoxNjM0ODQwOTI2LCJuYmYiOjE2MzQ4NDA5MjYsImV4cCI6MTYzNDg0NDgyNiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZSEE1LzZHb2xFZCtrcFhzdVV1R2k1ajN1c1RiYldLUTJKSHg4a1Y5amJtemdDNEEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlYW0iLCJnaXZlbl9uYW1lIjoiU3VwcG9ydCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy4yMTQuMjE5LjE4IiwibmFtZSI6IkhveHJvIExNUyIsIm9pZCI6IjhkYzRhMjI2LTA2NGYtNGNmYy05MDYzLWI2OWQ4MTZkMTYyMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzN0ZGRTlGOEFEMkM2IiwicmgiOiIwLkFTRUFlbUJ4ZXkyNHJreWtLRkRpSURYMGQ3WElpOTc1MmJGSXFLMjNTTnB5VUdRaEFBay4iLCJzY3AiOiJGaWxlcy5SZWFkV3JpdGUuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6IlpDUjRwaXFtSDVzYXgwc0VYR2ljdktZUUtnemNGdWMxcG4wdHRjZ1hJYU0iLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI3YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzciLCJ1bmlxdWVfbmFtZSI6InN1cHBvcnRAaG94cm8uY29tIiwidXBuIjoic3VwcG9ydEBob3hyby5jb20iLCJ1dGkiOiJuc0hUYTUtaHUwYUMwWmdXRWdBQkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IldUTjc2MUoxV3YtV2Z0enoyc08yYWxnaW01NnVGajVLWE4yaDM0SkhZbFUifSwieG1zX3RjZHQiOjE0ODcxODk3NjJ9.i8qFt2Fe3k151QV6-hlW8ti6n4uh66cEJdCQBDl3Qpcn_ErDHG4uwn5aXd98NW8mOBdo64TCqyearcjepXPeabvcJJlr-bE5O4oHAvFOUFRMTcwWt3umuXNDl56z9Hdjv3VjIhS5HtoIv-q8cjFY-_YKawlwT2sh8NgMSumDpduhc_SbCN4X3TpY8IoBc1ObR83alCNNWgSW7bFwOL35AUaHvD0R1DcX2dFPgb4QxpV77lcQ2vrASlYRyrBHJyu3pJf93ElQ9pgOpwE99s7NIF6_D0AJGqwun15N0WrUksagyj-TOMg8m-f8Idp5FLjNnZ1IWsr3B4EL4Ar5VD8Jsg';
        return Promise.resolve(token);
    }

    private onSuccess(keys: any) {
        console.log('onSuccess', keys);
    }

    private onCancel(err: any) {
        console.log('onCancel', err.message);
    }
}

ReactDOM.render(
    <OneDriveTsx />,
    document.getElementById('root')
);

// export { OneDriveTsx };
