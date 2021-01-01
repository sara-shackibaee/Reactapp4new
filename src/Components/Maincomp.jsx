import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import  h  from '../Picture/h.jpg'
import  a  from '../Picture/a.jpg'
import  f  from '../Picture/f.jpg'
import  k  from '../Picture/k.jpg'
import  l  from '../Picture/l.jpg'
import  p  from '../Picture/p.jpg'
import './CSS/main.css'
import {
    
    Link,
    
  } from "react-router-dom";
  
export default class Maincomp extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div style={{textAlign:'center'}}  >
                                
                                <Link to="/H"  className='myLink'>
                                    <img src={h} ></img>
                                    <p>گوشی موبایل سامسونگ  </p>
                                    <p>Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت</p>
                                    <p>۹,۰۹۹,۰۰۰ تومان</p>
                                </Link>
                            </div>
                        
                        </Col>
                        <Col sm={4}>
                            <div   style={{textAlign:'center'}}>
                                <Link to='/A' className='myLink'>
                                    <img src={a}></img>
                                    <p>گوشی موبایل سامسونگ</p>
                                    <p>Galaxy A01 Core SM-A013G/DS دو سیم کارت ظرفیت 16 گیگابایت</p>
                                    <p>۲,۳۲۹,۰۰۰ تومان</p>  
                                </Link>
                               
                            </div>
                        </Col>
                        <Col sm={4}>
                            <Link to='/F' className='myLink'>

                                <img src={f}></img>
                                <p>گوشی موبایل شیائومی</p>
                                <p> Redmi Note 8 Pro m1906g7G دو سیم‌ کارت ظرفیت 128 گیگابایت</p>
                                <p>۸,۳۰۰,۰۰۰ تومان</p> 
                            </Link>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Link to='/K' className='myLink'>
                                <img src={k}></img>
                                <p>گوشی موبایل سامسونگ </p>
                                <p>Galaxy A31 SM-A315F/DS دو سیم کارت ظرفیت 128 گیگابایت</p>
                                <p>۶,۵۴۹,۰۰۰ تومان</p> 
                            </Link>
                       
                        </Col>
                        <Col sm={4}>
                            <Link to='/L' className='myLink'>

                            <img src={l}></img>
                            <p>گوشی موبایل سامسونگ </p>
                                <p>Galaxy A11 SM-A115F/DS دو سیم کارت ظرفیت 32 گیگابایت با 2 گیگابایت رم</p>
                                <p>۶,۵۴۹,۰۰۰ تومان</p> 
                            </Link>
                        
                        </Col>
                        <Col sm={4}>
                            <Link to='/P' className='myLink'>
                                <img src={p}></img>
                                    <p>گوشی موبایل اپل </p>
                                    <p> iPhone SE 2020 A2275 ظرفیت 128 گیگابایت</p>
                                    <p>۱۹,۰۵۰,۰۰۰ تومان</p> 
                            </Link>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
