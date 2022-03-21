import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {/*!!frontmatter.thumbnail && */(
            <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`}}>
              <h1 className="post-title">More about me</h1>
              <div className="post-meta">Last updated: March 21, 2022</div>
            </div>
          )}
          <div className="blog-post-content">
              <h2>Who am I?</h2>
              I'm Ian, a current sophomore at Stanford University, where I'm studying computer science. I was born and raised in Folsom, California, a small suburb of Sacramento. 
              <br>
              <h2>Why computer science?</h2>
              I first got into CS as a junior in high school. Up until that point, I'd wanted to be an astrophysicist (and I still think that's awesome), but eventually I decided to try out CS
              through a science fair that fed into Intel's International Science and Engineering Fair. I remember distinctly watching Fei-Fei Li's <a href="https://www.youtube.com/watch?v=40riCqvRoMs">TED Talk on computer vision </a>
              and being totally engrossed. From there, I tried out basic computer vision models and algorithmic programming (USA Computing Olympiad), plus a software engineering internship at Hewlett-Packard Enterprise, and now I'm
              here at Stanford studying machine learning, which I hope to do as a career.
              <br>
              There are a lot of things I love about computer science. First is the puzzle aspect. For me, computer science is solving nonlinear, unique problems in creative ways, with an end goal or behavior
              in mind but not a clear way to get there. I think some of the ways computer scientists approach these problems are really cool- take, for instance, the idea of using neural networks to model how neurons function 
              and get computers to essentially emulate the same thing is amazing, and it's crazy that it actually works. Another really cool one is reinforcement learning- basically, never having to explicitly code a 
              computer to do a task, but just rewarding it for good attempts and punishing it for bad attempts to make it learn on its own. I think it's awesome that we've found such creative ways around having to solve these problems 
              by hand, and simply make a computer do it for us. 
              <br>
              Another thing I really like is that CS is that it moves really, really fast. It's very telling that the first time a computer was able to beat a chess grandmaster (Deep Blue vs. Garry Kasparov) was in 1997 with a score of 3.5 to 2.5, 
              and in less than 2 decades, the greatest human chess players were not only unable to win, but most of the time unable to even draw in games against a <i>phone AI with a handicap</i>. (If you think chess is too easy, check out 
              <a href="https://www.youtube.com/watch?v=tfb6aEUMC04"> this video of an AI beating a pro DOTA 2 team</a>.) Another good example is the sudden appearance of essentially fully autonomous vehicles out of seemingly nowhere, 
              when just 10-20 years ago we were still writing science fiction about such things. 
              <br>
              Finally and maybe most importantly, I just like building cool things. I mean, you can't look at Boston Dynamics' lovable robot dog, Spot, or their <a href="https://www.youtube.com/watch?v=tF4DML7FIWk">humanoid robot that does parkour</a>, without a sense of awe
              that technology's advanced so far. One of my UC application essays was about how I used to watch science fiction movies as a kid- Iron Man, the Matrix, etc. - and be fascinated by the holograms, robots, and more. Those used to be just
              science fiction. And now they exist. And I can help build them. That's just awesome.
          </div>

        </article>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`