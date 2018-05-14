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
        if(files.length) {
            this.props.uploadExcelFile(files);
        }
    }

    render() {
        return (
            <div className="main-window__upload">
                <Dropzone
                    className="dropzone"
                    onDrop={this.onDrop}
                    activeStyle={{ borderColor: '#32c787', backgroundColor: 'rgba(50, 199, 135, .1)' }}
                    rejectStyle={{ borderColor: '#FF6E40', backgroundColor: 'rgba(255, 110, 64, .1)' }}
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                >
                    {({isDragActive, isDragReject}) => {
                        if(isDragReject) {
                            return (
                                <div className="dropzone__content">
                                    <p>This file type is not allowed</p>
                                    <i className="zmdi zmdi-block zmdi-hc-2x"></i>
                                </div>
                            );
                        }

                        return (
                            <div className="dropzone__content">
                                <p>Drop your excel sheet here</p>
                                <i className="zmdi zmdi-upload zmdi-hc-2x"></i>
                            </div>
                        );
                    }}
                </Dropzone>
            </div>
        );
    }
}

export default connect(null, { uploadExcelFile })(UploadSheet);