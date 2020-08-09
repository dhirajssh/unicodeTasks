var start = 1;
var end = 11;

class UI{

  //to display the world details  
  worldDetails(data){
    let confirmed = document.getElementById('confirmed');
    confirmed.innerHTML = `<h2>${data.world_total.total_cases}<h2>`;
  
    let recovered = document.getElementById('recovered');
    recovered.innerHTML = `<h2>${data.world_total.total_recovered}<h2>`
  
    let deceased = document.getElementById('deceased');
    deceased.innerHTML = `<h2>${data.world_total.total_deaths}<h2>`
  }

  createTable(data){
    let output = '';
    let table = document.querySelector('#table1');
    for(let i=start; i<end; i++){ 

      output += `
      <tbody>
        <tr>
          <td scope="row">${i}</td>
          <td>
            ${data.countries_stat[i-1].country_name}
          </td>
          <td class="text-danger">
            ${data.countries_stat[i-1].cases}
          </td>
          <td class="text-success">
            ${data.countries_stat[i-1].total_recovered}
          </td>
          <td>
            ${data.countries_stat[i-1].deaths}
          </td>
          <td style="color: rgb(56, 95, 221);">
            ${data.countries_stat[i-1].active_cases}
          </td>
        </tr>
      </tbody>
      `;
      
    }
    table.innerHTML += output;
  }
  
  //to show alert
  showAlert(message){
    let div = document.querySelector('.alert');

    div.classList.add('bg-danger');
    div.classList.add('py-2');
    div.classList.add('px-3');

    div.textContent = message;

    setTimeout(() => {
      div.classList.remove('py-2');
      div.classList.remove('px-3');
      div.classList.remove('bg-danger');
      div.textContent = '';
    },3000);

  }

  //to display the next ten countries
  next(data){
    start+=10
    end+=10;

    if(end>=221){
      start = 211;
      end = 216;
      this.showAlert("Can't go any further");
      let table = document.querySelector('#table1');
      table.innerHTML='';
      table.innerHTML=`
      <thead>
        <tr>
          <th></th>
            <th>
              <h5>Country Name</h5>
            </th>
            <th class="text-danger">
              <h5>Confirmed</h5>
            </th>
            <th class="text-success">
              <h5>Recovered</h5>
            </th>
            <th class="text-light">
              <h5>Deceased</h5>
            </th>
            <th style="color: rgb(56, 95, 221);">
              <h5 style="font-weight: bolder;">Active</h5>
            </th>
          </tr>
      </thead>
      `;
      this.createTable(data);
      end=221
      return false;
    }

    let table = document.querySelector('#table1');
    table.innerHTML='';
    table.innerHTML=`
    <thead>
      <tr>
        <th></th>
          <th>
            <h5>Country Name</h5>
          </th>
          <th class="text-danger">
            <h5>Confirmed</h5>
          </th>
          <th class="text-success">
            <h5>Recovered</h5>
          </th>
          <th class="text-light">
            <h5>Deceased</h5>
          </th>
          <th style="color: rgb(56, 95, 221);">
            <h5 style="font-weight: bolder;">Active</h5>
          </th>
        </tr>
    </thead> 
    `;

    this.createTable(data);
  }

  //to display previous 10 countries
  previous(data){
    start-=10
    end-=10;

    if(start<0){
      start = 1;
      end = 11
      this.showAlert("Can't go any further");
      let table = document.querySelector('#table1');
      table.innerHTML='';
      table.innerHTML=`
      <thead>
        <tr>
          <th></th>
            <th>
              <h5>Country Name</h5>
            </th>
            <th class="text-danger">
              <h5>Confirmed</h5>
            </th>
            <th class="text-success">
              <h5>Recovered</h5>
            </th>
            <th class="text-light">
              <h5>Deceased</h5>
            </th>
            <th style="color: rgb(56, 95, 221);">
              <h5 style="font-weight: bolder;">Active</h5>
            </th>
          </tr>
      </thead> 
      `;
      this.createTable(data);
      return false;
    }

    let table = document.querySelector('#table1');
    table.innerHTML='';
    table.innerHTML=`
    <thead>
      <tr>
        <th></th>
          <th>
            <h5>Country Name</h5>
          </th>
          <th class="text-danger">
            <h5>Confirmed</h5>
          </th>
          <th class="text-success">
            <h5>Recovered</h5>
          </th>
          <th class="text-light">
            <h5>Deceased</h5>
          </th>
          <th style="color: rgb(56, 95, 221);">
            <h5 style="font-weight: bolder;">Active</h5>
          </th>
        </tr>
    </thead> 
    `;

    this.createTable(data);
  }

  // To show options
  showOptions(country_names){
    const select = document.getElementById('select');
    let output = '<option>World Stats</option>';
    country_names.forEach((country) => {
      output +=`<option>${country}</option>`;

    });
    select.innerHTML = output;
    console.log(select.value);
  }

  // showing graph
  createGraph(info,country,original){
    const div = document.querySelector('.graph');

    const canvas = document.createElement('canvas');

    canvas.id = "myChart";

    div.appendChild(canvas);
    console.log(div);
    

    var myChart = document.getElementById('myChart').getContext('2d');

    if(country === 'World Stats'){
      var active = tonumber(info.world_total.active_cases);
      var recovered = tonumber(info.world_total.total_recovered);
      var deceased = tonumber(info.world_total.total_deaths);
      
      const div = document.querySelector('.country_info')

      div.innerHTML = `
        <p><h4 style="font-weight:bolder;">World Stats</h4></p>
        <p class="mb-0">Total cases : ${info.world_total.total_cases}</p>
        <p class="mb-0">Recovered : ${info.world_total.total_recovered}</p>
        <p class="mb-0">Active : ${info.world_total.active_cases}</p>
        <p class="mb-3">Deceased : ${info.world_total.total_deaths}</p>
      `


    }else{
      var index = original.indexOf(country);
      console.log(index);
      console.log(info);
      var active = tonumber(info.countries_stat[index].active_cases);
      var recovered = tonumber(info.countries_stat[index].total_recovered);
      var deceased = tonumber(info.countries_stat[index].deaths);
            
      const div = document.querySelector('.country_info')

      div.innerHTML = `
        <p><h4 style="font-weight:bolder;">${info.countries_stat[index].country_name}</h4></p>
        <p class="mb-0">Total cases : ${info.countries_stat[index].cases}</p>
        <p class="mb-0">Recovered : ${info.countries_stat[index].total_recovered}</p>
        <p class="mb-0">Active : ${info.countries_stat[index].active_cases}</p>
        <p class="mb-3">Deceased : ${info.countries_stat[index].deaths}</p>
      `

    }
    
    function tonumber(str){
      let number = str.split('')
      number = number.filter( (n) => {
        if(n!==","){
          return n
        }
      });
      console.log(number.join(''));
      return number.join('');
    }

    Chart.defaults.global.defaultFontColor = '#000';

    let pieChart = new Chart(myChart, {
      type: 'pie',
      data:{
        labels:['Active', 'Recovered', 'Deceased'],
        datasets:[{
          label: `Covid Statistics of ${country}`,
          data: [
            Number(active),
            Number(recovered),
            Number(deceased)
          ],
          backgroundColor:[
            'blue',
            '#28a745',
            'red'
          ],
          borderWidth: 1,
          borderColor: '#000',
          hoverBorderWidth:2,
          hoverBorderColor:'#000'

        }]
      },
      options:{
        title:{
          display:false,
          text:`Covid Statistics of ${country}`,
          fontSize:20
        },
        layout:{
          padding:{
            left:50,
            right:50,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
  }

}