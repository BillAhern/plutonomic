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
	const uniqueArr = Array.from(new Set(_data.map((item) => item.Description)));

	return uniqueArr;
};
