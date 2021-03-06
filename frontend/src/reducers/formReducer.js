import initialState from './initialState';
import {
  ADD_PHOTO,
  ADD_PDF,
  RESET_FORM,
  UPLOAD_REQUEST,
  UPLOAD_FAILURE,
  UPLOAD_SUCCESS,
  SET_PROP,
  UPLOAD_PROGRESS,
} from '../actions/actionTypes';

export default function reducer(state = initialState.form, action) {
  switch (action.type) {
    case ADD_PHOTO:
      const { dataURL } = action.payload;
      return {
        ...state,
        imageData: [...state.imageData, dataURL],
      };

    case ADD_PDF:
      const { file } = action.payload;
      return {
        ...state,
        imageData: [...state.imageData, file],
      };

    case RESET_FORM:
      return initialState.form;

    case UPLOAD_REQUEST:
      return {
        ...state,
        formUploadErrorMessage: '',
        isUploading: true,
        loaded: 0,
        uploadProgress: 0,
      };

    case UPLOAD_SUCCESS:
      const { uuid } = action.payload;
      return {
        ...state,
        uuid: uuid,
        isUploading: false,
      };

    case UPLOAD_FAILURE:
      return {
        ...state,
        formUploadErrorMessage: action.payload,
        isUploading: false,
      };

    case UPLOAD_PROGRESS:
      return {
        ...state,
        loaded: action.payload.loaded,
        uploadProgress: action.payload.uploadProgress,
      };

    case SET_PROP:
      const { name, value } = action.payload;
      return {
        ...state,
        surveyData: {
          ...state.surveyData,
          [name]: value,
        },
      };

    default:
      return state;
  }
}
