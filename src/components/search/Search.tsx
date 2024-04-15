import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Company } from '../misc/type';

import { searchCompaniesUrl } from '../data/data';
// import Card from "../card/Card"
import axios from 'axios';
import { Box, Button , Card, CardActions, CardContent, Grid, Typography} from '@mui/material';

export default function SearchComponent() {

    const [query, setQuery] = useState("");
    const [companies, setCompanies] = useState<Company[]>([]);

    const handleSearch = async() => {
        const response = await axios.get(searchCompaniesUrl + query);

        setCompanies(response.data as Company[])
        console.log(companies)
    }

  return (
    <div>
        {/* <h1>Search</h1> */}
        <div>
            <div className='input-container'>
                <label htmlFor="name-field" className="input-label" >
                    Enter company name:
                </label>
                <input className="custom-input" id='name-field' value = {query}
                onChange={(event => {setQuery(event.target.value)})}
                />
                <Button onClick={handleSearch} type='button' variant="contained" className='button'>Search</Button>
            </div>

         

        </div>

        {/* <p>
           
            {query}
        </p> */}

        <div>
            
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
           {companies.map(company => { 
return  <Grid item xs={4}> 
            <Card>

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       <span id="companyName">Company name:</span>  <span id="company-name">{company.name}</span>
                    </Typography>

                    <div className='address'>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        City: {company.city} {company.state} 
                    </Typography>

                    <Typography variant="h5" component="div">
                        {company.country}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {company.street}
                    </Typography>
                    </div> {/* end .address */}
                </CardContent>

                <CardActions>
                <Link to={`/brewery/${company.id}`}>
                                                more...
                    </Link>
                </CardActions>


            </Card>
        </Grid>})}
    </Grid>
</Box>  

</div>

</div>
  )
}
