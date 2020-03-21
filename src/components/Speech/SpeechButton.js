import React from 'react';
import Speech from 'react-speech';

export default function SpeechBtn({ content }) {
	return (
		<div>
			<Speech text={content} />
		</div>
	);
}
