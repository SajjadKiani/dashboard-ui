"use client"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

export default function MyLineChart ({ title }) {

    const data = [
        {
          revenue: 10400,
          subscription: 240,
        },
        {
          revenue: 14405,
          subscription: 300,
        },
        {
          revenue: 9400,
          subscription: 200,
        },
        {
          revenue: 8200,
          subscription: 278,
        },
        {
          revenue: 7000,
          subscription: 189,
        },
        {
          revenue: 9600,
          subscription: 239,
        },
        {
          revenue: 11244,
          subscription: 278,
        },
        {
          revenue: 26475,
          subscription: 189,
        },
      ]

    return (
        <div className="h-[150px]">
           <ResponsiveContainer width={'100%'} height={'100%'}>
              <LineChart data={data}>
              <CartesianGrid stroke="#f5f5f5" />                  
                  <Line type="monotone" dataKey="revenue" stroke="#000"  strokeWidth={1.5} />
                  {/* <XAxis dataKey="subscription" /> */}
                  {/* <YAxis /> */}
                  {/* <Tooltip /> */}
              </LineChart>
            <div className='flex justify-center'>
                <h1 className='font-bold text-xl'>
                  {title}
                </h1>
            </div>
          </ResponsiveContainer>
        </div>
    )
}