import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  h  from '../Picture/h.jpg'
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    maxHeight:900,
    padding:10,
    border:3,
    margin:30,
    backgroundColor:'yellow',
    textAlign:'center'
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function H() {
  const history = useHistory();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function clickhandel(){
      alert("محصول به لیست خرید شما اضافه شد")
  }

  return (

   
         <Container>
                 <Row>
                        <Col sm={4}>
                            <img src={h} ></img>
                        
                        </Col>
                        <Col sm={4}>
                            
                        
                                    <Card className={classes.root} >
                                
                                <CardContent>

                                    <Typography>:ویژگی های گوشی</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>
                                                حافظه داخلی:
                                        32 گیگابایت</p>
                                        <p>
                                        شبکه های ارتباطی:
                                        4G، 3G، 2G</p>
                                        <p>دوربین:
                                        3 ماژول دوربین</p>
                                        <p>
                                        سیستم عامل:
                                        Android</p>
                                        <p> توضیحات سیم کارت:
                                        سایز نانو (8.8 × 12.3 میلی‌متر)</p>
                                        <p>
                                        مقدار RAM:
                                        2 گیگابایت</p>
                                        <p>
                                        نسخه سیستم عامل:
                                        Android 10</p>
                                        <p>
                                        فناوری صفحه‌نمایش:
                                        PLS TFT</p>
                                        <p>
                                        ویژگی‌های خاص:
                                        مجهز به حس‌گر اثرانگشتفبلتمناسب عکاسی</p>
                                        <p>
                                        اندازه:
                                        6.4</p>
                                        <p>
                                        تعداد سیم کارت:
                                        دو</p>
                                </Typography>
                                </CardContent>
                                <Button variant="contained" color="primary" disableElevation onClick={clickhandel}>افزودن به سبد خرید</Button>
                                
                                
                                
                                
                            </Card>
                </Col>
		</Row>
    <Row>
    <Button  variant="contained" color="primary" disableElevation onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </Button>
    </Row>
    </Container>
    

    
  );
}
