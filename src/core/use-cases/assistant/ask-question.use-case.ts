import { QuestionResponse } from "../../../interfaces";

export const askQuestionUseCase = async ( threadId: string, question: string ) => {

	try {
		const resp = await fetch(`${ import.meta.env.VITE_GPT_API}/user-question`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ threadId, question }),
		});

		const replies = await resp.json() as QuestionResponse[];

		console.log( replies );
		
		return replies;

	} catch (error) {
		console.log( error );
		throw new Error( 'Error posting question' );
		
	}
}