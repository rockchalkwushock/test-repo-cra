import React from 'react';
import { Image } from 'cloudinary-react';

/*
  cloudName is a user provided (required) prop referring to their Cloudinary API Account.
  publicId is a user provided prop referring to an image in the Cloud.
*/

const TestComponent = () => (
  <Image cloudName="demo" publicId="sample" width="300" crop="scale" />
);

export default TestComponent;
