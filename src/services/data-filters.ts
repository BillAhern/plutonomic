type rawCsv = {
	'Account Type': string;
	Amount: string;
	Credits: string;
	Date: string;
	Debits: string;
	Description: string;
	'Reference No.': string;
	'Transaction Type': string;
};

export const getUniqueItems = (data: rawCsv[]): any => {
	const _data = data;
	const uniqueArr = Array.from(new Set(_data.map((item) => item['Description'])));

	return uniqueArr;
};

// export const getUniqueItems = (data: any[]): any => {
// 	let uniqueArr: dataObj[] = [];
// 	data.filter((obj, index, self) => {
// 		uniqueArr.push(self.find((o) => o.Description === obj.Description));
// 	}).map((e) => console.log('getUniqueItems\n', e.Description));

// 	return uniqueArr;
// };
