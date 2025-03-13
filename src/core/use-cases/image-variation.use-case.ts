
type GeneratedImage = Image | null;

interface Image {
	url: string,
	alt: string
}

export const imageVariationUseCase = async(
	orginalImage?: string,
): Promise<GeneratedImage> => {

	try {
		const resp = await fetch(`${ import.meta.env.VITE_GPT_API}/image-variation`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				},
			body: JSON.stringify({
				baseImage: orginalImage,
			})
		})

		const { url, revised_prompt: alt } = await resp.json();
		
		return { url, alt };

	} catch (error) {
		console.log(error);
		return null;	
	}
}