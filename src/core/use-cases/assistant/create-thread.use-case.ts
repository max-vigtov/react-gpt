

export const createThreadUseCase = async () => {
	try {
		const resp = await fetch(`${ import.meta.env.VITE_GPT_API}/create-thread`, {
			method: 'POST',
		});

		const { id } = await resp.json() as { id: string };


		
		return id;
	} catch (error) {
		throw new Error('Error creating thread');
	}
}