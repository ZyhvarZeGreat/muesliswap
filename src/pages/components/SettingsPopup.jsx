import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "../../components/ui/dialog";

import './SettingsPopup.css'
import { cn } from '../../lib/utils';
const SettingsPopup = () => {
    const data1 = [
        '0', '0.1', '0.5', '1', '2', '3', '5', '10'
    ]
    const data2 = ['1', '2', '5', '10', '25', '50', '75']
    const [activetab, setActiveTab] = useState();
    const [activetabs1, setActiveTabs1] = useState([]);
    const [showBottom, setShowBottom] = useState(false)
    const toggleTab = (index) => {
        setActiveTabs(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(i => i !== index);
            } else {
                return [...prevState, index];
            }
        });
    };
    const toggleTab1 = (index) => {
        setActiveTabs1(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(i => i !== index);
            } else {
                return [...prevState, index];
            }
        });
    };


    return (
        <Dialog>

            <DialogTrigger type="button" className="sc-ktJbId mt-2 bfFreC">
                <svg
                    width="18"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        transform="translate(-11 -13)"
                        fill="none"
                        fillRule="evenodd"
                    >
                        <rect width="40" height="40" rx="12"></rect>
                        <path
                            d="M28 15h-3.18A3 3 0 0 0 22 13a3 3 0 0 0-2.82 2H12a1 1 0 0 0-1 .98V16a1 1 0 0 0 1 1h7.18A3 3 0 0 0 22 19a3 3 0 0 0 2.82-2H28a1 1 0 0 0 1-.98V16a1 1 0 0 0-.98-1H28Zm-6 2a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm6 6h-7.18A3 3 0 0 0 18 21a3 3 0 0 0-2.82 2H12a1 1 0 0 0-1 .98V24a1 1 0 0 0 1 1h3.18A3 3 0 0 0 18 27a3 3 0 0 0 2.82-2H28a1 1 0 0 0 1-.98V24a1 1 0 0 0-.98-1H28Zm-10 2a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"
                            fill="currentColor"
                        ></path>
                    </g>
                </svg>
            </DialogTrigger>


            <DialogContent className='max-w-[400px] gap-0 p-0 font-gilroy rounded-xl'>
                <div className="sc-gEvEer  sc-eqUAAy fNopIS fgprtA">
                    <h3 className="sc-gEvEer font-semibold gacCQa">Settings</h3>
                    <DialogClose>
                        <button height="auto" className="sc-gEvEer kmJqVX">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sc-gEvEer dSOvFp">
                                <path d="M1.76.34 8 6.6 14.24.33a1 1 0 0 1 1.32-.08l.1.08a1 1 0 0 1 .08 1.32l-.08.1L9.4 8l6.25 6.24a1 1 0 1 1-1.42 1.42L8 9.4l-6.24 6.25a1 1 0 0 1-1.32.08l-.1-.08a1 1 0 0 1-.08-1.32l.08-.1L6.58 8 .34 1.76A1 1 0 0 1 1.76.34Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </button>
                    </DialogClose>
                </div>
                <div className="sc-gEvEer  mt-0 dpGzXh">
                    <div className="sc-gEvEer sc-eqUAAy kArfdx fgprtA">
                        <p className="sc-gEvEer font-gilroy text-md font-semibold fjYAnh">General</p>
                        <div className="sc-gEvEer jlEBNW"></div>
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy bJEGKp fgprtA">
                        <p className="sc-gEvEer byuTlr">Show Chart in Basic View</p>
                        <label className="sc-bmzYkS cgGqnT">
                            <input type="checkbox" className="sc-eeDRCY fotkZP" defaultChecked />
                            <span className="sc-koXPp kAqvkZ"></span>
                        </label>
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy cWJXmp fgprtA">
                        <div className="sc-gEvEer cqyyPO" style={{ display: 'flex' }}>
                            Aggregator Slippage Tolerance:&nbsp;
                            <div className="sc-gEvEer hUfvjJ" style={{ display: 'inline-flex' }}>
                                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer SHRHu">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                                </svg>
                                <div className="sc-fxwrCY dGwCMf" style={{ transform: 'translate(-12px, -100%)' }}>
                                    <div className="sc-gEvEer jVsTBr">Tolerance to intermediate price change. Transactions will not be executed if the price moves by more than this amount.</div>
                                </div>
                            </div>
                        </div>

                        <ul className="sc-gEvEer sc-eqUAAy BXKIK text-[14px] fgprtA">
                            {
                                data1.map((data, i) => {
                                    return (
                                        <li key={i} onClick={() => {
                                            setActiveTab(i)
                                        }} className={cn("sc-gEvEer bg-transparent bvOxJf",
                                            activetab === i && 'bg-white'
                                        )}><span className="sc-gEvEer cOBuhz">{data}%</span></li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy cWJXmp fgprtA">
                        <div className="sc-gEvEer cqyyPO" style={{ display: 'flex' }}>
                            Show Additional Balance Modifiers:&nbsp;
                            <div className="sc-gEvEer hUfvjJ" style={{ display: 'inline-flex' }}>
                                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer SHRHu">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                                </svg>
                                <div className="sc-fxwrCY dGwCMf" style={{ transform: 'translate(-12px, -100%)' }}>
                                    <div className="sc-gEvEer jVsTBr">This allows you to not only set your current balance (MAX option), but also percentages of it, as a token field value.</div>
                                </div>
                            </div>
                        </div>
                        <ul className="sc-gEvEer sc-eqUAAy BXKIK text-[14px] fgprtA">
                            {
                                data2.map((data, i) => {
                                    return (
                                        <li key={i} onClick={() => {
                                            toggleTab1(i)
                                        }} className={cn("sc-gEvEer rounded-md bg-transparent gap-1 bMcLdB",
                                            activetabs1.includes(i) && 'bg-white'
                                        )}><span className="sc-gEvEer cOBuhz">{data}%</span></li>)
                                })
                            }

                        </ul>
                    </div>
                    <div style={{ width: '100%', height: '1px' }} className="sc-gEvEer hBdCsN"></div>
                    <div className="sc-gEvEer sc-eqUAAy kArfdx fgprtA">
                        <p className="sc-gEvEer fjYAnh">Expert</p>
                        <div className="sc-gEvEer jlEBNW"></div>
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy bJEGKp fgprtA">
                        <p className="sc-gEvEer byuTlr">Show ask &amp; bid price next to price</p>
                        <label className="sc-bmzYkS cgGqnT">
                            <input type="checkbox" className="sc-eeDRCY fotkZP" defaultChecked />
                            <span className="sc-koXPp kAqvkZ"></span>
                        </label>
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy bJEGKp fgprtA">
                        <p className="sc-gEvEer byuTlr">Default Chart Interval</p>
                        <div className="sc-gEvEer sc-eqUAAy iqGkHt fgprtA">
                            <select className="sc-kAkpmW hcFgXN">
                                <option>1H</option>
                                <option>2H</option>
                                <option>6H</option>
                                <option>12H</option>
                                <option>1D</option>
                                <option>7D</option>
                                <option>1M</option>
                            </select>
                            <div className="sc-cmaqmh eyTBTY">
                                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px' }} className="sc-gEvEer hBdCsN"></div>
                    <div className="sc-gEvEer sc-eqUAAy kArfdx fgprtA">
                        <p className="sc-gEvEer fjYAnh ">Advanced Configuration</p>
                        <div className="sc-gEvEer kgzPEy" style={{ display: 'inline-flex', height: '14px', width: '14px' }}>
                            <div className="sc-gEvEer  ldRcrG" style={{ width: '14px', height: '14px' }}>
                                <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#f1c40f">
                                    <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"></path>
                                </svg>
                            </div>
                            <div className="sc-gEvEer hPvbw" style={{ display: 'none' }}>
                                <div className="sc-gEvEer jmpziQ">
                                    <div className="sc-gEvEer jVsTBr">Be careful, these settings might have unintended consequences.</div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-gEvEer jlEBNW"></div>
                        <svg onClick={() => {
                            setShowBottom(!showBottom)
                        }} height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" className={cn("sc-gEvEer cursor-pointer iWqQhA",
                            showBottom && 'rotate-90'
                        )}>
                            <path d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    {showBottom && <div className="sc-gEvEer font-inter gLTTzK" style={{ overflow: 'hidden' }}>
                        <div className="sc-gEvEer sc-eqUAAy bJEGKp fgprtA">
                            <p className="sc-gEvEer byuTlr">Matchmaker Premium</p>
                            <label className="sc-bmzYkS cgGqnT">
                                <input type="checkbox" className="sc-eeDRCY fotkZP" />
                                <span className="sc-koXPp kAqvkZ"></span>
                            </label>
                        </div>
                        <div className="sc-gEvEer sc-eqUAAy bJEGKp fgprtA">
                            <p className="sc-gEvEer byuTlr">Allow Partial Matches with Muesliswap</p>
                            <label className="sc-bmzYkS cgGqnT">
                                <input type="checkbox" className="sc-eeDRCY fotkZP" defaultChecked />
                                <span className="sc-koXPp kAqvkZ"></span>
                            </label>
                        </div>
                    </div>}
                </div>
            </DialogContent>

        </Dialog>
    )
}

export default SettingsPopup
