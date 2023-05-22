import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/Samuel.jpg";

const ProfileCard = () => {

  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Samuel Afolabi</span>
        <span>Fullstack Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>12</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine"></div>
          <div className="follow">
            <span>520</span>
            <span>Following</span>
          </div>

          {ProfilePage && (
            <>
              <div className="verticalLine">

              </div>
              <div className="follow">
                <span>3</span>
                <span>Post</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
            {ProfilePage ? "" : <span>My Profile</span>}
        

    </div>
  );
};

export default ProfileCard;
