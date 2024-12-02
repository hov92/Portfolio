import React from 'react'
import { Tilt } from 'react-tilt'
import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 pz-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm  as skilled SRE who's looking for a career home.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a diam neque. Phasellus id metus quis arcu consectetur hendrerit. Morbi molestie leo id lacus malesuada euismod. Fusce ut maximus urna. Vestibulum nec elementum odio. Mauris venenatis, eros ac blandit pharetra, dui sapien porta nisl, eget mattis turpis neque sed orci. Sed at accumsan purus, ut viverra magna. Sed ex nulla, tristique vitae bibendum id, bibendum id nisl. In convallis sagittis felis ut luctus. Nullam condimentum purus quam. Donec eu viverra ipsum, at tristique elit. Cras sed nunc maximus, finibus sapien fermentum, pretium orci. Duis ac ornare arcu, vitae laoreet massa. Quisque ex dui, pulvinar nec elementum in, lobortis vitae turpis.


    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")