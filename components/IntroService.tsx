import React from 'react';
import IntroServiceItems from './IntroServiceItems';
import { introData } from './data/introData';
import Service from './Service';
import CustomButton from './CustomButton';

const IntroService = () => {
  return (
    <div>
      {introData.map((item) => (
        <IntroServiceItems
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default IntroService;
