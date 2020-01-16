import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a full stack developer who is trying to learn everyday how things from computers, businesses, and the world work.</p>
                    <p>During my time at NYU I started as a Liberal Studies student studying philosophy. I then transitioned into the Stern School of Business to learn about... well business - then finally topped it all of with a double major in Computer Science.</p>
                    <p>I have worked at companies of all sizes within the tech and financial industry - and a shipyard one hot summer. But, now I am looking to leverage all my experiences and further develop my technical skills somewhere I can make an impact. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Product Development</h3>
                    <p>Taking ideas (be it my own or stakeholders) and coding them into reality has been my passion since I started coding.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Full Stack Development</h3>
                    <p>I have experience building websites and backend systems using Python,JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>With a CS background these concepts have been engraved in me - but I also find them fun to solve on a daily basis.</p>
                </div>
                </div>
            </div>            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
