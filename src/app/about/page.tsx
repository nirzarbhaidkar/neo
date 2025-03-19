import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a marketer with experience in crafting impactful Google and Facebook ad strategies. With a keen focus on campaign optimization, bid management, and comprehensive reporting, I've consistently achieved outstanding results for diverse clients across various industries.

My journey in the digital marketing realm has been marked by a proven track record of driving successful campaigns that make a real difference. I am fueled by a passion for staying at the forefront of industry advancements and am committed to obtaining the latest certifications to offer my clients nothing but the best.

Incorporating AI into my strategies and data analytics to enhance targeting, personalize ad content, and optimize campaign performance. This innovative approach ensures that my clients achieve higher engagement, conversions, and ROI.

Let's connect if you're seeking a results-driven digital marketer who brings innovation, expertise, and a relentless pursuit of excellence. Together, we can transform your digital presence into a compelling success story.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
