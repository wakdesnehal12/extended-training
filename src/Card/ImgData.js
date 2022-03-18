import { Button } from 'bootstrap';
import React from 'react';
// import {Row, Col} from 'react-bootstrap';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// const Box = {
//     backgroundColor: "#40A7E9"
//}
export default function ImgData(props) {

    const { sdata: {sname, imges, title, links, desct}}  = props;
  return (
    <>
      <div className='CardBox'>
        <div className='ImgBox'>
          <img src={imges} width="200px" />
            <div className='CardInfo'>
              <span>{title}</span>
              <h3>{sname}</h3>
              <p>{desct}</p>
              <a href={links} target='_blank'>Watch Now</a>
            </div>
        </div>
      </div>
    </>
  )
}
