function reqListener() {
    const countryArr = JSON.parse( this.responseText );
    console.log( countryArr )
    
    console.log("COUNTRIES FROM ASIA REGION")
    countryArr.filter( country => {
        if ( country.region === 'Asia' ) {
            console.log( `${country.name.common}:`, country.region )
            return country
        }
    } )

    console.log( "COUNTRIES WITH POPULATION LESS THAN 2LAKS" )
    
    countryArr.filter( country =>{
        if ( country.population < 200000 ) {
            console.log( `${country.name.common}:`, country.population )
            return country
        }
    } )

    console.log( "NAME, CAPITAL, FLAG, USING FOREACH METHOD" )
    
    countryArr.forEach( country => {
        const { name, capital, flag } = country
        console.log( `Name:${name.common}, \nCapital:${capital}, \nFlag:${flag}` )
        return country
    } )
    
    console.log( "POPULATION OF COUNTRIES USING REDUCE METHOD" )
    
    const totalPopulation = countryArr.reduce( ( accumulator, country ) => {
        return accumulator + country.population
    },0 )
    
    console.log( `Total Population:${totalPopulation}` )
    
    console.log( "COUNTRY THAT USES US DOLLARS AS CURRENCY" )
    
    
    countryArr.forEach( country => {
        let currency = country.currencies
        if ( currency && Object.keys( currency ).includes( 'USD' ) ) {
            console.log(`Country_Name:${country.name.common}`)  
        } return country;
    })




  
    














}       

const req = new XMLHttpRequest();
req.addEventListener( "load", reqListener );
req.open( "GET", "https://restcountries.com/v3.1/all" );
req.send();
