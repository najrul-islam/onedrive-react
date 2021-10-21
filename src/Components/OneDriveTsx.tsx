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
        let token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6ImF6MkZZTU1acjk3eDRPb2xuVW9VbG1OSlMzMjVvZHk4MW9pbzAwckZhZDAiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzcvIiwiaWF0IjoxNjM0ODM3MzI2LCJuYmYiOjE2MzQ4MzczMjYsImV4cCI6MTYzNDg0MTIyNiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZTkF2Y0dWZkxsRzNibnVuV21tN3o2dStKK3BpVnJPK0dTVk1teVc4enFEQ2pnTUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlYW0iLCJnaXZlbl9uYW1lIjoiU3VwcG9ydCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy4yMTQuMjE5LjE4IiwibmFtZSI6IkhveHJvIExNUyIsIm9pZCI6IjhkYzRhMjI2LTA2NGYtNGNmYy05MDYzLWI2OWQ4MTZkMTYyMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzN0ZGRTlGOEFEMkM2IiwicmgiOiIwLkFTRUFlbUJ4ZXkyNHJreWtLRkRpSURYMGQ3WElpOTc1MmJGSXFLMjNTTnB5VUdRaEFBay4iLCJzY3AiOiJGaWxlcy5SZWFkV3JpdGUuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6IlpDUjRwaXFtSDVzYXgwc0VYR2ljdktZUUtnemNGdWMxcG4wdHRjZ1hJYU0iLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI3YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzciLCJ1bmlxdWVfbmFtZSI6InN1cHBvcnRAaG94cm8uY29tIiwidXBuIjoic3VwcG9ydEBob3hyby5jb20iLCJ1dGkiOiJ3bGRpRG1odHVrYXJYbFFMczZZQkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IldUTjc2MUoxV3YtV2Z0enoyc08yYWxnaW01NnVGajVLWE4yaDM0SkhZbFUifSwieG1zX3RjZHQiOjE0ODcxODk3NjJ9.ZLLz0l6L45kC7chLw_02nUkLdSyDwUS0LM1gUu0S_FE4opV84UqZ8PIUyrbnD52-gDvrpkGda5AsAeZ4DloigOu9WY71slqOaXvtnHDxCz6qHLeF5BVB0Uw67Ns_Rw1LWlOMGeuVBQ_UsikAtrg57M4pdsLB_is7wGpy-D_g3Vd_WkUQgDVDVODLweYyFyiibp8sntbbtBZckKyyopwNltRitas2UJDbuuOc-WMTD2y-RQhInqx3ldY2l4msqriA0bhYlglOdXzwfBEQpRLA5AcP1gNvmvG40zdusXaI4-kT-yFF2Nw6_IUriSCTMXRldFcA1cYskLAg-iqv19190Q';
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
