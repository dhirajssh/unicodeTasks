class covid{

  async getRequest(){
    const response = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
      "x-rapidapi-key": "7dce663157mshcc04410744235bbp14c956jsn8d2012bff7f2"
    }
  })
    const data = await response.json()
    
    return data;
  }

}