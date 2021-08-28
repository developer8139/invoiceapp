import {PieChart, Pie, Tooltip} from 'recharts';
import {useEffect} from 'react';
import { GraphDiv, GraphContainer } from './Styles';



export const Graph = ({datas}) => {

    useEffect(function() {
        console.log(datas)
    })

    return (
        <GraphDiv>
            <h2 style={{color: "limegreen", fontSize: "1.9rem"}}>Graph</h2>
            <GraphContainer>
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="amount"
                        isAnimationActive={true}
                        data={datas} 
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </GraphContainer>
        </GraphDiv>
    )
}