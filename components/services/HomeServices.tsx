import Link from "next/link";
import { Code } from "@styled-icons/entypo/";
import { Transform, Security } from "@styled-icons/material-twotone/";

import { ServiceStyles } from "styles/ServiceStyles";
import { Network } from "@styled-icons/zondicons/";

export default function HomeServices() {
  return (
    <ServiceStyles className='services'>
      <h1>Our Services</h1>

      <div className='cardbox'>
        <div className='card'>
          <div className='cardLeft'>
            <Code className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Software</span> Development
            </h2>
            <p>
              We develop cutting-edge, sophisticated applications that allow an
              interactive business environment, effective ecommerce space and
              simplify transactions processes, by connecting customers to
              consumers using the latest technologies.
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
        {/* Web  */}
        <div className='card'>
          <div className='cardLeft'>
            <Transform className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Digital</span> Transformation
            </h2>
            <p>
              We assist to enhance organizational competitiveness, marketing
              strategy, operational management, and provide sustainable,
              transformative business solutions
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Network */}
      <div className='cardbox'>
        <div className='card'>
          <div className='cardLeft'>
            <Security className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Penetration</span> Testing
            </h2>
            <p>
              Identify vulnerabilities and validate security defenses utilizing
              expertise to enhance your security posture, reduce your risk, and
              improve your operational efficiency..
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>

        {/* Consulting */}

        <div className='card'>
          <div className='cardLeft'>
            <Network className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Network</span> Visibility Assessment
            </h2>
            <p>
              Network Visibility Assessments provides a proactive approach to IT
              security, helping you to detect your network’s weaknesses so you
              can increase and optimize your security measures..
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </ServiceStyles>
  );
}
