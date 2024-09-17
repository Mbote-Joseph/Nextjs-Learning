import LineChart from './line-chart';


function BarChart(){
    return <h1>Bar Chart</h1>;
}


export default function Dashboard(){
    return (
        <>
        <h1>Dashboard</h1>
        <h2>Bar Chart diagram</h2>
       { BarChart()}

        <h2>Line Chart Diagram</h2>
        {LineChart}
        </>
    )
}