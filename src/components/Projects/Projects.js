import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/6NeUi-ZJNqMOcvJKdWA-7HHAGuMJ-lPydJ5vuj-WmesJQmOLoFRyiWzp6p9abY3GwhgY=w480-h960-rw"
              isBlog={false}
              title="Loud"
              description="Loud is an Indian chat application built for privacy, and messages are end-to-end encrypted. And your contact details will not be shown in the application or shared with any third parties. With unique features Chat with translator, Alarm, Freelancer, Catalogue, Minutes & Task & remainders. Below is an explanation of the features.
Chat features You can able to send messages, media, documents, and more with end-to-end encryption, and you read messages in your preferred languages with AI features*.."
              ghLink="https://play.google.com/store/apps/details?id=com.loudapp.app&pcampaignid=web_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/246x0w.webp 246w, https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/217x0w.webp 217w, https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/230x0w.webp 230w, https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/492x0w.webp 492w, https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/434x0w.webp 434w, https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/cc/56/40cc5632-127a-dcb0-1df9-3ea13e488a9d/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/460x0w.webp 460w"
              isBlog={false}
              title="MegaMoves App"
              description="MegaMoves is a skill-based stock market platform where users can apply their own strategies to predict / forecast stock prices & directions using different parameters based on technical charts for a specific time slot in upcoming contests. Participants can compete with each other for substantial prizes.


Users earn points based on the performance of their predicted strategies in the live stock market so make sure you make the right predict/forecast !


To maximise your chances of success in MegaMoves, ensure that you carefully analyse market trends and make informed decisions.

"
              ghLink="https://apps.apple.com/in/app/megamoves-app/id6496355341"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://play-lh.googleusercontent.com/1LbAdUI1qC5xrxgwzqLkN2xv3Oqgd14ZEGJUffIuxyNdfL4WYyLIwQenBPu_QP3vXK_x=w480-h960-rw"
                isBlog={false}
                title="Oneflix - Unify Your Streaming"
                description="Oneflix is a streaming guide that allows you to unify your streaming services. Use one dashboard to browse content across all your major streaming services, including Disney Plus, HBO Max, Amazon Prime Video, and many others."
                ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/ledIxsVbwplrEXwvJ3vrGAUs5F1JWKjWIEe0GEORe_SRDsJ6uBBHPUzQOrrC3LowpA=w480-h960-rw"
              isBlog={false}
              title="BARFLi"
              description="People date online, or they date at the bar. Never before has there been a hybrid solution to date online while you’re at the bar until now. Oftentimes bar goers will pull out their phones when they get bored with the other people at the bar, or to avoid looking weird or awkward in a crowd of strangers. Everyone does it, and everyone semi-hates themselves for doing it because they came to the bar to mix and mingle with the people on site."
              ghLink="https://play.google.com/store/apps/details?id=com.BARFLi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/-MXs0qNnShFDrs1U1URCRY1k__A23xWzbqnTdA7Q5s98LPwyq51XbBMUtzrxYLvGCA=w480-h960-rw"
              isBlog={false}
              title="MSocial: Parenting App"
              description="Welcome to MSocial, your go-to networking app for moms nationwide! Whether you're a seasoned mother, a single mom, an expectant mother, or planning for parenthood, MSocial is your nurturing sanctuary. Join our vibrant community where you can share your motherhood journey, seek advice, offer valuable suggestions, and find unwavering support from fellow moms."
              ghLink="https://play.google.com/store/apps/details?id=com.mothering.social"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/cT-vQZ365l791WMOhRmffUFs_9f1y_XcVBM13JS46ipfx0aSuDOKJtYla08gjr1ngER3=w480-h960-rw"
              isBlog={false}
              title="ADres"
              description="ADres is the app that help service/business providers to digitalize promotional campiangs to ADres app downloader the ones who care for offers and discounted products and services"
              ghLink="https://play.google.com/store/apps/details?id=com.adres.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/4G5Rp0Uy8XE2RTG3ioSRA0v-hq-aqPJtdiRs7LMLaR_4CmoCF3NGAzJT6IuZIxO3eXX3=w480-h960-rw"
              isBlog={false}
              title="AI Signature Maker to My Name"
              description="Signature generator app is very easy to use and perfect app. You can adjust or set your signature by pinching, dragging, zooming and rotating your signature with the help of two fingers.This signature generator permits you to create a signature from text and moreover signature with paint tool.The Electronic Signature & Signature Creator app enables you to design professional-quality digital signatures in your name."
              ghLink="https://play.google.com/store/apps/details?id=com.signature.studio.stylish.name.maker.fancy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/zTcgeRmcuUJNfwd9BxkUNJhsujaN26nL2vEdvj-SF4JSKJ944RQPIskxlpzTH-cBKhGt=w480-h960-rw"
              isBlog={false}
              title="Sparks Cleaners"
              description="Keeping your home clean and organized can be a daunting task, especially with our busy schedules and demanding lifestyles. But with our cleaning app, you can take a break from cleaning and leave it to the professionals. Our app is designed to provide you with a convenient, hassle-free, and reliable cleaning experience for your residential and commercial properties."
              ghLink="https://play.google.com/store/apps/details?id=com.hdpro.sparks"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/M7E4gBrfJ7o_rN09pTrPb-XglQR490FApWavzgsBVZ_oiCUjBQbjDi9nS5B9LPeMnMw=s96-rw"
              isBlog={false}
              title="My Adventure Book"
              description="It's Adventure time! My Adventure Book is a holistic learning platform where kids star in their own adventures. They go on exciting fun-filled journeys while learning important & interesting lessons that they can apply to their schools and day-to-day lives."
              ghLink="https://play.google.com/store/apps/details?id=com.mab.my_adventure_book&hl=en_US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
