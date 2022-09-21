import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h1>Display detail of product {id}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium ad vel quibusdam, possimus ipsum dolorem veritatis fugiat vitae natus dolores accusantium optio commodi explicabo eos soluta repudiandae eligendi nesciunt, expedita deleniti ipsam sequi! Temporibus consequuntur et eveniet ipsum ad voluptatem illo dignissimos nobis dolorem, amet placeat delectus iusto totam laborum ducimus eius qui dicta, ex animi minus aspernatur cupiditate. Impedit, iure sit quos assumenda libero repellendus! Sit, quasi soluta veniam esse amet eveniet, quidem architecto aspernatur facilis alias laudantium corrupti doloribus, itaque dolor a beatae molestiae voluptates fuga placeat minima. Similique aliquid sequi, officiis voluptates earum asperiores hic dolore?å</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
