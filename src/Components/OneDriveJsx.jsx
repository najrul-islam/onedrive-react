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
        let token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InAxRzh5YnA2VGxXOVd5UnpwUmRORVVXV3F6THNBZG9HdmJBSTJhaFJWXzQiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzcvIiwiaWF0IjoxNjM0ODMwMTI4LCJuYmYiOjE2MzQ4MzAxMjgsImV4cCI6MTYzNDgzNDAyOCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZSGoyL2UyOGhVWkYvOXhNK3RxbVZ5N1orZiszMFlrYnFSN1pBYzVHTzZSRHRTd0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlYW0iLCJnaXZlbl9uYW1lIjoiU3VwcG9ydCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy4yMTQuMjE5LjE4IiwibmFtZSI6IkhveHJvIExNUyIsIm9pZCI6IjhkYzRhMjI2LTA2NGYtNGNmYy05MDYzLWI2OWQ4MTZkMTYyMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzN0ZGRTlGOEFEMkM2IiwicmgiOiIwLkFTRUFlbUJ4ZXkyNHJreWtLRkRpSURYMGQ3WElpOTc1MmJGSXFLMjNTTnB5VUdRaEFBay4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgZW1haWwgRmlsZXMuUmVhZFdyaXRlLkFsbCIsInN1YiI6IlpDUjRwaXFtSDVzYXgwc0VYR2ljdktZUUtnemNGdWMxcG4wdHRjZ1hJYU0iLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI3YjcxNjA3YS1iODJkLTRjYWUtYTQyOC01MGUyMjAzNWY0NzciLCJ1bmlxdWVfbmFtZSI6InN1cHBvcnRAaG94cm8uY29tIiwidXBuIjoic3VwcG9ydEBob3hyby5jb20iLCJ1dGkiOiJBbTBpQVduR2trQ2ZmeldNMVlzaUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IldUTjc2MUoxV3YtV2Z0enoyc08yYWxnaW01NnVGajVLWE4yaDM0SkhZbFUifSwieG1zX3RjZHQiOjE0ODcxODk3NjJ9.G5PrtLWKX3jYFMG55POWoRRkvAa2bbajOmiqLqm-uma_z-PDijjtFmkMqLV-lM_URGAI130S5vQN6WTRB0bdSyIQfpPL-v0lZZV8IKrkDW2S9HML4rLwblau3NJGL59kyKSz6l_v-7-TtAJsNo610tiEqUXbmmhDtrEaM8kZfm85hqAf0x_gmDaLz0TBcc2qh96z22pNskqboRavlPi2aSDc7tyJNpkJcvmDY4p7353V5VD9tGUD2BwanVJxvsAWa736GK35IjcPVgusx6qud9umqsSJnHZXEineJCP1UsrHUrtLYIelydYQAe9c7nHbKehxE6hHL5x3oncw-b-O9A';
        return Promise.resolve(token);
    }
    onSuccess(keys) {
        console.log('onSuccess', keys);
    }

    onCancel(err) {
        console.log('onCancel', err.message);
    }
}