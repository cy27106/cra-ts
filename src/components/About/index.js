import React from "react";
import { Button } from 'antd-mobile';
import style from './style.module.scss'
import './style.css'

export default function About () {
  return (
      <div>
        <Button type="primary">click1234</Button>
        <p className={style.text}>text</p>
        <div className="test">test</div>
      </div>
  );
}
