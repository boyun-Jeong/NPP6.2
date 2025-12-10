export default class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then( file => new Promise(((resolve, reject) => {
            this._initRequest();
            this._initListeners( resolve, reject, file );
            this._sendRequest( file );
        })))
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/FommMultipart/upload/image', true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
		
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'

        xhr.addEventListener('error', () => {reject(genericErrorText)});
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

			var res = JSON.stringify(response);
			console.log("res:\n" + res);
			
			if(response)
			{
				res = JSON.parse(res);
			}
			console.log("_initListeners() response :::\n" + res);
			console.log("_initListeners() response.error :::\n" + res.error);
			console.log("_initListeners() response.message :::\n" + res.message);
			console.log("_initListeners() response.url :::\n" + res.url);
			
			if(!res || res.error) {
                return reject( res && res.error ? res.message : genericErrorText );
            }

            resolve({
                default: res.url //업로드된 파일 주소
            })
        })
    }

    _sendRequest(file) {
        const data = new FormData()
        data.append('upload',file)
        this.xhr.send(data)
    }
}