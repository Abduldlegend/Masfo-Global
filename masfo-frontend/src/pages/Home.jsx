import { Hero } from '../components/home/Hero'
import { Features } from '../components/home/Features'
import { Courses } from '../components/home/Courses'
import { Stats } from '../components/home/Stats'
import { Testimonials } from '../components/home/Testimonials'
import { CTA } from '../components/home/CTA'
import { Partners } from '../components/home/Partners'

export const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <Features />
            <Stats />
            <Courses />
            <Testimonials />
            <Partners />
            <CTA />
        </div>
    )
}