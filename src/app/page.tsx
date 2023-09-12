'use client'

import Image from 'next/image'

import { schedule } from '../data/schedule'
import { useState } from 'react'

// https://www.muscleandstrength.com/workouts/recommit-to-fit-2-week-plan

export default function Home() {
    const [isViewGrid, setIsViewGrid] = useState(true)

    const toggleView = () => {
        setIsViewGrid((prev) => !prev)
    }

    return (
        <>
            <main className='p-8 max-w-4xl mx-auto'>
                <h1 className='font-bold text-4xl md:text-6xl text-balance mb-4'>Back to the gym workout schedule</h1>
                <div className='mb-8'>
                    <div>
                        <span className='font-bold'>Type:</span> <span>{schedule.type}</span>
                    </div>
                    <div>
                        <span className='font-bold'>Level:</span> <span>{schedule.level}</span>
                    </div>
                </div>

                <h2 className='font-bold text-xl md:text-3xl mb-2'>Schedule</h2>
                <div className='mb-8'>
                    {schedule.plan.map((sked) => (
                        <div key={sked.day} className='flex flex-wrap gap-2 items-center'>
                            <div>{sked.day}:</div>
                            <div>{sked.group}</div>
                        </div>
                    ))}
                </div>

                <div className='mb-8'>
                    <div>
                        <span className='font-bold'>Sets:</span> <span>2-3</span>
                    </div>
                    <div>
                        <span className='font-bold'>Reps:</span> <span>8-10</span>
                    </div>
                    <div>
                        <span className='font-bold'>Rest:</span> <span>1-2 min</span>
                    </div>
                </div>

                <div className='mb-8'>
                    <button className='outline-none border border-white px-3 py-1.5 rounded-md text-xs tracking-widest uppercase' onClick={toggleView}>
                        Toggle View
                    </button>
                </div>
                {isViewGrid ? (
                    <div className='grid md:grid-cols-3 gap-10 justify-center'>
                        {schedule.groups[0].workouts.map((workout) => (
                            <a key={workout.id} href={`https://youtu.be/${workout.id}`} className='outline-none relative'>
                                <Image className='object-fit mb-2 rounded-md' width={400} height={400} src={`/images/${workout.slug}.jpg`} alt={workout.title} />
                                <div className='group absolute inset-0 flex items-center justify-center rounded-md bg-black/70 hover:bg-transparent focus:bg-transparent transition'>
                                    <div className='group-hover:opacity-0 group-focus:opacity-0 font-bold text-3xl md:text-lg p-2 text-balance text-center transition-opacity'>{workout.title}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className='grid md:grid-cols-2 gap-x-24 gap-y-2 items-center justify-between'>
                        {schedule.groups[0].workouts.map((workout) => (
                            <a key={workout.id} href={`https://youtu.be/${workout.id}`} className='outline-none flex gap-4 items-center justify-between'>
                                <Image className='object-fit mb-2 rounded-md' width={75} height={75} src={`/images/${workout.slug}.jpg`} alt={workout.title} />
                                <span>{workout.title}</span>
                            </a>
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}
