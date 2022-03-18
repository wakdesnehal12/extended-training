import React from 'react';
import ImgData from './ImgData';


export default function Card() {

    const cardData = [
        {
            sname: "DARK",
            imges: "https://th.bing.com/th/id/R.e1776ec1b9947d7903e8b09e407ad5c2?rik=OBo%2bGjrmtNM%2fvw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2014%2f12%2fdark-undead-reaper.jpg&ehk=C6CnmKVrZlHuMstS3PDBx8AqbXQWAq%2fyNkCzLJq%2f2cw%3d&risl=&pid=ImgRaw&r=0",
            title: "A Netflix Original Series",
            links: "https://www.netflix.com/in/title/80100172",
            desct: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
        },

        {
            sname: "DARK",
            imges: "https://th.bing.com/th/id/R.e1776ec1b9947d7903e8b09e407ad5c2?rik=OBo%2bGjrmtNM%2fvw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2014%2f12%2fdark-undead-reaper.jpg&ehk=C6CnmKVrZlHuMstS3PDBx8AqbXQWAq%2fyNkCzLJq%2f2cw%3d&risl=&pid=ImgRaw&r=0",
            title: "A Netflix Original Series",
            links: "https://www.netflix.com/in/title/80100172",
            desct: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
        },

        {
            sname: "DARK",
            imges: "https://th.bing.com/th/id/R.e1776ec1b9947d7903e8b09e407ad5c2?rik=OBo%2bGjrmtNM%2fvw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2014%2f12%2fdark-undead-reaper.jpg&ehk=C6CnmKVrZlHuMstS3PDBx8AqbXQWAq%2fyNkCzLJq%2f2cw%3d&risl=&pid=ImgRaw&r=0",
            title: "A Netflix Original Series",
            links: "https://www.netflix.com/in/title/80100172",
            desct: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
        }
    ]
  return (
    <>
        <div className='Container'>
                    {
                        cardData.map((data) => 
                            <ImgData
                                sdata={data}
                            />
                        )
                    }

        </div>
    </>
  )
}
