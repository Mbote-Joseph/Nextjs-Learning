'use client'

import { useRouter } from 'next/navigation';


import LineChart from './line-chart';


function BarChart(){
    return <h1>Bar Chart</h1>;
}


export default function Dashboard(){
    const router = useRouter();
    return (
        <>
        <h1>Dashboard</h1>
        <h2>Bar Chart diagram</h2>
       { BarChart()}

        <h2>Line Chart Diagram</h2>
        {LineChart()}


        <button type='button' onClick={()=>router.push('/products')}>Products</button>
        </>
    )
}