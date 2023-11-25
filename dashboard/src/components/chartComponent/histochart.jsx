import React,{useState} from 'react'
import "./histochart.css"
import Chart from 'react-google-charts'

const Histochart = (props) => {
    const data = props.props;
    const chartData = [
        ['topic','published', ],
    ...[...new Set(data.map(item => item.published.split(" ")[2]))]
        .map(uniqueSource => {
            // Find the corresponding items for each unique source
            const itemsForSource = props.props.filter(item => item.published.split(" ")[2] === uniqueSource);
            
            // Calculate aggregate values for intensity and likelihood (you can modify this based on your needs)
            const aggregatedIntensity = itemsForSource.reduce((sum, item) => sum + item.intensity, 0);
            const aggregatedTopic = itemsForSource.reduce((sum, item) => sum + item.topic, 0);
            
            return [uniqueSource,aggregatedTopic,];
        })
    ];
  return (
    <div>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
            title : "Information based on topics published in respective years",
            legend: { position: "top" },
        }}
      />
    </div>
  )
}

export default Histochart
