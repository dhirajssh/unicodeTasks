const response = new covid;
const ui = new UI;
var info;
var original = [];
var country_names = [];
response.getRequest()
	.then(data => {
		ui.worldDetails(data);
		ui.createTable(data);
		info = data;
		console.log(info);
		info.countries_stat.forEach((country) => {
			country_names.push(country.country_name);
			original.push(country.country_name);
		});
		console.log(country_names.sort());
		ui.showOptions(country_names);
		ui.createGraph(data,'World Stats',original);
	})
	.catch(err => {
		console.log(err);
	});

// listener for next button
document.querySelector('.next').addEventListener('click',() =>{
	ui.next(info);

});


// listener for previous button
document.querySelector('.previous').addEventListener('click',() => {
	ui.previous(info);
});

//listener for search button
document.getElementById('search').addEventListener('click', () => {
	console.log(document.getElementById('select').value);

	const div = document.querySelector('.graph');
	
	console.log(div);

	div.innerHTML = '';

	console.log(div);
	
	ui.createGraph(info,document.getElementById('select').value,original);
	
	
});