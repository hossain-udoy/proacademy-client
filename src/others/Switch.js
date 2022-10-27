import React from 'react';
import classNames from 'classnames';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useContext, useState } from 'react';

const Switch = () => {
    const [selected, setSelected] = useState(true);
    const { setTheme } = useContext(AuthContext);
    const { setText } = useContext(AuthContext);
    return (
        <div className='flex items-center'>
            <div
                onClick={() => setSelected(!selected)}
                className={classNames('flex w-16 bg-gray-500 mr-2 rounded-full transition-all duration-500',
                    {
                        'bg-green-500 ': selected,
                    }

                )}
            >
                <span
                    className={classNames('w-6 h-6  bg-white rounded-full transition-all duration-500 shadow-xl',
                        {
                            'ml-10': selected,
                        }
                    )}
                />
            </div>
            <div>{selected ? <>{setTheme("bg-white")}{setText(" text-black")}</> : <>{setTheme("bg-black text-white")}{setText("text-white ")}</>}</div>


            <div className='text-black font-semibold '>{selected ? "Light" : <div className='text-white'>Dark</div>}</div>

        </div>
    );
};

export default Switch;

