import React, { useState } from 'react';

function FileConvert(): JSX.Element {
	const [jsonData, setJsonData] = useState<any[]>([]);

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0];
		const fileReader = new FileReader();

		fileReader.onload = (event: any) => {
			const csvData = event.target.result;
			const lines = csvData.split('\n');
			const headers = lines[0].split(',');
			const json = [];

			for (let i = 1; i < lines.length; i++) {
				const data = lines[i].split(',');
				const item: any = {};

				for (let j = 0; j < headers.length; j++) {
					item[headers[j]] = data[j];
				}

				json.push(item);
			}

			setJsonData(json);
			window.sessionStorage.setItem('pluto', JSON.stringify(json));
		};

		fileReader.readAsText(file);
	};

	return (
		<div>
			<input type='file' onChange={handleFileChange} />
		</div>
	);
}

export default FileConvert;
