import React,{useState,useEffect}from 'react'

import { Link } from 'react-router-dom'
const Subheading = () => {
    const [pData,setpData]=useState(null)
  
    const getpData=()=>{
        fetch('patent.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(pJson) {
            setpData(pJson);
            console.log(pJson);
            console.log(pData);
            
            
          });
      }
      useEffect(()=>{
        getpData()
      },[])


  return (
  <div className='overview'>
        {
        pData  &&  <div className='product_description'>
            <div className='topwrapper'>
            <div className='prodimage'><span ><img src='product_icon.jpeg'/></span></div>
            <div className='prodinfo'> <h1>Belt Conveyor Wing Pully</h1>
                <span>Country Code:{pData.patent.iso_country_code}</span>
                <span>Kind Code:{pData.patent.kind_code}</span>
                <span>Product Number:{pData.patent.number}</span>
                <p>Description:<br/>{pData.biblographic_details.abstract}</p></div>
                <div className='prize'> 
                <span>Prize:</span> 
                <span>$5,000</span>
                </div>
            </div>
            <div className='bottomlinks'>
                <span ><Link className='componentLinks' to='/overview'>Overview</Link></span>
                <span > <Link className='componentLinks' to='/discussion'>Discussions</Link></span>
                <span > <Link className='componentLinks' to='/references'>Known References</Link></span>
                <span ><Link className='componentLinks' to='/terms'>Legal Terms</Link></span>
            </div>
            
            
           
                
            </div> 
        }
    
  </div>
  );
    
        } 
 
export default Subheading;