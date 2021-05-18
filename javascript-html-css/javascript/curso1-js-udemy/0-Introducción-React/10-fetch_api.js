const api = 'OMiSzasYcs27nbVPCbtat1tuY6j2uanX';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api }`);

peticion
	.then( resp => resp.json())
	.then( ({data}) => {
		const { url } = data.images.original;
		const img  = document.createElement('img');
		img.src = url;

		document.body.append(img);
	})
.catch( console.warn)