import { Hero } from '../components/Home/Hero'
import { Features } from '../components/Home/Features'
import { Courses } from '../components/Home/Courses'
import { Stats } from '../components/Home/Stats'
import { Testimonials } from '../components/Home/Testimonials'
import { CTA } from '../components/Home/CTA'
import { Partners } from '../components/Home/Partners'

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