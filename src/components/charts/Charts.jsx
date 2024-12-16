import * as React from 'react';
import "./Charts.scss"
import { BsArrowRight } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="red"
                strokeWidth={3}
            />
        </g>
    );
}

const Charts = () => {
    return (
        <>

            <div className='chart__top'>
                <div className='chart__top__left__content'>
                    <div>
                        <p className='chart__top__left__content__Welcome'>Welcome back,</p>
                        <h3 className='chart__top__left__content__Mark'>Mark Johnson</h3>
                        <p className='chart__top__left__content__Glad'>
                            Glad to see you again!
                            Ask me anything.
                        </p>
                    </div>
                    <button className='chart__top__left__content__btn'>Tap to record <BsArrowRight className='chart__top__left__content__btn__icon' /></button>
                </div>
                <div className='chart__top__center__content'>
                    <div className='chart__top__center__content__group'>
                        <h3 className='chart__top__center__content__text'>Satisfaction Rate</h3>
                        <p className='chart__top__center__content__texttwo'>From all projects</p>
                    </div>
                    <GaugeContainer
                        width={200}
                        height={200}
                        startAngle={-110}
                        endAngle={110}
                        value={30}
                    >
                        <GaugeReferenceArc />
                        <GaugeValueArc />
                        <GaugePointer />
                    </GaugeContainer>
                    <div className='chart__top__center__content__box'>
                        <h3>95%</h3>
                    </div>
                </div>
                <div className='chart__top__center__content'>
                    <div className='chart__top__center__content__group'>
                        <h3 className='chart__top__center__content__text'>Satisfaction Rate</h3>
                        <p className='chart__top__center__content__texttwo'>From all projects</p>
                    </div>
                    <GaugeContainer
                        width={200}
                        height={200}
                        startAngle={-110}
                        endAngle={110}
                        value={30}
                    >
                        <GaugeReferenceArc />
                        <GaugeValueArc />
                        <GaugePointer />
                    </GaugeContainer>
                    <div className='chart__top__center__content__box'>
                        <h3>95%</h3>
                    </div>
                </div>
            </div>

            <div className='chart__bottom'>
                <div className='chart__bottom__left'>
                    <div className='chart__bottom__left__group'>
                        <h3 className='chart__bottom__left__group__sales'>Sales overview</h3>
                        <h3 className='chart__bottom__left__group__more'>(+5) more in 2021</h3>
                    </div>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true,
                            },
                        ]}
                    />
                </div>
                <div className='chart__bottom__right'>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    />
                </div>
            </div>
        </>
    )
}

export default Charts