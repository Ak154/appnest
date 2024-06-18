import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const Cards = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "10px",
      }}
    >
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            architecto!
          </Typography>
          <div style={{display:"inline-block", marginTop: "20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            orem Ipsum is simply dummy text of the printing
          </Typography>
          <div style={{display:"inline-block", marginTop:"20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <div style={{display:"inline-block", marginTop:"20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            mollitia!
          </Typography>
          <div style={{display:"inline-block", marginTop:"20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            deleniti!
          </Typography>
          <div style={{display:"inline-block", marginTop:"20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
        />
        <CardContent>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h6" component="div">
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            facere?
          </Typography>
          <div style={{display:"inline-block", marginTop:"20px"}} > 
            <del>RS500</del>
            <p>RS300(40%Off)</p>
         </div>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            AddToCart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
