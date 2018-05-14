import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { uploadExcelFile } from "../../actions/upload";

class UploadSheet extends Component {
    constructor(props) {
        super(props);

        this.state = { files: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        // this.setState({ files });
        this.props.uploadExcelFile(files);
    }

    render() {
        return (
            <div className="main-window__upload">
                <Dropzone className="dropzone" onDrop={this.onDrop} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                    <p>Drop your excel sheet here</p>
                    <i className="zmdi zmdi-upload zmdi-hc-2x"></i>
                </Dropzone>
            </div>
        );
    }
}

export default connect(null, { uploadExcelFile })(UploadSheet);