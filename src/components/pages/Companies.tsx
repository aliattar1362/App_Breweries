// import { Company } from '../misc/type'
// import { listBreweriesUrl } from '../data/data'
// import useFetch from '../hook/useFetch'
// import { Link } from 'react-router-dom'
// import { Box } from '@mui/material'

// export default function Companies() {
// const{data, loading, error} =  useFetch<Company[]>(listBreweriesUrl)
// console.log(data, "company")


//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>
//   }

//   return (
//     <div>
//       {/* Companies
//       {data?.map(company => company.name)} */}
//        <h1 className='companies'>List of Companies</h1>
//       <table>
//         <thead>
//           <tr>
//             <td></td>
//             <td >Name</td>
//           </tr>
//         </thead>
//         <tbody>
              


//           {data?.map(company => {
//         return (
//         <tr>
//           <td></td>
//           <td>
//  <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           p: 1,
//           m: 1,
//           bgcolor: 'background.paper',
//           maxWidth: 300,
//           borderRadius: 1,
//         }}
//       >
    
 
     

//             <Link to={`/brewery/${company.id}`}>
//                 {company.name}
//             </Link>
//  </Box>

//           </td>
//         </tr>)})}
       
//         </tbody>
//       </table>
//     </div>
//   )
// }





import React from 'react';
import { Company } from '../misc/type';
import { listBreweriesUrl } from '../data/data';
import useFetch from '../hook/useFetch';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent } from '@mui/material';


export default function Companies() {
  const { data, loading, error } = useFetch<Company[]>(listBreweriesUrl);
  console.log(data, "company");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <Typography variant="h1" className='company-header'>List of Companies</Typography>
      <Grid container spacing={2}>
        {data?.map(company => (
          <Grid item key={company.id} xs={12} sm={6} md={4} lg={3}>
            <div className='card'>
            <Card >
              <CardContent>
                <Link to={`/brewery/${company.id}`} className='company-link'>
                  <Typography variant="h6" className='company-name'>
                    {company.name}
                  </Typography>
                  <Typography variant="body1" className='company-info'>
                    {/* Add additional company information here if needed */}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

