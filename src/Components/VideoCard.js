import React from 'react';
import { generateRandomTime } from '../utils/helper';

const VideoCard = ({ info }) => {
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const mt = title.split(" ");
    const dd = mt.slice(0, 12).join(" ");
  return (
    <div className='p-2 m-1 w-72'>
        <img alt="thumbnail" className="rounded-lg" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{dd}</li>
            <li className="text-sm">{channelTitle}</li>
            <li className="text-sm">{generateRandomTime()}</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-green-900">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
