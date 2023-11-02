import { MoreHoriz } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";

const Card = ({ item }) => {
  const {userData} = useContext(MyContext) ;
  const [userName , setUserName] = useState("") ;
  const [isAvail , setIsAvail] = useState(false) ;
  useEffect(() => {
    const arr = userData.filter((data) => {
      return data.id === item.userId ;
    })
    setUserName(arr[0].name[0]) ;
    setIsAvail(arr[0].available) ;
  })

  return (
    <div className="card">
      <div className="card-info">
        <span className="card-info-top">{item.id}</span>
        <p className="card-info-title">{item.title}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "gray",
            fontSize: "14px",
            width: "150px",
            marginTop: "5px",
          }}
        >
          <div>
            <MoreHoriz fontSize="very small" />
          </div>

          {item.tag.map((temp) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "0.1px solid #F4F5F8",
                padding: "2px",
                borderRadius: "5px",
                fontSize: "12px",
                marginLeft : "5px"
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "gray",
                  marginRight: "5px",
                }}
              ></div>
              <span>{temp}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-image">
        <div>{userName}</div>
        <span style={isAvail === true ? {backgroundColor:"orange"} : {backgroundColor:"gray"}}></span>
        {/* <img src="https://static.toiimg.com/photo/75503656.cms" alt="" /> */}
      </div>
    </div>
  );
};

export default Card;
