import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const CounterAnimation = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        animate={{ count: end }}
        onUpdate={({ count }) => setCount(Math.floor(count))}
        transition={{ duration }}
      >
        {count}
      </motion.span>
    </motion.span>
  );
};

const AchievementCard = ({ number, suffix, title, description, delay }) => (
  <InView triggerOnce>
    {({ inView, ref }) => (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className='py-8 lg:py-16 px-4 lg:px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'
      >
        <div className='space-y-8 lg:space-y-20'>
          <h2 className='text-8xl lg:text-[134px] lg:tracking-[-0.05em] font-semibold text-[#561D0A]'>
            {inView ? <CounterAnimation end={number} duration={2} /> : '0'}
            <span className='text-black'>{suffix}</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            <h3 className='text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>{title}</h3>
            <p className='text-sm lg:text-base pt-4 font-interTight'>{description}</p>
          </motion.div>
        </div>
      </motion.div>
    )}
  </InView>
);

const Achievements = () => {
  return (
    <div className='py-11 font-interTight px-2 lg:px-12'>
      <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
        <AchievementCard
          number={200}
          suffix="+"
          title="Project Completed"
          description="Over 200 successful projects completed, showcasing our extensive experience and portfolio."
          delay={0}
        />
        <AchievementCard
          number={13}
          suffix="+"
          title="Years of Experience"
          description="Over a decade of expertise in delivering high-quality solutions to our clients."
          delay={0.4}
        />
        <AchievementCard
          number={150}
          suffix="+"
          title="Happy Clients"
          description="Over 150 satisfied clients who trust our services and continue to work with us."
          delay={0.8}

        />
      </div>
    </div>
  );
};

export default Achievements;