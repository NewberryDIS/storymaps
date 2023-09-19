import { mapUrls } from '$lib';
const nuklUrl = 'https://uploads.knightlab.com/storymapjs/f16f101e1b9e4f19898b53b294e8d1dd/';

export async function load({ params }) {
	const mapurl = nuklUrl + mapUrls[params.id].web.en + '/published.json';
	const response = await fetch(mapurl);
	const jsonFetchData = await response.json();
	return { storymapJson: jsonFetchData.storymap };
}
