import React from 'react'
import { Link } from 'react-router-dom'
import { PathEnum } from '../../../routes/pathsEnum'

export const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between', padding: "32px"}}>
      <Link to={PathEnum.PORTAL_B} style={{ width: '50px', height: '50px', border: '1px solid blue'}}>B</Link>
      <Link to={PathEnum.PORTAL_T} style={{ width: '50px', height: '50px', border: '1px solid blue'}}>T</Link>
    </div>
  )
}
