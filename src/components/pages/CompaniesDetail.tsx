import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { listBreweriesUrl } from '../data/data';
import { Company } from '../misc/type';
import useFetch from '../hook/useFetch';

export default function CompaniesDetail() {
    const { companyId } = useParams();
    console.log(`${listBreweriesUrl}/${companyId}`);
    const url = `${listBreweriesUrl}/${companyId}`;
    const { data, loading, error } = useFetch<Company>(url);

    if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }
     
  return (
    <div>
        <h1 id="h1">{data?.name}</h1>
        { !data ?
                <div>
                    Not found
                </div>
                :
               <div> 

                <p id='country-city-street'>{data?.country} {data?.city} {data?.address_1}</p>
                
                <p id='postal-code'>Postal Code: {data?.postal_code}</p>

                   { !data.phone ?
                  <div>
                    Tel Not found
                  </div>
                  :
                  <div>
                    <p id='tel'>Tel: {data?.phone}</p>
                  </div>
                }

                <div id ="link-company">
                { !data.website_url ?
                  <div>
                    Website Not found
                  </div>
                  :
                  <div>
                    <Link to={data.website_url}  className='company-link' target="_blank" rel="noopener noreferrer">
                    Website: {data.website_url}
                  </Link>
                    
                  </div>
                }
                </div>
                </div>
            }
    </div>
  )
}



