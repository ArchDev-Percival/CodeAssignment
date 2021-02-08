import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import {getCountryFlag} from "../utils/countryCodes"
import { Height } from "@material-ui/icons";


export default function Profile() {

  const { user } = useAuth0();

  return (
    <div >
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", height: "150px"}}>
      <img src={user.picture}/>
      <img src={getCountryFlag(user["https://example.com/country"])} height={"inherit"}/>
    </div>
    <Card >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <strong>User Email:&nbsp;</strong> {user.email} &nbsp;{user.email_verified?"[✔️ verified]":"[❌ not verified]"}&nbsp;<br/>
            <strong>Timezone:</strong> {user["https://example.com/timezone"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
