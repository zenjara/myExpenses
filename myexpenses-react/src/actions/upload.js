import Request from "../utils/request";
import { logoutUponInvalidRefresh } from "./auth/login";
import {
    EXCEL_UPLOADING,
    EXCEL_UPLOADED
} from "./types";


export function uploadExcelFile(files) {
    return function(dispatch) {
        let formData = new FormData();
        formData.append("file", files[0]);

        dispatch({ type: EXCEL_UPLOADING });
        Request.authorizedRequest().post('/excel/upload', formData)
            .then(response => {
                dispatch({ type: EXCEL_UPLOADED });
            })
            .catch(error => {
                if(error.response) {
                    logoutUponInvalidRefresh(error.response.status, dispatch);
                }
            });
    };
}
