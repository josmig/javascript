
const getImagen = async() => {
	try{
		const api = 'OMiSzasYcs27nbVPCbtat1tuY6j2uanX';
		const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api }`);
		const {data} = await resp.json();
		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;

		document.body.append(img)
		console.log(data);
	
	} catch(error){
		//Manejo del error
		console.error(error)
	}
}

getImagen()