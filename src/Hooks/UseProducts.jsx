import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
        // console.log(data)
        useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
            })
        },[])
        return [data, loading]
};

export default UseProducts;