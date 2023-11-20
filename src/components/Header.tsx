import React from 'react';


const Header = () => {
    return (
        <div style={{height:60,backgroundColor:'hotpink', textAlign:'center', display:'flex',justifyContent:'center',alignItems:"center",fontSize:30}}>

            <h2 style={{color:'chartreuse'}}>The Rick and Morty API</h2>
        </div>
    );
};

export {
    Header
}