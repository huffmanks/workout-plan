import Image from 'next/image'

import { schedule } from '../data/schedule'

// https://www.muscleandstrength.com/workouts/recommit-to-fit-2-week-plan

export default function Home() {
    return (
        <>
            <main className='p-8 max-w-4xl mx-auto'>
                <div className='grid grid-cols-4 gap-4 justify-center'>
                    {schedule.groups[0].workouts.map((workout) => (
                        <a key={workout.id} href={`https://youtu.be/${workout.id}`} className='outline-none'>
                            <Image className='object-fit aspect-vide' width={400} height={225} src={`https://img.youtube.com/vi/${workout.id}/0.jpg`} alt={workout.title} />
                            <div>{workout.title}</div>
                        </a>
                    ))}
                </div>
            </main>
        </>
    )
}
