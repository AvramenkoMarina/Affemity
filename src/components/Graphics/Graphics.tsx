import './Graphics.css'
import type { ImplicitLabelType } from 'recharts/types/component/Label'
import { ComposedChart, Line, Bar, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'
import type { LineDot } from 'recharts/types/cartesian/Line'
import { GraphicsData } from '../../types/GraphicsData'

const data: GraphicsData[] = [
  { name: 'Week 1', fill: '#A9DEF4', value: 275, lineValue: 270 },
  { name: '', fill: '#9CC9DC', value: 400, lineValue: 330 },
  { name: '', fill: '#69A8C2', value: 525, lineValue: 425 },
  { name: '', fill: '#5190AA', value: 650, lineValue: 575 },
  { name: 'Week 4', fill: '#31728D', value: 800, lineValue: 801 },
]

type CustomDotProps = {
  cx?: number
  cy?: number
  index?: number
}

const CustomDot: React.FC<CustomDotProps> = ({ cx = 0, cy = 0, index = 0 }) => {
  const key = `dot-${index}`

  if (index === 0)
    return <circle key={key} cx={cx} cy={cy} r={12} fill="#A9DEF4" stroke="#fff" strokeWidth={5} />
  if (index === data.length - 1)
    return <circle key={key} cx={cx} cy={cy} r={12} fill="#31728D" stroke="#fff" strokeWidth={5} />
  return <circle key={key} cx={cx} cy={cy} r={0} />
}

type CustomLabelProps = {
  x?: number
  y?: number
  width?: number
  index?: number
}

const CustomLabel: React.FC<CustomLabelProps> = ({ x = 0, y = 0, width = 0, index = 0 }) => {
  const windowInnerWidth = window.innerWidth

  let labelWidth = 41
  let labelHeight = 27
  let yValueFirst = y - labelHeight - 20
  let yValueSecond = y - labelHeight - 15

  if (windowInnerWidth > 480) {
    labelWidth = 60
    labelHeight = 38
    yValueFirst = y - labelHeight - 20
    yValueSecond = y - labelHeight - 15
  }

  if (index === 0) {
    return (
      <g>
        <foreignObject
          x={x + width - labelWidth}
          y={yValueFirst}
          width={labelWidth}
          height={labelHeight}
          className="graphics__label"
        >
          <div className="graphics__label-text">You</div>
        </foreignObject>
      </g>
    )
  }

  if (index === data.length - 1)
    return (
      <g>
        <foreignObject
          x={x + width - labelWidth}
          y={yValueSecond}
          width={labelWidth}
          height={labelHeight}
          className="graphics__label"
        >
          <div className="graphics__label-text">Goal</div>
        </foreignObject>
      </g>
    )
  return <g></g>
}

type CustomXAxisLabelProps = {
  x?: number
  y?: number
  payload: { value: string }
}

const CustomXAxisLabel: React.FC<CustomXAxisLabelProps> = ({ x = 0, y = 0, payload }) => {
  return (
    <text x={x} y={y + 20} textAnchor="middle" fill="#111111" className="graphics__xaxis">
      {payload.value}
    </text>
  )
}

export const Graphics = () => {
  return (
    <div className="graphics">
      <span className="graphics__text">Take a quiz to get a personalized plan</span>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#D2CFDF" vertical={false} horizontalValues={[250, 500, 750]} />
          <Bar
            dataKey="value"
            fill="fill"
            radius={[5, 5, 5, 5]}
            label={CustomLabel as ImplicitLabelType}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: '#D2CFDF' }}
            tickLine={false}
            tick={CustomXAxisLabel as React.SVGProps<SVGTextElement>}
          />
          <Line
            type="monotone"
            dataKey="lineValue"
            stroke="#111111"
            strokeWidth={3}
            dot={CustomDot as LineDot}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
