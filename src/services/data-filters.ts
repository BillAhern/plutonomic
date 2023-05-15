export const getUniqueItems = (data: any) => {
	const uniqueArr = Array.from(new Set(data.map((item: any) => item.name))).map((name) => {
		return data.find((item: any) => item.name === name);
	});

	return uniqueArr;
};


