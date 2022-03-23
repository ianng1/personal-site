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
            <div className="post-thumbnail" style={{backgroundImage: `url('/assets/about_page.png')`}}>
              <h1 className="post-title">About Me</h1>
              <div className="post-meta">Last updated: March 21, 2022</div>
            </div>
          )}
          <div className="blog-post-content">
              <h2>Who am I?</h2>
              <p>
              I'm Ian, a current sophomore at Stanford University, where I'm studying computer science. I was born and raised in Folsom, California, a small suburb of Sacramento. 
              </p>
              <h2>Why computer science?</h2>
              <p>
              I first got into CS as a junior in high school. Up until that point, I'd wanted to be an astrophysicist (and I still think that's awesome), but eventually I decided to try out CS
              through a science fair that fed into Intel's International Science and Engineering Fair. I distinctly remember watching Fei-Fei Li's <a href="https://www.youtube.com/watch?v=40riCqvRoMs"> TED Talk on computer vision </a>
              and being totally engrossed. From there, I tried out basic computer vision models and algorithmic programming (USA Computing Olympiad), plus a software engineering internship at Hewlett-Packard Enterprise, and now I'm
              here at Stanford studying machine learning, which I hope to do as a career.
              </p>
              <p>
              There are a lot of things I love about computer science. First is the puzzle aspect. For me, computer science is solving nonlinear, unique problems in creative ways, with an end goal or behavior
              in mind but not a clear way to get there. I think some of the ways computer scientists approach these problems are really cool- take, for instance, the idea of using neural networks to model how neurons function 
              and get computers to essentially emulate the same thing is amazing, and it's crazy that it actually works. Another really cool one is reinforcement learning- basically, never having to explicitly code a 
              computer to do a task, but just rewarding it for good attempts and punishing it for bad attempts to make it learn on its own. I think it's awesome that we've found such creative ways around having to solve these problems 
              by hand, and simply make a computer do it for us.
              </p>
              
              <p>
              Another thing I really like is that CS is that it moves really, really fast. It's very telling that the first time a computer was able to beat a chess grandmaster (Deep Blue vs. Garry Kasparov) was in 1997 with a score of 3.5 to 2.5, 
              and in less than 2 decades, the greatest human chess players were not only unable to win, but most of the time unable to even draw in games against a <i>phone AI with a handicap</i>. (If you think chess is too easy, check out 
              <a href="https://www.youtube.com/watch?v=tfb6aEUMC04"> this video of an AI beating a pro DOTA 2 team</a>.) Another good example is the sudden appearance of essentially fully autonomous vehicles out of seemingly nowhere, 
              when just 10-20 years ago we were still writing science fiction about such things.
              </p>
              
              <p>
              Finally and maybe most importantly, I just like building cool things. You can't look at Boston Dynamics' lovable robot dog, Spot, or their <a href="https://www.youtube.com/watch?v=tF4DML7FIWk">humanoid robot that does parkour</a>, without a sense of awe
              that technology's advanced so far. One of my UC application essays was about how I used to watch science fiction movies as a kid- Iron Man, the Matrix, etc. - and be fascinated by the holograms, robots, and more. A lot of that used to be just
              science fiction. And now they exist. And I can help build them. That's just awesome.
              </p>
              
              <h2>What CS work have I done in the past?</h2>
              <p>
                Stanford CS classes often assign end-of-term class projects. I've done four so far, all of which can be found on my home page. They range from utilizing a suite of machine learning/statistical analysis techniques to determine a patient's risk of Alzheimers' disease
                to developing algorithms to correct inconsistencies in large language model factual beliefs. 
              </p>
              <p>
                Apart from my class curriculum, I've worked at Amazon as a software developemnt engineer over summer 2021, where I helped develop internal tools to reclassify objects in Amazon's database and expedite the process of rectifying misclassifications for full-time engineers.
                I also spent a quarter working for the Stanford Molecular Imaging Instrumentation Laboratory (MIIL) under Prof. Craig Levin, where I used generative adversarial networks (GANs) to help denoise PET scans. More on my work can be seen
                <a href="ian-ng.netlify.app/about"> here</a>.
              </p>

              <h2>What am I doing this quarter?</h2>
              <p>
                After an exhausting winter quarter (see <a href="ian-ng.netlify.app/about">here</a> for more), I'm going to take it a little easier this quarter. I'm going to be taking Convolutional Neural Networks for Visual Recognition with Fei-Fei Li, and I'm trying out
                robotics through a class and hopefully through Stanford's robotics club.
              </p>
              <p>
                In addition to that, I'm going to be conducting natural language processing research under Ph.D. student <a href="https://tiiiger.github.io/">Tianyi Zhang</a> as part of the Stanford NLP Group. We're going to be studying long-range consistency in large language
                models and how we can improve it. Interestingly enough, the underlying idea is related to the project I pursued in CS 224N (Natural Language Processing with Deep Learning), albeit with different specific use cases and most likely different approaches as well.
              </p>

              <h2>What's coming up/what am I going to explore in the future?</h2>
              <p>
                I'm excited to announce that I'll be interning at Amazon Inc. as a software development intern for the second year in a row! I'll be moving to Seattle this summer to work in their office (which looks really cool.) Apart from that, I'm not really sure!
                Depending on how my NLP project progresses, I may be pursuing that over the summer as well; I'll certainly be seeing it through into the fall and possibly beyond; the goal is to have a publishable paper by early next academic school year. I'd also
                love to get into the robotics field, or even biocomputation (a lot of my friends have convinced me that it's very interesting). Ultimately, I'm not entirely sure what subfields of computer science I find the most engaging. I'll almost certainly be taking my time to explore
                more branches in the future.
              </p>             
              
              <h2>What else do I do apart from CS?</h2>
              <p>
                These past few quarters (since college began, really) I've been pretty engrossed in CS. However, I'm planning to change that this quarter. I'm classically trained in piano and have played for the past 15 years; this quarter,
                I'm hoping to join a quartet on campus and return to practicing regularly; I'm also planning on relearning the violin and practicing to join Stanford Symphony Orchestra in the fall. In the same theme, I enjoy composing on an amateur level (you can see some of my compositions/arrangements <a href="ian-ng.netlify.app">here</a>), so 
                I'm going to take a class in composition this quarter. Apart from that, I've always wanted to do a podcast; I'm planning to join the Stanford Daily team and either write or do a podcast for them. Another hobby of mine is playing around in the makerspace- I've gotten certified to use the laser cutter, and I'm going to get cleared
                for the 3-D printer next.
              </p>
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