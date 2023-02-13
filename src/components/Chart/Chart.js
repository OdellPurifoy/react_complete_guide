import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    // Maps over dataPoints object and returns an array of just the value attrubute.
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)

    // Spread operator transforms dataPointValues array into a list of comma separated values.
    const totalValue = Math.max(...dataPointValues)

    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
        <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalValue} 
            label={dataPoint.label} 
            />
        ))}
    </div>
}

export default Chart