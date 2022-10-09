import React, { useState } from 'react';
import axios from 'axios'

type Props = {
  slug: string
}

const LikeButton = (props: Props) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    if (!active) {
      axios.put(`/api/like?slug=${props.slug}`, {})
      setActive(true)
    }
  }

  return (
    <span>👍 <button onClick={handleClick}>いいね！する</button></span>
  )
}

export default LikeButton
