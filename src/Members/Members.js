// import './App.css';
import { useEffect, useState } from "react";
import memberJson from "./members_data.json";
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import './Members.css';

function Members() {
  const [memberData, setMemberData] = useState([]);
  useEffect(() => {
    fetchMemberData(memberJson);
  }, [memberJson]);

  function rankTierToString(rankTier) {
    // const { strings } = store.getState().app;
    if (rankTier !== parseInt(rankTier, 10)) {
      // return strings.general_unknown;
      return "strings.general_unknown";
    }
    const intRankTier = parseInt(rankTier, 10);
    // let rank = strings[`rank_tier_${parseInt(intRankTier / 10, 10)}`];
    let rank = `rank_tier_${parseInt(intRankTier / 10, 10)}`;

    if (intRankTier > 9 && intRankTier !== 80) {
      rank += ` [${parseInt(intRankTier % 10, 10)}]`;
    }
    return rank;
  }

  const getRankTierMedal = (rankTier, leaderboardRank) => {
    let medalElement = null;
    const imgDescription = rankTierToString(rankTier);
    if (rankTier) {
      // if the players ranktier is 0 they are uncalibrated
      let iconPath;

      if (leaderboardRank) {
        // if the player is on leaderboard ie. immortal
        if (leaderboardRank <= 10) {
          // top 10 and top 100 positions have different icons
          iconPath =
            `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8c.png`;
        } else if (leaderboardRank <= 100) {
          iconPath =
            `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8b.png`;
        } else {
          iconPath =
            `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8.png`;
        }
        medalElement = (
          <div className="rankTierContainer">
            <div
              className="rankMedal"
              data-hint={imgDescription}
              data-hint-position="top"
            >
              <img className="rankMedal-icon" src={iconPath} alt="icon" />
              {leaderboardRank && (
                <span className="rankMedal-board">{leaderboardRank}</span>
              )}
            </div>
          </div>
        );
      } else {
        // everyone who isn't immortal has an icon and some number of stars
        const intRankTier = parseInt(rankTier, 10);
        let star = intRankTier % 10;

        if (star < 1) {
          // I'm not sure if ranktier can give a number outside this range but better safe than sorry
          star = 1;
        } else if (star > 7) {
          star = 7;
        }

        const starPath = `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_star_${star}.png`;
        iconPath = `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_${Math.floor(
          intRankTier / 10
        )}.png`;
        medalElement = (
          <div className="rankTierContainer">
            <div
              className="rankMedal"
              data-hint={imgDescription}
              data-hint-position="top"
            >
              <img className="rankMedal-icon" src={iconPath} alt="icon" />
              {star !== 0 ? (
                <img className="rankMedal-star" src={starPath} alt="star" />
              ) : (
                ""
              )}
              {/* {leaderboardRank && (
                <span className="rankMedal-board">{leaderboardRank}</span>
              )} */}
            </div>
          </div>
        );
      }
    } else {
      // uncalibrated players
      const iconPath =
        `${window.location.origin}/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_0.png`;
      medalElement = (
        <div className="rankTierContainer">
          <div
            className="rankMedal"
            data-hint={imgDescription}
            data-hint-position="top"
          >
            <img className="rankMedal-icon" src={iconPath} alt="icon" />
          </div>
        </div>
      );
    }
    return medalElement;
  };

  const fetchMemberData = (data) => {
    const promises = data.map((x) => {
      return fetch(`https://api.opendota.com/api/players/${x.account_id}`).then(
        (response) => {
          return response.json();
        }
      );
    });
    Promise.all(promises).then((results) => {
      setMemberData(results);
    });
  };
  return (
  < div className='member-container'>
  <div className='header'>
    <span className='name'>CHAOS</span>
  </div>
  <div className="title">Members</div>
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col  span={6}>
        <div className='col-title'>Name</div>
      </Col>
      <Col  span={6}>
        <div className='col-title'>Real Name</div>
      </Col>
      <Col  span={6}>
        <div className='col-title'>Image</div>
      </Col>
      <Col span={6}>
        <div className='col-title'>Rank</div>
      </Col>
      </Row>
      <Divider orientation="left"></Divider>
           {memberData.map((x, index) => (
             <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='col-title' span={6}>
                {x && x.profile && x.profile.personaname
                  ? x.profile.personaname
                  : "Please share data"}
              </Col>
              <Col className='col-title' span={6}>{memberJson[index].name}</Col>
              <Col className='col-title' span={6}>
                <img
                width="50"
                height="50"
                  src={
                    x && x.profile && x.profile.avatar ? x.profile.avatar : null
                  }
                />
              </Col>
              <Col className='col-title' span={6}>
                {getRankTierMedal(
                  x && x.rank_tier ? x.rank_tier : 0,
                  x && x.leaderboard_rank ? x.leaderboard_rank : 0
                )}
              </Col>
            </Row>
            <Divider orientation="left"></Divider>
            </>
          ))}
    
  </div>
  );
}

export default Members;
